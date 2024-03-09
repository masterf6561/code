"use client";

import {userRemoveItem} from "../../../lib/userRemoveItem";
import {useRouter} from "next/navigation";
import {userAddItem} from "../../../lib/userAddItem";

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
        className=""
        >
          <h2 className={`text-cyan-600`}>
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
        className=""
        >
          <h2 className={`text-black`}>
            {Item.name}
          </h2>
          <p className={``}>
            {Item.specification}
          </p>
        </button>
      )
}
