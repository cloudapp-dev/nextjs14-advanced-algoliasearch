"use client";
// Social Sharing
import { TwitterShare } from "react-share-lite";
import { FacebookShare } from "react-share-lite";
import { LinkedinShare } from "react-share-lite";
import { WhatsappShare } from "react-share-lite";

interface ShareProps {
  title: string;
  slug: string;
  hashtags?: string;
  locale: string;
}

export default function SocialSharingLite({
  title,
  slug,
  hashtags,
  locale,
}: ShareProps) {
  return (
    <div className="flex justify-center">
      <TwitterShare
        url={locale + "/" + slug || ""}
        title={title || ""}
        size={44}
      />
      <FacebookShare
        url={locale + "/" + slug || ""}
        quote={title || ""}
        hashtag={"#react-share-kit"}
        size={44}
      />
      <LinkedinShare url={locale + "/" + slug || ""} size={44} />
      <WhatsappShare
        url={locale + "/" + slug || ""}
        title={title || ""}
        separator=":: "
        size={44}
      />
    </div>
  );
}
