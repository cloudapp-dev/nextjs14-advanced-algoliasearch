"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import LoadingButton from "@/components/tools/loadingbutton/loadingbutton.component";

// Utility function to generate a random alphanumeric string of a specified length
const generateRandomName = (length: number) => {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const CreateStorageAccountForm: React.FC = () => {
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
  const [containers, setContainers] = useState<string[]>([]); // State to store fetched containers
  const [azureops, setAzureOps] = useState(""); // State for Azure Operations
  const [hasStorageAccount, setHasStorageAccount] = useState(false); // State to check if user already has a storage account

  const handleTagChange = (key: string, value: string) => {
    setTags({ ...tags, [key]: value });
  };

  const generateNewNames = () => {
    setResourceGroupName(generateRandomName(24));
    setAccountName(generateRandomName(24));
  };

  const listContainersEndpoint = `https://cloudappfunctionapplinux.azurewebsites.net`;

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
        const data: { hasStorageAccount: boolean } = await response.json();
        setHasStorageAccount(data.hasStorageAccount);
      } else {
        console.error("Error checking storage account existence.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Function to check if user already has a storage account
  const checkIfAccountName_RgNameExists = async () => {
    if (!resourceGroupName) return; // No resourceGroupName available
    if (!accountName) return; // No accountName available

    try {
      let isUnique = false;

      while (!isUnique) {
        const response = await fetch(
          "/api/azure/storageaccount/check-accountname-rgname",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: user_az_id,
              storageAccountName: accountName,
              resourceGroupName: resourceGroupName,
            }),
          }
        );

        if (response.ok) {
          const data: { hasStorageAccount: boolean; hasRgName: boolean } =
            await response.json();

          // If both names are unique, exit the loop
          if (!data.hasStorageAccount && !data.hasRgName) {
            isUnique = true;
          } else {
            // Regenerate names if they already exist
            if (data.hasStorageAccount) {
              setAccountName(generateRandomName(24)); // Generate new random account name
            }
            if (data.hasRgName) {
              setResourceGroupName(generateRandomName(24)); // Generate new random resource group name
            }
          }
        } else {
          console.error("Error checking storage account existence.");
          break; // Exit the loop if there is an error
        }
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

    setLoading(true);
    setMessage("");
    setAzureOps("delete");

    try {
      const responserg = await fetch(
        "/api/azure/storageaccount/check-accountname-rgname",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user_az_id,
            storageAccountName: "",
            resourceGroupName: "",
          }),
        }
      );

      let rgName = "";
      let staName = "";

      if (responserg.ok) {
        const DataRg = await responserg.json();
        staName = DataRg.RgName[0]?.storageAccounts[0]?.storageAccountName;
        rgName = DataRg.RgName[0]?.name;
      }

      const response = await fetch(
        "/api/azure/resources/deleteresourcegroupservicebus",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify({
            resourceGroupName: rgName,
            user_email: user_email,
          }),
        }
      );

      if (response.ok) {
        const operation = "delete";
        const value = "pending";

        // Call the function to create a record in the operation table
        const responseOps = await fetch(
          "/api/azure/resources/manageoperations",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              resourceGroupName,
              operation,
              value,
            }),
          }
        );
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

    // Check if storageaccount and/or Resource Group already exists

    try {
      const response = await fetch(
        "/api/azure/resources/createstorageaccountservicebus",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify({
            resourceGroupName,
            accountName,
            location,
            tags,
            containerName,
            user_az_id,
            user_email,
          }),
        }
      );

      if (response.ok) {
        const operation = "create";
        const value = "pending";

        // Call the function to create a record in the operation table
        const responseOps = await fetch(
          "/api/azure/resources/manageoperations",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              resourceGroupName,
              operation,
              value,
            }),
          }
        );
      } else {
        const errorData = await response.text();
        setMessage(`Error: ${errorData}`);
      }
    } catch (error) {
      setMessage(`Error: ${error}`);
    }
  };

  // Function to list containers in the newly created storage account
  const listContainers = async (accountName: string, accessKey: string) => {
    // Encode the storage account key using encodeURIComponent
    const encodedAccessKey = encodeURIComponent(accessKey);
    try {
      const response = await fetch(
        `${listContainersEndpoint}/api/liststoragecontainerhttp`,
        {
          method: "POST",
          body: JSON.stringify({
            storageAccountName: accountName,
            storageAccountKey: accessKey,
          }),
          headers: {
            "Content-Type": "application/json",
            "x-functions-key": token || "",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setContainers(data.containers || []);
        setMessage(message + " Containers listed successfully!");
      } else {
        const errorData = await response.text();
        setMessage(`Error fetching containers: ${errorData}`);
      }
    } catch (error) {
      setMessage(`Error fetching containers: ${error}`);
    }
  };

  // Function to refresh container list
  // const handleRefreshContainers = async () => {
  //   if (!accountName || !storageAccountKey) {
  //     setMessage(
  //       "Storage account name and key are required to refresh containers."
  //     );
  //     return;
  //   }

  //   setLoading(true);
  //   // setMessage("");
  //   // await listContainers(accountName, storageAccountKey); // Re-use the function to list containers
  //   setLoading(false);
  // };

  return (
    <div className="max-w-lg p-6 mx-auto mt-6 bg-gray-400 rounded-lg shadow-md">
      <h2 className="mb-4 text-2xl font-bold text-center">
        {hasStorageAccount
          ? "You already have a storage account"
          : "Create Storage Account"}
      </h2>
      {/* Delete Storage Account Button */}
      {hasStorageAccount && (
        <LoadingButton
          loading={loading}
          onClick={handleDeleteStorageAccount}
          startlabel="Deleting Storage Account"
          loadinglabel="Deleting ..."
        />
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

export default CreateStorageAccountForm;
