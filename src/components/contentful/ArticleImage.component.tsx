"use client";
import { twMerge } from "tailwind-merge";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { CtfImage } from "@/components/contentful/CtfImage.component";
import { ComponentRichImage } from "@/lib/__generated/sdk";
import { Asset } from "@/lib/__generated/sdk";

interface ArticleImageProps {
  image: ComponentRichImage;
}

// interface AssetProps {
//   asset: Asset;
// }

interface AssetProps {
  image: Asset;
}

export const ArticleImage = ({ image }: AssetProps) => {
  return image ? (
    <figure>
      <div className="flex justify-center">
        <Zoom>
          {/* rounded-2xl border border-gray300 shadow-lg */}
          <CtfImage
            nextImageProps={{
              className: twMerge(
                "mt-0 mb-0 ",
                "shadow-lg dark:shadow-white dark:shadow-sm-light"
              ),
            }}
            {...image}
          />
        </Zoom>
      </div>
      {image.title && <figcaption className="mt-4">{image.title}</figcaption>}
    </figure>
  ) : null;
};

// export const ArticleImage = ({ image }: ArticleImageProps) => {
//   return image.image ? (
//     <figure>
//       <div className="flex justify-center">
//         <CtfImage
//           nextImageProps={{
//             className: twMerge(
//               "mt-0 mb-0 ",
//               image.fullWidth
//                 ? "md:w-screen md:max-w-[calc(100vw-40px)] md:shrink-0"
//                 : "shadow-lg dark:shadow-white dark:shadow-sm-light"
//             ),
//           }}
//           {...image.image}
//         />
//       </div>
//       {image.caption && (
//         <figcaption className="mt-4">{image.caption}</figcaption>
//       )}
//     </figure>
//   ) : null;
// };
