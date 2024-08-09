"use client";
import { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";
import { ArticleTile } from "@/components/contentful/ArticleTile";
import { PageBlogPostFieldsFragment } from "@/lib/__generated/sdk";

// import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { getPosts } from "@/actions/getPosts";
import { Button } from "@tremor/react";

interface ArticleTileGridProps extends HTMLProps<HTMLDivElement> {
  articles?: Array<PageBlogPostFieldsFragment | null>;
  postCount?: number | null;
  slug: string | null | undefined;
  locale: string;
  source: string;
}

const NUMBER_OF_USERS_TO_FETCH = 10;

export default function ArticleTileGrid({
  articles,
  postCount,
  className,
  slug,
  locale,
  source,
  ...props
}: ArticleTileGridProps) {
  const [offset, setOffset] = useState(NUMBER_OF_USERS_TO_FETCH);
  const [posts, setPosts] = useState<any>(articles);
  // Infinte scroll
  // const { ref, inView } = useInView();

  const loadMorePosts = async () => {
    const apiPosts = await getPosts(
      offset,
      NUMBER_OF_USERS_TO_FETCH,
      locale || "",
      false,
      source || "",
      slug || ""
    );

    setPosts([...posts, ...apiPosts.posts]);
    setOffset(offset + NUMBER_OF_USERS_TO_FETCH);
  };

  // console.log("posts", postCount);

  //Infinte scroll
  // useEffect(() => {
  //   if (inView) {
  //     loadMorePosts();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [inView]);

  return posts && posts.length > 0 ? (
    <>
      <div
        className={twMerge(
          "grid grid-cols-1 gap-y-4 gap-x-5 md:grid-cols-4 lg:gap-x-12 lg:gap-y-12",
          className
        )}
        {...props}
      >
        {posts.map((article: any, index: number) => {
          return article ? <ArticleTile key={index} article={article} /> : null;
        })}
      </div>
      {/* Infinite Scroll */}
      {/* <div ref={ref}>Loading...</div> */}
      {/* <div ref={ref}></div> */}

      {/* Load More Button */}
      {source !== "relatedposts" && (
        <>
          <div className="flex flex-col items-center">
            <Button
              onClick={loadMorePosts}
              disabled={offset >= (postCount ?? 0)}
              size="lg"
              className="mt-4 sm:flex sm:max-w-md"
            >
              Load more
            </Button>
          </div>
          {/* {source !== "tag" && <Pagination totalPages={totalPages} />} */}
        </>
      )}
    </>
  ) : null;
}
