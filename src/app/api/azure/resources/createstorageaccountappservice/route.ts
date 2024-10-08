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
    const {
      resourceGroupName,
      accountName,
      location,
      containerName,
      user_email,
      user_az_id,
      tags,
    } = await req.json();

    // Payload to send
    const payload: any = {
      resourceGroupName,
      accountName,
      location,
      tags,
      containerName,
      user_email,
      user_az_id,
    };
    // Convert the payload to a JSON string
    const message = payload;

    // console.log("Payload", payload);

    if (!message) {
      return NextResponse.json(
        { error: "Message body is required." },
        { status: 400 }
      );
    }

    // Rest API URL Service Bus

    const url = `https://${process.env.AZURE_APP_SERVICE_NAME}.azurewebsites.net/api/storage/create-storage-account`;

    try {
      // Send message to Service Bus Queue using Azure REST API

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error ServiceBus! status: ${response.status}`);
      }

      // Check if the response body exists and is not empty
      const responseText = await response.text();
      if (responseText) {
        return NextResponse.json({ message: "Message sent successfully" });
        // const data = JSON.parse(responseText);
        // return data;
      } else {
        // console.warn("No response body received");
        // return NextResponse.json({ message: responseText });
        return NextResponse.json({
          message: "Message sent successfully via Text" + responseText,
        });
      }

      // I removed resopnse.json() because it was causing an error, since the StatusCode is 201 and there is no response body
      // const data = await response.json();
    } catch (err) {
      console.error("Error sending message to App Service", err);
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
