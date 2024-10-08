"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import LoadingButton from "@/components/tools/loadingbutton/loadingbutton.component";
import FileUploader from "@/components/azure/storageaccounts/fileuploader.component";

// Utility function to generate a random alphanumeric string of a specified length
const generateRandomName = (length: number) => {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const CreateStorageAccountFormAppService: React.FC = () => {
  const { data: session } = useSession();
  const user_az_id = session?.user?.sub;
  const user_email = session?.user?.email;

  //Get Access Token
  const token = session?.accessToken;

  const [resourceGroupName, setResourceGroupName] = useState(
    generateRandomName(24)
  ); // Random default value
  const [accountName, setAccountName] = useState(generateRandomName(24)); // Random default value
  const [location, setLocation] = useState("westeurope"); // Default to "westeurope"
  const [tags, setTags] = useState<{ [key: string]: string }>({
    env: "production",
    user: user_az_id || "",
  }); // Default value with example tag
  const [containerName, setContainerName] = useState("mycontainer"); // Default value
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [storageAccountName, setStorageAccountName] = useState(""); // State to store storage account name
  const [accessKey, setAccessKey] = useState(""); // State to store access key
  const [containers, setContainers] = useState<string[]>([]); // State to store fetched containers
  const [azureops, setAzureOps] = useState(""); // State for Azure Operations
  const [hasStorageAccount, setHasStorageAccount] = useState(false); // State to check if user already has a storage account

  // Function to check if user already has a storage account
  const checkIfUserHasStorageAccount = async () => {
    if (!user_az_id) return; // No user ID available

    try {
      const response = await fetch(
        "/api/azure/storageaccount/check-storage-account",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: user_az_id }),
        }
      );

      if (response.ok) {
        const data: {
          hasStorageAccount: boolean;
          storageAccountName: string;
          accessKey: string;
          containerName: string;
          resourceGroupName: string;
        } = await response.json();
        // setHasStorageAccount(data.hasStorageAccount);
        setHasStorageAccount(data.storageAccountName !== "");
        setStorageAccountName(data.storageAccountName);
        setAccessKey(data.accessKey);
        setContainerName(data.containerName || "mycontainer");
        setResourceGroupName(data.resourceGroupName);
        // console.log("resourceGroupName:", data.resourceGroupName);
      } else {
        console.error("Error checking storage account existence.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Funktion zum Abrufen des Werts aus der Datenbank
  const fetchData = async () => {
    try {
      const operation = azureops;
      const value = "status";

      const responseOps = await fetch("/api/azure/resources/manageoperations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          resourceGroupName,
          operation,
          value,
        }),
      });

      const data = await responseOps.json();

      if (azureops === "create") {
        console.log("Data: ", data.data.creation);
        if (data.data.creation === "Success") {
          setMessage("Storage account created successfully!");
          setHasStorageAccount(true); // Update the state to reflect the creation
          setLoading(false);
        }
      }
      if (azureops === "delete") {
        console.log("Data: ", data.data.deletion);
        if (data.data.deletion === "Success") {
          setMessage("Storage account successfully deleted!");
          setHasStorageAccount(false); // Update the state to reflect the creation
          setLoading(false);
        }
      }
    } catch (error) {
      console.error("Fehler beim Abrufen der Daten:", error);
    }
  };

  useEffect(() => {
    checkIfUserHasStorageAccount();
  }, [session]);

  // Überwacht Datenbankwertänderungen
  useEffect(() => {
    // Datenbankabfrage alle 5 Sekunden
    if (loading === false) return; // Nur abfragen, wenn der Ladezustand true ist
    const intervalId = setInterval(fetchData, 5000);

    return () => clearInterval(intervalId); // Bereinigen, wenn die Komponente unmontiert wird
  }, [loading === true]);

  // Delete storage account

  const handleDeleteStorageAccount = async () => {
    if (!accountName) return; // No storage account name available

    // Check if user has a storage account and get Resource Group Name
    checkIfUserHasStorageAccount();

    // console.log("Deleting resourceGroup:", resourceGroupName);

    setLoading(true);
    setMessage("");
    setAzureOps("delete");

    try {
      // Creating Records in Operationstable
      const operation = "delete";
      const value = "pending";

      // Call the function to create a record in the operation table
      const responseOps = await fetch("/api/azure/resources/manageoperations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          resourceGroupName,
          operation,
          value,
        }),
      });

      const response = await fetch(
        "/api/azure/resources/deleteresourcegroupappservice",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify({
            tagKey: "user",
            tagValue: user_az_id,
            user_email,
            resourceGroupName: resourceGroupName,
          }),
        }
      );

      if (response.ok) {
        const successData = await response.text();
        setMessage(`Success: ${successData}`);
      } else {
        const errorData = await response.text();
        setMessage(`Error: ${errorData}`);
      }
    } catch (error) {
      setMessage(`Error: ${error}`);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setAzureOps("create");
    setContainers([]); // Clear previous container list

    try {
      let randomName = resourceGroupName; // Start with the current state value

      // Check if Resource Group Name is empty
      if (resourceGroupName === "") {
        // console.error("Resource Group Name is empty");
        randomName = generateRandomName(24); // Generate a new name
        setResourceGroupName(randomName); // Update the state, but it may not reflect immediately
      }

      const newTags = { evn: "production", user: user_az_id };

      // Creating Records in Operationstable
      const operation = "create";
      const value = "pending";

      // Call the function to create a record in the operation table
      const responseOps = await fetch("/api/azure/resources/manageoperations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          resourceGroupName: randomName, // Use the `randomName` directly
          tags: newTags,
          operation,
          value,
        }),
      });

      const response = await fetch(
        "/api/azure/resources/createstorageaccountappservice",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify({
            resourceGroupName: randomName,
            accountName,
            location,
            tags: newTags,
            containerName,
            user_az_id,
            user_email,
          }),
        }
      );

      if (response.ok) {
        const successData = await response.text();
        setMessage(`Success: ${successData}`);
        checkIfUserHasStorageAccount();
      } else {
        const errorData = await response.text();
        setMessage(`Error: ${errorData}`);
      }
    } catch (error) {
      setMessage(`Error: ${error}`);
    }
  };

  return (
    <div className="max-w-lg p-6 mx-auto mt-6 bg-gray-400 rounded-lg shadow-md">
      <h2 className="mb-4 text-2xl font-bold text-center">
        {hasStorageAccount
          ? "You already have a storage account"
          : "Create Storage Account"}
      </h2>
      {/* Delete Storage Account Button */}
      {hasStorageAccount && (
        <>
          <LoadingButton
            loading={loading}
            onClick={handleDeleteStorageAccount}
            startlabel="Deleting Storage Account"
            loadinglabel="Deleting ..."
          />
          <div className="flex justify-center items-center min-h-screen">
            <FileUploader
              storageAccountName={storageAccountName}
              accessKey={accessKey}
              containerName={containerName}
            />
          </div>
        </>
      )}
      {!hasStorageAccount && (
        <LoadingButton
          loading={loading}
          onClick={handleSubmit}
          startlabel="Creating Storage Account"
          loadinglabel="Creating ..."
        />
      )}

      {/* Message display */}
      {message && (
        <p className="mt-4 text-sm font-medium text-center">{message}</p>
      )}
      {/* Containers list display */}
      {containers.length > 0 && (
        <div className="mt-6">
          <h3 className="mb-2 text-lg font-semibold">Containers:</h3>
          <ul className="list-disc list-inside">
            {containers.map((container) => (
              <li className="text-gray-600" key={container}>
                {container}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CreateStorageAccountFormAppService;
