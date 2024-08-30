import {
  BlobServiceClient,
  StorageSharedKeyCredential,
  generateBlobSASQueryParameters,
  ContainerSASPermissions,
} from "@azure/storage-blob";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const fileName = body.fileName as string;

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

    const containerName = AZURE_STORAGE_CONTAINER_NAME;
    const containerClient = blobServiceClient.getContainerClient(
      AZURE_STORAGE_CONTAINER_NAME
    );

    const blobName = fileName;
    const blobClient = containerClient.getBlockBlobClient(blobName);

    const sasToken = generateBlobSASQueryParameters(
      {
        containerName,
        blobName,
        permissions: ContainerSASPermissions.parse("cwr"), // Create, Write, Read permissions
        startsOn: new Date(),
        expiresOn: new Date(new Date().valueOf() + 3600 * 1000), // 1 hour
      },
      blobServiceClient.credential as StorageSharedKeyCredential
    ).toString();

    return NextResponse.json({
      uploadUrl: `${blobClient.url}?${sasToken}`,
      blobUrl: blobClient.url,
    });
  } catch (error) {
    return NextResponse.json({ error: "File upload failed!" }, { status: 500 });
  }
}
