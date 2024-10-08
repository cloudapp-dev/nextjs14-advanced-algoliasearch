import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const authtoken = await getToken({ req });
  const isAdmin = authtoken?.role === "Admin";
  if (!authtoken || !isAdmin) {
    return NextResponse.json(
      { error: "Unauthorized Create Storage API" },
      { status: 401 }
    );
  }

  // Respond with a success message
  const accessToken = authtoken?.accessToken;

  if (!accessToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { tagKey, tagValue, resourceGroupName, user_email } =
      await req.json();

    // Payload to send
    const payload: any = {
      tagKey,
      tagValue,
      resourceGroupName,
      user_email,
    };
    // Convert the payload to a JSON string
    const message = payload;

    if (!message) {
      return NextResponse.json(
        { error: "Message body is required." },
        { status: 400 }
      );
    }

    // Rest API URL Service Bus
    const url = `https://${process.env.AZURE_APP_SERVICE_NAME}.azurewebsites.net/api/storage/delete-resource-groups-by-tag`;

    try {
      const response = await fetch(url, {
        method: "DELETE",
        body: JSON.stringify(payload),
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Check if the response body exists and is not empty
      const responseText = await response.text();
      if (responseText) {
        return NextResponse.json({ message: "Message sent successfully" });
        // const data = JSON.parse(responseText);
        // return data;
      } else {
        // console.warn("No response body received");
        return NextResponse.json({ message: responseText });
        // return NextResponse.json({ message: "Message sent successfully" });
      }
    } catch (err) {
      console.error("Error sending message to App Service:", err);
      return NextResponse.json(
        { error: "Error sending message to App Service" },
        { status: 500 }
      );
    }
  } catch (err) {
    console.error("Error processing request:", err);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
