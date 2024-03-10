const bringApi = require("bring-shopping");
import Link from 'next/link';

interface ResponseList{
  listUuid: string,
  name: string,
  theme: string,
}

interface List{
  uuid: string, 
  status: 'SHARED',
  purchase: ListItem[],
  recently: ListItem[],

}

export interface ListItem{
  specification: string,
  name: string,
}

const getLists = async() => {
  const bring = new bringApi({mail: "moritz.lechner02@gmail.com", password: "gehomert27"});
  try{
    await bring.login();
  }
  catch(error){
    console.log("Error while logging into BringApi");
  }

  const response = await bring.loadLists();

  const lists = response["lists"];

  return lists;
}


export default async function Page() {
  const lists = await getLists(); 
  return(
    <div className="flex flex-col items-center justify-center h-screen p-4">
      {
        lists.map((list: ResponseList) => {
          return(
            <div className="m-6 p-7 w-full max-w-sm mx-auto text-white bg-gradient-to-r from-mediumaquamarine to-lightskyblue rounded-xl shadow-lg flex items-center space-x-4">
              <Link href={`/${list["listUuid"]}`} className={`m-3 px-3 text-3xl font-semibold `}>
                {list.name}
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}


