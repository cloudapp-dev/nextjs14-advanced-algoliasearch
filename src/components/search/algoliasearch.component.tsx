"use client";

import algoliasearch from "algoliasearch/lite";
import { Hit as AlgoliaHit } from "instantsearch.js";
import {
  Hits,
  SearchBox,
  RefinementList,
  DynamicWidgets,
} from "react-instantsearch";
import { PageBlogPostFieldsFragment } from "@/lib/__generated/sdk";
import { InstantSearchNext } from "react-instantsearch-nextjs";
import { Panel } from "@/components/search/panel.component";
import { useParams, useSearchParams } from "next/navigation";
import type { LocaleTypes } from "@/app/i18n/settings";
import CardAlgolia from "./cardalgolia.component";

interface ArticleAuthorProps {
  article: PageBlogPostFieldsFragment;
}

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || "",
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY || ""
);

type CardProps = {
  hit: AlgoliaHit<{
    intName: string;
    image: string;
    pubdate: Date;
    slug: string;
    width: number;
    height: number;
    tags: string[];
    lang_de: string;
    lang_en: string;
    short_de: string;
    short_en: string;
    title_de: string;
    title_en: string;
    // lang: {
    //   "de-DE": { content: string; shortDescription: string; title: string };
    //   "en-US": { content: string; shortDescription: string; title: string };
    // };
  }>;
};

let locale: LocaleTypes;

function Hit({ hit }: CardProps) {
  const blurURL = new URL(hit.image);
  blurURL.searchParams.set("w", "10");

  return (
    <div>
      <CardAlgolia key={hit.objectID} result={hit} />
    </div>
  );
}

export default function Search() {
  const urlSearchParams = useSearchParams();
  const params = Object.fromEntries(urlSearchParams.entries());

  locale = useParams()?.locale as LocaleTypes;
  return (
    <InstantSearchNext
      searchClient={client}
      indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME}
      routing={{
        router: {
          cleanUrlOnDispose: false,
          windowTitle(routeState) {
            const indexState = routeState.indexName || {};
            return indexState.query
              ? `MyWebsite - Results for: ${indexState.query}`
              : "MyWebsite - Results page";
          },
        },
      }}
      future={{
        preserveSharedStateOnUnmount: true,
      }}
    >
      <div className="Container mx-4">
        <div>
          <DynamicWidgets fallbackComponent={FallbackComponent} />
        </div>
        <div>
          <SearchBox className="p-3 shadow-sm" />
          <Hits
            hitComponent={Hit}
            classNames={{
              root: "MyCustomHits",
            }}
          />
        </div>
      </div>
    </InstantSearchNext>
  );
}

function FallbackComponent({ attribute }: { attribute: string }) {
  return (
    <Panel header={attribute}>
      <RefinementList
        classNames={{
          root: "MyCustomRefinementList",
        }}
        attribute={attribute}
        limit={8}
        showMore={true}
        showMoreLimit={20}
      />
    </Panel>
  );
}
