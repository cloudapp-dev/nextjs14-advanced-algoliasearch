"use client";

import Image from "next/image";

const Buymeacoffe = () => {
  return (
    <a href="https://www.buymeacoffee.com/cloudappdev" target="_blank">
      <Image
        className="mt-4"
        src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
        alt="Buy Me A Coffee"
        style={{ height: "60px", width: "217px" }}
      />
    </a>
  );
};

export default Buymeacoffe;
