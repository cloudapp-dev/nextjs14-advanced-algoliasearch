import { NextResponse, NextRequest } from "next/server";
import {
  BlobServiceClient,
  StorageSharedKeyCredential,
} from "@azure/storage-blob";

export async function DELETE(request: NextRequest) {
  const {
    AZURE_STORAGE_ACCOUNT_NAME,
    AZURE_STORAGE_ACCOUNT_KEY,
    AZURE_STORAGE_CONTAINER_NAME,
  } = process.env;

  if (
    !AZURE_STORAGE_ACCOUNT_NAME ||
    !AZURE_STORAGE_ACCOUNT_KEY ||
    !AZURE_STORAGE_CONTAINER_NAME
  ) {
    return NextResponse.json(
      { error: "Azure Storage credentials are missing" },
      { status: 500 }
    );
  }

  try {
    const blobServiceClient = new BlobServiceClient(
      `https://${AZURE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net`,
      new StorageSharedKeyCredential(
        AZURE_STORAGE_ACCOUNT_NAME,
        AZURE_STORAGE_ACCOUNT_KEY
      )
    );

    const containerClient = blobServiceClient.getContainerClient(
      AZURE_STORAGE_CONTAINER_NAME
    );

    for await (const blob of containerClient.listBlobsFlat()) {
      const blockBlobClient = containerClient.getBlockBlobClient(blob.name);
      await blockBlobClient.deleteIfExists();
    }

    return NextResponse.json({ message: "All files deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete all files" },
      { status: 500 }
    );
  }
}
