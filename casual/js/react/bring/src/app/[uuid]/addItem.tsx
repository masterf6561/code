"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { userAddItem} from "../../lib/userAddItem";

export default function AddItem({ props }: any) {

  const [itemName, setItemName] = useState('');
  const [itemDesc, setItemDesc] = useState('');

  const router = useRouter();

  const addNewItem = async(event, listUUID: string) => {
    event.preventDefault();
    const response = await userAddItem(listUUID, itemName, itemDesc);
    const newList = response.list;
    if(response.status === "success"){
      router.refresh();
      setItemName("");
      setItemDesc("");
    }
  }

  return (
  <div className="max-w-md mx-auto mt-16 p-6 bg-bringSecondaryBackground rounded-md shadow-md">
    <form 
      className=""
      onSubmit={(e) => addNewItem(e, props.uuid)}>
      <h3 className="text-2xl font-semibold text-white text-center mb-6">Add an Item!</h3>
      <input
        type="text"
        placeholder="Name"
        value={itemName}
        className="w-full p-2 my-2 rounded-md focus:outline-none focus:border-blue-500"
        onChange={(e) => setItemName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={itemDesc}
        className="w-full p-2 my-2 rounded-md focus:outline-none focus:border-blue-500"
        onChange={(e) => setItemDesc(e.target.value)}
      />
      <button className="w-full bg-bringBackground text-white mt-4 p-3 rounded-md hover:bg-bringBackgroundHover focus:ring transition duration-300 ease-in-out" type="submit">
        Add Item
      </button>
    </form>
    </div>
  );
}
