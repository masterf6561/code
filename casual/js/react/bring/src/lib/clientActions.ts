const bringApi = require('bring-shopping');

export const removeItem = async(listUUID: string, itemName: string) => {
  const bring = new bringApi({mail: "moritz.lechner02@gmail.com", password: "gehomert27"});
  try{
    await bring.login();
  }
  catch(error){
    console.log(error.message);
  }

  bring.moveToRecentList(listUUID, itemName);
  const newList = await bring.getItems(listUUID);
  return newList;
}

export const addItem = async(listUUID: string, itemName: string, itemDesc: string) => {
  const bring = new bringApi({mail: "moritz.lechner02@gmail.com", password: "gehomert27"});
  try{
    await bring.login();
  }
  catch(error){
    console.log(error.message);
  }
  bring.saveItem(listUUID, itemName, itemDesc)
  const newList = await bring.getItems(listUUID);
  return newList;

}

