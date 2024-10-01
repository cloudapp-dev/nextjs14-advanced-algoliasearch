import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export const dynamic = "force-dynamic";

// Azure Service Bus connection details
const AZURE_SERVICE_BUS_NAMESPACE =
  process.env.AZURE_SERVICE_BUS_NAMESPACE || "";
const queueName = "delete-container-queue"; // Queue name

export async function POST(req: NextRequest) {
  const authtoken = await getToken({ req });
  const isAdmin = authtoken?.role === "Admin";
  if (!authtoken || !isAdmin) {
    return NextResponse.json(
      { error: "Unauthorized Create Storage API" },
      { status: 401 }
    );
  }

  const endpoint = `${process.env.NEXTAUTH_URL}/api/azure/resources`;

  const tokenresponse = await fetch(endpoint, {
    method: "GET",
  });

  if (!tokenresponse.ok) {
    throw new Error(`HTTP error! status: ${tokenresponse.status}`);
  }

  const data = await tokenresponse.json();
  // Respond with a success message

  const accessToken = data.data;

  if (!accessToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { resourceGroupName } = await req.json();

    // Payload to send
    const payload: any = {
      resourceGroupName,
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
    const url = `https://${AZURE_SERVICE_BUS_NAMESPACE}/${queueName}/messages`;

    try {
      const response = await fetch(url, {
        method: "POST",
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
      console.error("Error sending message to Service Bus:", err);
      return NextResponse.json(
        { error: "Error sending message to Service Bus" },
        { status: 500 }
      );
    }
  } catch (err) {
    console.error("Error processing request:", err);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
