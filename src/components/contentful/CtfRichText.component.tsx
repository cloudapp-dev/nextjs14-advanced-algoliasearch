"use client";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, Document, INLINES } from "@contentful/rich-text-types";
import { ArticleImage } from "@/components/contentful/ArticleImage.component";
import { ComponentRichImage, NavItem } from "@/lib/__generated/sdk";
import { Toc } from "@/components/contentful/ArticleToc";
import { ArticleTocItem } from "@/components/contentful/ArticleTocItem";
import { ArticleH3Item } from "@/components/contentful/ArticleH3Item";
import { CtfPicture } from "@/components/contentful/CtfPicture.component";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

import SyntaxHighlightPost from "@/components/tools/syntaxhighlight/syntaxhighlightPost.component";

export type EmbeddedEntryType = ComponentRichImage | NavItem | null;

export interface ContentfulRichTextInterface {
  json: Document;
  links?:
    | {
        entries: {
          block: Array<EmbeddedEntryType>;
        };
      }
    | any;
  source: string;
}

export const EmbeddedEntry = (entry: EmbeddedEntryType) => {
  switch (entry?.__typename) {
    case "ComponentRichImage":
      return <ArticleImage image={entry} />;
    case "NavItem":
      return (
        <Link
          href={entry?.href || ""}
          className="px-6 py-3 text-white no-underline transition duration-300 bg-blue-700 rounded-lg shadow-lg dark:hover:bg-blue-700 dark:bg-blue-600 hover:bg-blue-800"
        >
          {entry?.name}
        </Link>
      );
    default:
      return null;
  }
};

export const contentfulBaseRichTextOptions = ({
  links,
}: ContentfulRichTextInterface): Options => ({
  renderMark: {
    [MARKS.BOLD]: (text) => {
      return <b key={`${text}-key`}>{text}</b>;
    },
    [MARKS.CODE]: (text: any) => {
      let showCodeText = text.toString() || "";
      return (
        <>
          <SyntaxHighlightPost code={showCodeText} lang="typescript" />
        </>
      );
    },
    [MARKS.ITALIC]: (text) => {
      return <i key={`${text}-key`}>{text}</i>;
    },
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      if (node.data.uri.includes("https://")) {
        return (
          <a
            className="text-blue-500 underline hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
            href={node.data.uri}
          >
            {children}
          </a>
        );
      }

      return <Link href={node.data.uri}>{children}</Link>;
    },
    [BLOCKS.HEADING_2]: (node, children: any) => {
      return <ArticleTocItem dynamicId={children[0]} heading={children[0]} />;
    },
    [BLOCKS.HEADING_3]: (node, children: any) => {
      return <ArticleH3Item heading={children} />;
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      //Entfernen des <p> Tags bei Codeelementen im Frontend
      const markValue: any = node.content[0];
      let markLength: number = 0;
      if (markValue.hasOwnProperty("marks")) {
        markLength = markValue.marks.length || 0;
        if (markLength > 0) {
          const paragraph_type = markValue.marks[0].type;
          if (paragraph_type === "code") {
            return <div>{children}</div>;
          }
        } else {
          return <p>{children}</p>;
        }
      } else {
        return <p>{children}</p>;
      }
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      const entry = links?.entries?.block?.find(
        (item: EmbeddedEntryType) => item?.sys?.id === node.data.target.sys.id
      );

      if (!entry) return null;

      return <EmbeddedEntry {...entry} />;
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const asset = links?.assets?.block?.find(
        (item: any) => item?.sys?.id === node.data.target.sys.id
      );
      const assetType = asset.contentType;
      if (!asset) return null;
      switch (assetType) {
        case "video/mp4":
          return (
            <video width="100%" height="100%" controls>
              <source src={asset.url} type="video/mp4" />
            </video>
          );
        default:
          return (
            <>
              <figure>
                <div className="flex justify-center">
                  <CtfPicture
                    nextImageProps={{
                      className: twMerge(
                        "mt-0 mb-0 ",
                        "shadow-lg dark:shadow-white dark:shadow-sm-light"
                      ),
                      priority: false,
                    }}
                    {...asset}
                  />
                  ;
                </div>
              </figure>
            </>
          );
      }
    },
  },
});

export const CtfRichText = ({
  json,
  links,
  source,
}: ContentfulRichTextInterface) => {
  const baseOptions = contentfulBaseRichTextOptions({ links, json, source });
  if (!json) return null; // IF there is no content, return null
  const jsoncontent: any = json.content;
  const headings: string[] = [];

  jsoncontent.map((item: any) => {
    if (item.nodeType === "heading-2") {
      const headingvalue: any = item.content[0].value;
      headings.push(headingvalue);
    }
  });

  return (
    <article className="prose prose-lg max-w-none">
      {source === "article" && <Toc headings={headings} />}
      {documentToReactComponents(json, baseOptions)}
    </article>
  );
};
