// components/slugify/slugify.component.tsx
"use client";
import React, { useState } from "react";

// Utility function to slugify a string
const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
};

const Slugify: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [slugifiedText, setSlugifiedText] = useState<string>("");
  const [copySuccess, setCopySuccess] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text);
  };

  const handleSlugify = () => {
    setSlugifiedText(slugify(inputText));
    setCopySuccess(""); // Reset copy success message on input change
  };

  const handleClear = () => {
    setInputText("");
    setSlugifiedText("");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(slugifiedText);
      setCopySuccess("Copied!");
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };

  return (
    <div className="flex items-center justify-center p-4 ">
      <div className="w-full p-8 border border-gray-200 rounded-lg shadow-lg focus:border-indigo-500 focus:ring-indigo-500">
        <h2 className="mb-4 text-2xl font-semibold">
          INPUT STRING: (Article title, tutorial title or any web page title)
        </h2>

        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          className="block w-full h-10 pl-2 text-black border-gray-200 rounded-md bg-gray-200 sm:text-base"
          placeholder="Enter text to slugify"
        />
        <div className="flex space-x-2">
          <button
            onClick={handleSlugify}
            className="w-full px-4 py-2 mt-2 font-semibold text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Slugify (Generate Slug)
          </button>
          <button
            onClick={handleClear}
            className="w-full px-4 py-2 mt-2 font-semibold text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Clear
          </button>
        </div>
        <div className="w-full mt-4 mb-6 ">
          <p className="text-2xl font-semibold">
            OUTPUT: (Clean URL slug - Slugified Text)
          </p>
          <div className="block w-full mt-2 pl-2 text-black border-gray-200 rounded-md bg-gray-200 sm:text-base min-h-fit">
            {slugifiedText}
          </div>
          <button
            onClick={handleCopy}
            className="w-full px-4 py-2 mt-4 font-semibold text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Copy
          </button>
          {copySuccess && <p className="mt-2 text-green-500">{copySuccess}</p>}
        </div>
      </div>
    </div>
  );
};

export default Slugify;
