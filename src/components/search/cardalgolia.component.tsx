"use client";

import Image from "next/image";
import Link from "next/link";
import { FormatDate } from "@/components/contentful/format-date/FormatDate";
import { useParams } from "next/navigation";
import type { LocaleTypes } from "@/app/i18n/settings";
import { twMerge } from "tailwind-merge";
import { ArticleLabel } from "@/components/contentful/ArticleLabel";
import { Hit as AlgoliaHit } from "instantsearch.js";
import { Highlight, Snippet } from "react-instantsearch";
import { fallbackLng } from "@/app/i18n/settings";

type CardProps = {
  result: AlgoliaHit<{
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

// interface LangProps {
//   title: string;
//   content: string;
//   shortDescription: string;
// }

export default function CardAlgolia({ result }: CardProps) {
  const locale = useParams()?.locale as LocaleTypes;
  // const langNr = locale === "de-DE" ? 0 : 1;
  // const langresult = JSON.parse(
  //   JSON.stringify(Object.entries(result.lang)[langNr][1])
  // ) as LangProps;

  const className = "md:grid-cols-2 lg:grid-cols-3";
  const classNameImage = "object-cover aspect-[16/10] w-full";

  const blurURL = new URL(result.image);
  blurURL.searchParams.set("w", "10");

  return (
    // {/* group - wird benötigt damit man unten im Classname darauf verweisen kann mit group-hover:.... */}
    <div className="flex flex-col">
      <div
        className={twMerge(
          "flex flex-1 flex-col overflow-hidden dark:shadow-white shadow-lg dark:shadow-sm-light",
          className
        )}
      >
        <Link href={`/${locale}/${result.slug}`}>
          <Image
            src={result.image}
            width={result.width || 722}
            height={result.height || 590}
            sizes="(max-width: 1200px) 100vw, 50vw"
            placeholder="blur"
            blurDataURL={blurURL.toString()}
            alt={
              (locale == fallbackLng ? result.title_en : result.title_de) || ""
            }
            className={twMerge(classNameImage, "transition-all")}
          ></Image>
        </Link>
        <div className="flex flex-col flex-1 px-4 py-3 dark:bg-gray-800 md:px-5 md:py-4 lg:px-7 lg:py-5">
          {locale === fallbackLng ? (
            <Link href={`/${locale}/${result.slug}`}>
              <p className="mb-2 h3 line-clamp-2 text-gray-800 dark:text-[#AEC1CC] md:mb-3">
                <Highlight attribute="title_en" hit={result} />
              </p>
            </Link>
          ) : (
            <Link href={`/${locale}/${result.slug}`}>
              <p className="mb-2 h3 line-clamp-2 text-gray-800 dark:text-[#AEC1CC] md:mb-3">
                <Highlight attribute="title_de" hit={result} />
              </p>
            </Link>
          )}

          {locale === fallbackLng ? (
            <p className="mt-2 text-base line-clamp-2">
              <Snippet attribute="short_en" hit={result} />
            </p>
          ) : (
            <p className="mt-2 text-base line-clamp-2">
              <Snippet attribute="short_de" hit={result} />
            </p>
          )}

          <div className="flex flex-wrap max-w-2xl gap-2 mr-auto">
            {result.tags.map((tag: string, index) => (
              <Link href={`/${locale}/search/${tag}`} key={index}>
                <ArticleLabel className="flex items-center ml-1">
                  {tag}
                </ArticleLabel>
              </Link>
            ))}
            <div className={twMerge("ml-auto pl-2 text-xs text-gray-600")}>
              <FormatDate date={result.pubdate} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
