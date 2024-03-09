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
    console.log(error.message);
  }

  const response = await bring.loadLists();

  const lists = response["lists"];

  return lists;
}


export default async function Page() {
  const lists = await getLists(); 
  return(
    <div className="md:container md:mx-auto bg-bringBackground min-h-screen min-w-screen rounded-md">
      {
        lists.map((list: ResponseList) => {
          return(
            <div className="text-white">
              <Link href={`/bring/${list["listUuid"]}`} className={`m-3 px-3 text-3xl font-semibold text-white`} style={{"textColor": "white"}}>
                {list.name}
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}
