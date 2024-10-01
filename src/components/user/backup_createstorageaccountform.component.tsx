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

const CreateStorageAccountFormBackup: React.FC = () => {
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
  const [tagKey, setTagKey] = useState(""); // State for new tag key
  const [tagValue, setTagValue] = useState(""); // State for new tag value
  const [azureops, setAzureOps] = useState(""); // State for Azure Operations
  const [hasStorageAccount, setHasStorageAccount] = useState(false); // State to check if user already has a storage account

  const handleTagChange = (key: string, value: string) => {
    setTags({ ...tags, [key]: value });
  };

  const handleRemoveTag = (key: string) => {
    const newTags = { ...tags };
    delete newTags[key];
    setTags(newTags);
  };

  const handleAddTag = () => {
    if (tagKey && tagValue) {
      handleTagChange(tagKey.trim(), tagValue.trim());
      setTagKey(""); // Clear input after adding
      setTagValue(""); // Clear input after adding
    }
  };

  const generateNewNames = () => {
    setResourceGroupName(generateRandomName(24));
    setAccountName(generateRandomName(24));
  };

  const listContainersEndpoint = `https://test.azurewebsites.net/api/storage/get-storage-containers`;

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

        // setMessage("Storage account deleted successfully!");
        // setHasStorageAccount(false); // Update the state to reflect the deletion
      } else {
        const errorData = await response.text();
        setMessage(`Error: ${errorData}`);
      }
    } catch (error) {
      setMessage(`Error: ${error}`);
    }
    // finally {
    //   setLoading(false);
    // }
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

        // Call the function to list containers after successful creation
        // await listContainers(accountName, data.accessKey); // Passing the storage account name and access key
      } else {
        const errorData = await response.text();
        setMessage(`Error: ${errorData}`);
      }
    } catch (error) {
      setMessage(`Error: ${error}`);
    }
    // finally {
    //   setLoading(false);
    // }
  };

  // Function to list containers in the newly created storage account
  const listContainers = async (accountName: string, accessKey: string) => {
    // Encode the storage account key using encodeURIComponent
    const encodedAccessKey = encodeURIComponent(accessKey);
    try {
      const response = await fetch(
        `${listContainersEndpoint}?storageAccountName=${accountName}&storageAccountKey=${encodedAccessKey}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
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
  //   await listContainers(accountName, storageAccountKey); // Re-use the function to list containers
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
        // <div className="text-center mb-4">
        //   <button
        //     type="button"
        //     className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        //     onClick={handleDeleteStorageAccount}
        //     disabled={loading}
        //   >
        //     {loading ? "Deleting..." : "Delete Storage Account"}
        //   </button>
        // </div>
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
      {/* 
        // <div className="text-center mb-4">
        //   <button
        //     type="button"
        //     className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        //     onClick={handleDeleteStorageAccount}
        //     disabled={loading}
        //   >
        //     {loading ? "Deleting..." : "Delete Storage Account"}
        //   </button>
        // </div> */}

      {/* Button to refresh container list
      <div className="text-center mb-4">
        <button
          type="button"
          className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          onClick={handleRefreshContainers}
          disabled={!accountName || !storageAccountKey || loading}
        >
          {loading ? "Refreshing..." : "Refresh Container List"}
        </button>
      </div> */}
      {/* Button to generate new random names for Resource Group and Storage Account */}
      {!hasStorageAccount && (
        <>
          {/* <div className="text-center mb-4">
            <button
              type="button"
              className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={generateNewNames}
            >
              Generate New Random Names
            </button> 
          </div> */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* <div>
              <label className="block text-sm font-medium text-gray-700">
                Resource Group Name
              </label>
              <input
                type="text"
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={resourceGroupName}
                onChange={(e) => setResourceGroupName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Storage Account Name
              </label>
              <input
                type="text"
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <select
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="westeurope">West Europe (westeurope)</option>
                <option value="eastus">East US (eastus)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Container Name
              </label>
              <input
                type="text"
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={containerName}
                onChange={(e) => setContainerName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Add Tags
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  className="block w-1/2 p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Key"
                  value={tagKey}
                  onChange={(e) => setTagKey(e.target.value)}
                />
                <input
                  type="text"
                  className="block w-1/2 p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Value"
                  value={tagValue}
                  onChange={(e) => setTagValue(e.target.value)}
                />
                <button
                  type="button"
                  className="px-4 py-2 mt-1 text-white bg-green-500 rounded-md hover:bg-green-600"
                  onClick={handleAddTag}
                >
                  Add Tag
                </button>
              </div>
              <div className="mt-2 text-sm text-gray-500">
                {Object.entries(tags).map(([key, value]) => (
                  <div key={key} className="flex items-center">
                    {key}: {value}
                    <button
                      type="button"
                      className="ml-2 text-red-500"
                      onClick={() => handleRemoveTag(key)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div> */}
            {/* <LoadingButton
              loading={loading}
              onClick={handleSubmit}
              startlabel="Creating Storage Account"
              loadinglabel="Creating ..."
            /> */}
          </form>
        </>
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

export default CreateStorageAccountFormBackup;
