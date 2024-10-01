import type { AuthTokenResp } from "@/types/api";
import prisma from "@/lib/prisma";
import { unixTimestampToDate, urlBase64Decode } from "@/lib/utils";
import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const dynamic = "force-dynamic";

async function AzureToken() {
  const formdata = new FormData();

  formdata.append("grant_type", "client_credentials");
  formdata.append("client_id", process.env.AZURE_SERVICE_BUS_CLIENT_ID || "");
  formdata.append(
    "client_secret",
    process.env.AZURE_SERVICE_BUS_CLIENT_SECRET || ""
  );
  formdata.append("scope", process.env.AZURE_SERVICE_BUS_SCOPE || "");

  if (!process.env.AZURE_SERVICE_BUS_TOKEN_URL) {
    throw new Error("AZURE_SERVICE_BUS_TOKEN_URL is not set");
  }

  const res = await fetch(process.env.AZURE_SERVICE_BUS_TOKEN_URL, {
    method: "POST",
    body: formdata,
  });

  if (!res.ok) {
    const text = await res.text(); // get the response body for more information

    throw new Error(`
      Failed to fetch data
      Status: ${res.status}
      Response: ${text}
    `);
  }

  const newTokens: AuthTokenResp = await res.json();

  return newTokens;
}

// Delete all expired tokens
const deleteExpiredTokens = async () => {
  const now = new Date();

  try {
    const deletedTokens = await prisma.apiToken.deleteMany({
      where: {
        expirationDate: {
          lt: now, // Filters tokens where expirationDate is earlier than now
        },
      },
    });

    console.log(`${deletedTokens.count} expired tokens were deleted.`);
  } catch (error) {
    console.error("Error deleting expired tokens:", error);
  }
};

async function AzureData() {
  // Call the function to delete expired tokens
  deleteExpiredTokens();

  //Get the most recent token
  const mostRecentApiToken = await prisma.apiToken.findFirst({
    where: { tokenType: "Azure_Service_Bus" },
    orderBy: {
      addedOn: "desc",
    },
  });

  let token: string = "";

  if (mostRecentApiToken) {
    const { accessToken, expirationDate } = mostRecentApiToken;

    const tokenExpirationDate = new Date(expirationDate);
    const currentDate = new Date();

    token = accessToken;

    // compare the current date to the expiration date
    if (currentDate > tokenExpirationDate) {
      //Get Access Token
      const tokenazure: any = await AzureToken();

      const newTokens = tokenazure;
      const accessToken = newTokens.access_token;
      const refreshToken = newTokens.refresh_token || "";
      const { exp, nbf } = urlBase64Decode(accessToken.split(".")[1]);
      const newExpirationDate = unixTimestampToDate(exp);

      await prisma.apiToken.create({
        data: {
          accessToken: accessToken,
          refreshToken: refreshToken,
          expirationDate: newExpirationDate,
          tokenType: "Azure_Service_Bus",
          addedOn: new Date(),
        },
      });

      //Accesstoken der Variablen zuweisen
      token = accessToken;
    }
  } else {
    //Get Access Token
    const tokenazure: any = await AzureToken();
    const newTokens = tokenazure;

    const accessToken = newTokens.access_token;
    const refreshToken = newTokens.refresh_token || "";
    const { exp, nbf } = urlBase64Decode(accessToken.split(".")[1]);
    const newExpirationDate = unixTimestampToDate(exp);

    await prisma.apiToken.create({
      data: {
        accessToken: accessToken,
        refreshToken: refreshToken,
        expirationDate: newExpirationDate,
        tokenType: "Azure_Service_Bus",
        addedOn: new Date(),
      },
    });

    //Accesstoken der Variablen zuweisen
    token = accessToken;
  }

  return token;
}

export async function GET(req: NextRequest) {
  // const session = await getServerSession(authOptions);

  // const user = session?.user;
  // const role = session?.role;
  // console.log("session", session);

  // const authtoken = await getToken({ req });
  // const isAdmin = authtoken?.role === "Admin";
  // console.log("Authoken Admin Azure", authtoken?.role);
  // if (!authtoken || !isAdmin) {
  //   return NextResponse.json(
  //     { error: "Unauthorized Azure Access Token ServiceBus" },
  //     { status: 401 }
  //   );
  // }

  let data = null;

  //Get Access Token
  data = await AzureData();

  return NextResponse.json({
    data,
  });
}
