import { NextResponse, NextRequest } from "next/server";
import {
  BlobServiceClient,
  StorageSharedKeyCredential,
} from "@azure/storage-blob";
import { getToken } from "next-auth/jwt";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const token = await getToken({ req });

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { storageAccountName, accessKey, containerName } = await req.json();

  // console.log("Accesskey", accessKey);
  // console.log("storageaccountname", storageAccountName);
  // console.log("containername", containerName);

  let AZURE_STORAGE_ACCOUNT_NAME: string = storageAccountName || "";
  let AZURE_STORAGE_ACCOUNT_KEY: string = accessKey || "";
  let AZURE_STORAGE_CONTAINER_NAME: string = containerName || "";

  // console.log("Azure Storage Account Name:", AZURE_STORAGE_ACCOUNT_NAME);
  // console.log("Azure Storage Account Key:", AZURE_STORAGE_ACCOUNT_KEY);
  // console.log("Azure Storage Container Name:", AZURE_STORAGE_CONTAINER_NAME);

  // const {
  //   AZURE_STORAGE_ACCOUNT_NAME,
  //   AZURE_STORAGE_ACCOUNT_KEY,
  //   AZURE_STORAGE_CONTAINER_NAME,
  // } = process.env;

  if (
    AZURE_STORAGE_ACCOUNT_NAME == "" ||
    AZURE_STORAGE_ACCOUNT_KEY == "" ||
    AZURE_STORAGE_CONTAINER_NAME == "" ||
    !AZURE_STORAGE_ACCOUNT_NAME ||
    !AZURE_STORAGE_ACCOUNT_KEY ||
    !AZURE_STORAGE_CONTAINER_NAME
  ) {
    console.log("LIST Azure Storage credentials are missing");
    const blobs: any = [];
    return NextResponse.json({ files: blobs });
    // return NextResponse.json(
    //   // { error: "Azure Storage credentials are missing" },
    //   // { status: 500 }
    // );
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
    const blobs = [];

    for await (const blob of containerClient.listBlobsFlat()) {
      blobs.push({
        name: blob.name,
        size: blob.properties.contentLength || 0, // Size in bytes
        createdAt: blob.properties.createdOn,
      });
    }

    return NextResponse.json({ files: blobs });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to list files" },
      { status: 500 }
    );
  }
}
