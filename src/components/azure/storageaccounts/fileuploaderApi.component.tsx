"use client";

import { useState, useEffect, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

// Helper function to format file sizes in MB
const formatFileSizeMB = (size: number) => {
  return `${(size / (1024 * 1024)).toFixed(2)} MB`;
};

interface FileWithProgress {
  file: File;
  progress: number;
  uploaded: boolean;
}

const MAX_DISK_SPACE_MB = 5 * 1024; // 5 GB in MB

const FileUploaderApi = () => {
  const [files, setFiles] = useState<FileWithProgress[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<
    { name: string; size: number }[]
  >([]);

  const [totalDiskSpace, setTotalDiskSpace] = useState<number>(0);

  // Fetch the list of uploaded files from the server and calculate total disk space
  const fetchUploadedFiles = async () => {
    const response = await fetch("/api/azure/storageaccount/list");
    const data = await response.json();
    setUploadedFiles(data.files);

    const totalSize = data.files.reduce(
      (acc: number, file: { size: number }) => acc + file.size,
      0
    );
    setTotalDiskSpace(totalSize / (1024 * 1024)); // Convert total size to MB
    setFiles([]); // Clear the upload list after successful uploads
  };

  // Handle file drop
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map((file) => ({
      file,
      progress: 0,
      uploaded: false,
    }));
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
  });

  // Handle file upload
  const handleUpload = async () => {
    const updatedFiles = [...files];

    for (let i = 0; i < files.length; i++) {
      const { file } = files[i];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("fileName", file.name);

      const xhr = new XMLHttpRequest();
      xhr.open("POST", "/api/azure/storageaccount/upload", true);

      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentComplete = (event.loaded / event.total) * 100;
          updatedFiles[i].progress = percentComplete;
          setFiles([...updatedFiles]);
        }
      };

      xhr.onload = () => {
        if (xhr.status === 200) {
          console.log(`File ${file.name} uploaded successfully`);
        } else {
          console.error(`File ${file.name} upload failed`);
        }
      };

      xhr.onerror = () => {
        console.error(`File ${file.name} upload failed due to a network error`);
      };

      await new Promise((resolve) => {
        xhr.onloadend = resolve;
        xhr.send(formData);
      });
    }

    // Refresh the uploaded files list after all uploads are done
    await fetchUploadedFiles();
    // Clear the upload list after successful uploads
    setFiles([]);
  };

  // Handle file deletion before upload
  const handleDeleteBeforeUpload = (index: number) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  // Handle file deletion after upload
  const handleDeleteAfterUpload = async (fileName: string) => {
    try {
      const response = await fetch(
        `/api/azure/storageaccount/filedelete?fileName=${encodeURIComponent(
          fileName
        )}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.log(`File ${fileName} deleted successfully`);
        fetchUploadedFiles(); // Refresh the uploaded files list after deletion
      } else {
        console.error(`Failed to delete file ${fileName}`);
      }
    } catch (error) {
      console.error(`Error deleting file ${fileName}:`, error);
    }
  };

  // Handle deletion of all files
  const handleDeleteAll = async () => {
    try {
      const response = await fetch("/api/azure/storageaccount/deleteall", {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("All files deleted successfully");
        fetchUploadedFiles(); // Refresh the uploaded files list after deletion
      } else {
        console.error("Failed to delete all files");
      }
    } catch (error) {
      console.error("Error deleting all files:", error);
    }
  };

  // Fetch files on component mount
  useEffect(() => {
    fetchUploadedFiles();
  }, []);

  // Data for the donut chart
  const donutChartData = {
    labels: ["Used Space", "Free Space"],
    datasets: [
      {
        data: [totalDiskSpace, MAX_DISK_SPACE_MB - totalDiskSpace],
        backgroundColor: ["#3b82f6", "#e5e7eb"], // Blue for used space, grey for free space
        hoverBackgroundColor: ["#2563eb", "#d1d5db"],
        borderWidth: 1,
      },
    ],
  };

  // Options for the donut chart to place text in the middle
  const donutChartOptions: any = {
    cutout: "70%", // Creates space in the center of the donut
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            return `${tooltipItem.label}: ${tooltipItem.raw.toFixed(2)} MB`;
          },
        },
      },
    },
    elements: {
      center: {
        text: `${totalDiskSpace.toFixed(2)} MB / ${MAX_DISK_SPACE_MB.toFixed(
          2
        )} MB`,
        color: "#333", // Center text color
        fontStyle: "Arial", // Center text font style
        sidePadding: 5, // Padding around the center text
      },
    },
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-8">
        Multi-File Upload to Azure Storage via API
        {totalDiskSpace > 0 && (
          <span className="text-lg font-normal">
            {" "}
            ({formatFileSizeMB(totalDiskSpace * 1024 * 1024)} used)
          </span>
        )}
      </h1>

      {/* Donut Chart for Disk Space */}
      <div className="relative mb-8 flex justify-center">
        <div className="h-64 w-64">
          {/* Adjust these values to control the size */}
          <Doughnut data={donutChartData} options={donutChartOptions} />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg font-bold dark:text-white text-gray-800">
            {totalDiskSpace.toFixed(2)} MB
          </span>
          <span className="text-sm text-gray-500">
            of {MAX_DISK_SPACE_MB.toFixed(2)} MB
          </span>
        </div>
      </div>

      {/* File Upload Section with Dropzone */}
      <div>
        <h2 className="text-xl font-bold mb-4">Upload Files</h2>
        <div
          {...getRootProps()}
          className={`p-6 border-2 border-dashed rounded-lg cursor-pointer ${
            isDragActive ? "border-blue-500" : "border-gray-300"
          }`}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="text-center text-gray-600">Drop the files here...</p>
          ) : (
            <p className="text-center text-gray-600">
              Drag & drop files here, or click to select files
            </p>
          )}
        </div>
        <button
          onClick={handleUpload}
          className={`mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition ${
            files.length === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={files.length === 0}
        >
          {files.length === 0 ? "Select files to upload" : "Upload All Files"}
        </button>

        {/* Display Selected Files with Progress and Delete Option */}
        {files.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2">Selected Files</h3>
            <ul className="space-y-2">
              {files.map((fileWithProgress, index) => (
                <li key={index} className="flex items-center space-x-4">
                  {/* File name */}
                  <span className="dark:text-white text-gray-700 w-1/3 break-words">
                    {fileWithProgress.file.name}
                  </span>

                  {/* Progress bar with percentage */}
                  <div className="flex items-center w-1/2">
                    <div className="relative w-full bg-gray-200 rounded-full h-4">
                      <div
                        className="bg-blue-600 h-4 rounded-full"
                        style={{ width: `${fileWithProgress.progress}%` }}
                      ></div>
                      <span className="absolute inset-0 flex justify-center items-center text-white text-sm">
                        {fileWithProgress.progress.toFixed(0)}%
                      </span>
                    </div>
                  </div>

                  {/* Delete button */}
                  <button
                    onClick={() => handleDeleteBeforeUpload(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Uploaded Files Section with Delete Option */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Uploaded Files</h2>
        {uploadedFiles.length > 0 && (
          <>
            <button
              onClick={handleDeleteAll}
              className="mb-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Delete All Files
            </button>
            <button
              onClick={fetchUploadedFiles}
              className="ml-4 mb-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Refresh File List
            </button>
            <ul className="list-disc  pl-6 space-y-2">
              {uploadedFiles.map((file, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between dark:text-white text-gray-700"
                >
                  <span>
                    {file.name} - {formatFileSizeMB(file.size)}
                  </span>
                  <button
                    onClick={() => handleDeleteAfterUpload(file.name)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default FileUploaderApi;
