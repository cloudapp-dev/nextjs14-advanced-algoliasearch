import { NextRequest, NextResponse } from "next/server";
import { client } from "@/lib/client";
import { fallbackLng, locales } from "@/app/i18n/settings";
import { PageBlogPostOrder } from "@/lib/__generated/sdk";

const apikey = process.env.API_KEY;

export async function POST(request: NextRequest) {
  if (request.headers.get("x-api-key") !== apikey) {
    return new NextResponse(
      JSON.stringify({ status: "fail", message: "You are not authorized" }),
      { status: 401 }
    );
  }

  const locale = fallbackLng as string;

  // Getting BlogPosts
  const blogPostsData = await client.pageBlogPostCollectionSmall({
    limit: 40,
    locale: locale,
    skip: 0,
    order: PageBlogPostOrder.PublishedDateDesc,
    preview: false,
  });
  const posts = blogPostsData.pageBlogPostCollection?.items;
  const postCount = blogPostsData.pageBlogPostCollection?.total;

  if (!posts) {
    return new NextResponse(
      JSON.stringify({ status: "fail", message: "Blog posts not found" }),
      { status: 404 }
    );
  }

  const UpdateUrl = process.env.NEXT_PUBLIC_BASE_URL + "/api/algoliasync";

  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    "x-api-key": process.env.API_KEY || "",
  };

  posts.map(async (post) => {
    const jsonData = {
      slug: post?.slug,
    };

    // console.log("jsonData", jsonData);

    const res = await fetch(UpdateUrl, {
      method: "POST",
      body: JSON.stringify(jsonData),
      headers: headers,
    });

    if (!res.ok) {
      const text = await res.text(); // get the response body for more information

      throw new Error(`
        Failed to fetch data
        Status: ${res.status}
        Response: ${text}
      `);
    }

    const result: any = await res.json();
  });

  return NextResponse.json(
    { posts: posts, postCount: postCount },
    { status: 200 }
  );
}
