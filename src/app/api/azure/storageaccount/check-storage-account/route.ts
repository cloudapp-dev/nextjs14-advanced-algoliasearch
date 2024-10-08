import { NextRequest, NextResponse } from "next/server";
import prisma_storageaccount from "@/lib/prisma_storageaccounts";
import { getToken } from "next-auth/jwt";

export async function POST(req: NextRequest) {
  const token = await getToken({ req });

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { userId } = await req.json();

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required." },
        { status: 400 }
      );
    }

    // Check if a storage account exists for the given user ID
    const storageAccount = await prisma_storageaccount.storageAccount.findMany({
      where: {
        userId: userId,
      },
      select: {
        storageAccountName: true,
        accessKey: true,
        containers: {
          select: {
            containerName: true,
          },
        },
        resourceGroup: {
          select: {
            name: true,
          },
        },
      },
    });

    return NextResponse.json(
      {
        hasStorageAccount: !!storageAccount,
        storageAccountName: storageAccount[0]?.storageAccountName || "",
        accessKey: storageAccount[0]?.accessKey || "",
        containerName: storageAccount[0]?.containers[0]?.containerName || "",
        resourceGroupName: storageAccount[0]?.resourceGroup.name || "",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error checking storage account:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
