export const userRemoveItem = async(listUUID: string, itemName: string) => {
  console.log(`Removing item ${itemName} from list ${listUUID}`);

  // Implement your logic to interact with the API, e.g., using fetch
  const response = await fetch(`/api/removeItem?itemId=${itemName}&listUUID=${listUUID}`, {
    method: 'DELETE',
  });

  // Handle the response as needed
  const data = await response.json();
  return data;
}
