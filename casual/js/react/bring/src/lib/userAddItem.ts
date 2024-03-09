export const userAddItem = async(listUUID: string, itemName: string, itemDesc: string = "") => {
  console.log(`Adding item ${itemName} with specs ${itemDesc} from list ${listUUID}`);

  // Implement your logic to interact with the API, e.g., using fetch
  const response = await fetch(`/api/addItem?itemId=${itemName}&itemDesc=${itemDesc}&listUUID=${listUUID}`, {
    method: 'POST',
  });

  // Handle the response as needed
  const data = await response.json();
  return data;
}
