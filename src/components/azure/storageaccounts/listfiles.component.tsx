"use client";
import { useEffect, useState } from "react";

const FileList = () => {
  const [files, setFiles] = useState<string[]>([]);

  const fetchFiles = async () => {
    const response = await fetch("/api/azure/storageaccount/list");
    const data = await response.json();
    setFiles(data.files);
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div className="dark:bg-gray-500 bg-white p-6 rounded-lg shadow-md mt-8">
      <h2 className="text-xl  dark:text-white text-black font-bold mb-4">
        Uploaded Files
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        {files.map((file, index) => (
          <li key={index} className="text-gray-700">
            {file}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
