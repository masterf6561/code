const bringApi = require('bring-shopping');


const main = async() => {
  const bring = new bringApi({mail: "moritz.lechner02@gmail.com", password: "gehomert27"});
  try{
    await bring.login();
  }
  catch(error){
    console.log(error.message);
  }

  const lists = await bring.loadLists();
  console.log(lists);

  const Alina_und_ich_list = lists["lists"].find(list => list.name === "Alina und ich");
  const Alina_und_ich_list_uuid = Alina_und_ich_list["listUuid"];
  console.log(Alina_und_ich_list_uuid);

  const items = await bring.getItems(Alina_und_ich_list_uuid);
  console.log(items);

  // bring.saveItem(Alina_und_ich_list_uuid, "Paprika", "eine");
  bring.moveToRecentList(Alina_und_ich_list_uuid, "Paprika");
}

main();

