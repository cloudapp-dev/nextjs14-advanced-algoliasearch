"use client";
import { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);

    const response = await fetch("/api/azure/storageaccount/upload", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      console.log("File uploaded successfully");
    } else {
      console.log("File upload failed");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-500 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Upload a File</h2>
      <input
        type="file"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
      />
      <button
        onClick={handleUpload}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Upload
      </button>
    </div>
  );
};

export default FileUpload;
