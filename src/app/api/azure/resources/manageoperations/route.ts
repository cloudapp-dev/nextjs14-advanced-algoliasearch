import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import prisma_storageaccount from "@/lib/prisma_storageaccounts";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const authtoken = await getToken({ req });
  const isAdmin = authtoken?.role === "Admin";
  if (!authtoken || !isAdmin) {
    return NextResponse.json(
      { error: "Unauthorized Operations API" },
      { status: 401 }
    );
  }

  try {
    const { resourceGroupName, operation, value } = await req.json();

    if (operation == "") {
      return NextResponse.json(
        { error: "Invalid request. Operation is missing" },
        { status: 400 }
      );
    }

    const creationvalue = operation === "create" ? value : "NoOps"; // If the operation is create, set the creation value to the value, otherwise set it to null
    const deleteionvalue = operation === "delete" ? value : "NoOps"; // If the operation is delete, set the deletion value to the value, otherwise set it to null

    const operationGetResult = await prisma_storageaccount.operations.findFirst(
      {
        where: {
          resourcegroup: resourceGroupName,
        },
      }
    );

    // If value is status, return the operation result
    if (value === "status") {
      return NextResponse.json({ data: operationGetResult }, { status: 200 });
    }

    let operationResult: any = "";

    if (!operationGetResult) {
      operationResult = await prisma_storageaccount.operations.create({
        data: {
          resourcegroup: resourceGroupName,
          creation: creationvalue,
          deletion: deleteionvalue,
        },
      });
    } else {
      if (operation === "create") {
        operationResult = await prisma_storageaccount.operations.update({
          where: {
            id: operationGetResult.id,
          },
          data: {
            creation: creationvalue,
          },
        });
      } else if (operation === "delete") {
        operationResult = await prisma_storageaccount.operations.update({
          where: {
            id: operationGetResult.id,
          },
          data: {
            deletion: deleteionvalue,
          },
        });
      }
    }

    return NextResponse.json({ message: operationResult }, { status: 200 });
  } catch (err) {
    console.error("Error processing request:", err);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
