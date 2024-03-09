const bringApi = require("bring-shopping");
import {PurchaseItem, RecentItem} from "./item";
import {ListItem} from "../page";
import AddItem from "./addItem";


export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 2,
  fetchCache = "only-no-store",
  runtime = "nodejs",
  preferredRegion = "auto"


export default async function ItemsPage({ params }: any){

  const bring = new bringApi({mail: "moritz.lechner02@gmail.com", password: "gehomert27"});
    try{
      await bring.login();
    }
    catch(error){
      console.log(error.message);
  }

  const getItems = async(uuid: string) => {
    
    const listItems = await bring.getItems(uuid);
    return listItems;
  }


  const lists = await getItems(params.uuid);
  const purchase = lists["purchase"];
  const recently = lists["recently"];

  return(
  <>
  <div className="flex items-center justify-center">
    <div className="mx-1 md:mx-4"> 
    <h1 className={`px-4 my-4 text-2xl font-semibold`}>
     Purchase: 
    </h1>
    {
      purchase.map((item: ListItem) => {
        return(
            <PurchaseItem
              key={item.name} 
              props={{
                uuid: params.uuid,
                Item: item,
              }}
              />
        )
      })
    }
    <h1 className={`px-4 my-4 text-2xl font-semibold`} >
     Recently: 
    </h1>
    {
      recently.map((item: ListItem) => {
        return(
            <RecentItem 
              key={item.name} 
              props={{
                uuid: params.uuid,
                Item: item,
              }}
              />
        )
      })
    }
    <AddItem props={{
      uuid: params.uuid
      }}/>

    </div>
    </div>
   </>
 )
}
