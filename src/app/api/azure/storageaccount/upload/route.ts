import { NextResponse, NextRequest } from "next/server";
import {
  BlobServiceClient,
  StorageSharedKeyCredential,
} from "@azure/storage-blob";

export async function POST(req: NextRequest, res: NextResponse) {
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
    const formData = await req.formData();
    const file = formData.get("file") as Blob;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

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
    const blobName = formData.get("fileName") as string;
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    await blockBlobClient.upload(buffer, buffer.length);

    return NextResponse.json({ message: "File uploaded successfully!" });
  } catch (error) {
    return NextResponse.json({ error: "File upload failed!" }, { status: 500 });
  }
}
