import { NextRequest, NextResponse } from "next/server";
import prisma_storageaccount from "@/lib/prisma_storageaccounts";
import { getToken } from "next-auth/jwt";

export async function POST(req: NextRequest) {
  const token = await getToken({ req });

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { userId, storageAccountName, resourceGroupName } = await req.json();

    if (!userId) {
      return NextResponse.json(
        { error: "UserId is required." },
        { status: 400 }
      );
    }

    const ResourceGroupData =
      await prisma_storageaccount.resourceGroup.findMany({
        select: {
          name: true, // Resource group name
          storageAccounts: {
            select: {
              storageAccountName: true, // Storage account name(s)
            },
          },
        },
      });

    // // Check if a storage account exists for the given user ID
    // const storageAccount = await prisma_storageaccount.storageAccount.findFirst(
    //   {
    //     where: { storageAccountName },
    //   }
    // );

    // Check if a storage account exists for the given user ID
    // const resourceGoupName =
    //   await prisma_storageaccount.resourceGroup.findFirst({
    //     where: { name: resourceGroup },
    //   });

    return NextResponse.json(
      { RgName: ResourceGroupData, StorageAccountName: "Test" },
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
