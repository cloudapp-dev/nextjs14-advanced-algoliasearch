import NextImage, { ImageProps as NextImageProps } from "next/image";
import { getImageProps } from "next/image";
import { twMerge } from "tailwind-merge";

import { ImageFieldsFragment } from "@/lib/__generated/sdk";

interface ImageProps extends Omit<ImageFieldsFragment, "__typename"> {
  nextImageProps?: Omit<NextImageProps, "src" | "alt">;
}

export const CtfPicture = ({
  url,
  width,
  height,
  title,
  nextImageProps,
}: ImageProps) => {
  if (!url || !width || !height) return null;

  // let sizeProps = "(max-width: 1200px) 100vw, 50vw";
  // if (nextImageProps?.className === "w-full") {
  //   sizeProps = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";
  // }

  // if (
  //   nextImageProps?.className === "mt-0 mb-0 shadow-lg dark:shadow-sm-light"
  // ) {
  //   const heightnew = height;
  // }

  // common option
  const common_high = {
    alt: title || "",
    width: width,
    height: height,
    priority: nextImageProps?.priority,
    className: twMerge(nextImageProps?.className, "transition-all"),
  };

  // width: 800,
  // height: 500,
  const common_medium = {
    alt: title || "",
    width: 800,
    height: 500,
    className: twMerge(nextImageProps?.className, "transition-all"),
  };

  // width: 300,
  // height: 200,
  const common_low = {
    alt: title || "",
    width: 300,
    height: 200,
    className: twMerge(nextImageProps?.className, "transition-all"),
  };

  // Pass common as an argument with src in getImageProps and destructure the output.
  const {
    props: { srcSet: high },
  } = getImageProps({
    ...common_high,
    src: url,
    priority: nextImageProps?.priority,
  });

  const {
    props: { srcSet: medium },
  } = getImageProps({
    ...common_medium,
    src: url,
    priority: nextImageProps?.priority,
  });

  const {
    props: { srcSet: low, ...rest },
  } = getImageProps({
    ...common_low,
    src: url,
    priority: nextImageProps?.priority,
  });

  // console.log("rest", rest);

  return (
    <picture>
      <source media="(min-width: 1480px)" srcSet={high} />
      <source media="(min-width: 1280px)" srcSet={medium} />
      <source media="(max-width: 980px)" srcSet={low} />
      <source media="(max-width: 740px)" srcSet={low} />
      {/* //Fallback */}
      <img alt={title || ""} {...rest} />
      {nextImageProps?.className ===
        "mt-0 mb-0 shadow-lg dark:shadow-sm-light" && (
        <figcaption className="mt-4">{title || ""}</figcaption>
      )}
    </picture>
  );
};
