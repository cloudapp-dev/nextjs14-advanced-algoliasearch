import { NextResponse, NextRequest } from "next/server";
import {
  BlobServiceClient,
  StorageSharedKeyCredential,
} from "@azure/storage-blob";
import { getToken } from "next-auth/jwt";

export async function DELETE(req: NextRequest) {
  const token = await getToken({ req });

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { storageAccountName, accessKey, containerName } = await req.json();

  let AZURE_STORAGE_ACCOUNT_NAME: string = storageAccountName || "";
  let AZURE_STORAGE_ACCOUNT_KEY: string = accessKey || "";
  let AZURE_STORAGE_CONTAINER_NAME: string = containerName || "";

  const { searchParams } = new URL(req.url);
  const fileName = searchParams.get("fileName");

  if (!fileName) {
    return NextResponse.json(
      { error: "No file name provided" },
      { status: 400 }
    );
  }

  console.log("Azure Storage Account Name:", AZURE_STORAGE_ACCOUNT_NAME);
  console.log("Azure Storage Account Key:", AZURE_STORAGE_ACCOUNT_KEY);
  console.log("Azure Storage Container Name:", AZURE_STORAGE_CONTAINER_NAME);

  // const {
  //   AZURE_STORAGE_ACCOUNT_NAME,
  //   AZURE_STORAGE_ACCOUNT_KEY,
  //   AZURE_STORAGE_CONTAINER_NAME,
  // } = process.env;

  if (
    !AZURE_STORAGE_ACCOUNT_NAME ||
    !AZURE_STORAGE_ACCOUNT_KEY ||
    !AZURE_STORAGE_CONTAINER_NAME
  ) {
    return NextResponse.json(
      { error: "FileDelete Azure Storage credentials are missing" },
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
    const blockBlobClient = containerClient.getBlockBlobClient(fileName);

    await blockBlobClient.deleteIfExists();

    return NextResponse.json({
      message: `File ${fileName} deleted successfully`,
    });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to delete file ${fileName}` },
      { status: 500 }
    );
  }
}
