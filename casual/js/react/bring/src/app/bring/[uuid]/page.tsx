const bringApi = require("bring-shopping");
import { Item } from "./item";
import {ListItem} from "../page";

const getItems = async(uuid: string) => {
  const bring = new bringApi({mail: "moritz.lechner02@gmail.com", password: "gehomert27"});
  try{
    await bring.login();
  }
  catch(error){
    console.log(error.message);
  }

  const listItems = await bring.getItems(uuid);
  console.log(listItems);
  return listItems;
}

export default async function ItemsPage({ params }: any){

  const lists = await getItems(params.uuid);
  const purchase = lists["purchase"];
  const recently = lists["recently"];

  return(
  <>
  
    <h1 className={`mb-3 text-2xl font-semibold`}>
     Purchase: 
    </h1>
    {
      purchase.map((item: ListItem) => {
        return(
            <Item key={item.name} Item={item}/>
        )
      })
    }
    <h1 className={`mb-3 text-2xl font-semibold`} >
     Recently: 
    </h1>
    {
      recently.map((item: ListItem) => {
        return(
            <Item key={item.name} Item={item}/>
        )
      })
    }

  </>
 )
}
