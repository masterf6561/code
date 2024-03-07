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

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  runtime = "nodejs",
  preferredRegion = "auto"

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
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      <a
        href="/"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        rel="noopener noreferrer"
      >
      Home
      </a>
      {
        lists.map((list: ResponseList) => {
          return(
            <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              <Link href={`/bring/${list["listUuid"]}`} className={`mb-3 text-2xl font-semibold`}>
                {list.name}
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}
