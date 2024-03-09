"use client";

import {userRemoveItem} from "../../lib/userRemoveItem";
import {useRouter} from "next/navigation";
import {userAddItem} from "../../lib/userAddItem";

export interface ItemType {
  name: string,
  specification: string,
}

export interface ItemProps{
  Item: ItemType,
  bring: any,
  uuid: string,
}


export function PurchaseItem({props}:any) {
  
  const {Item, uuid} = props || {};
  const router = useRouter();

  const onClick = async () => {
    const response = await userRemoveItem(uuid, Item.name);
    if(response.status === "success"){
      router.refresh();
    }
  }

  return(
    
      <button
        onClick={() => onClick()}
        className="bg-bringHighlight w-24 h-24 align-middle m-2 text-white hover:bg-bringHighlightHover font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out"
        >
          <h2 className={`font-semibold`}>
            {Item.name}
          </h2>
          <p className={``}>
            {Item.specification}
          </p>
        </button>
      )
}

export function RecentItem({props}:any) {
  
  const {Item, uuid} = props || {};
  const router = useRouter();

  const onClick = async () => {

    const response = await userAddItem(uuid, Item.name, Item.specification);
    if(response.status === "success"){
      router.refresh();
    }
  }

  return(
    
      <button
        onClick={() => onClick()}
        className="bg-bringSecondary align-middle m-2 w-24 h-24 text-white hover:bg-bringSecondaryHover rounded-md shadow-md transition duration-300 ease-in-out"
        >
          <h2 className={`font-semibold`}>
            {Item.name}
          </h2>
          <p className={``}>
            {Item.specification}
          </p>
        </button>
      )
}
