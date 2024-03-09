"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { userAddItem} from "../../../lib/userAddItem";

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
    <form 
      className="text-black"
      onSubmit={(e) => addNewItem(e, props.uuid)}>
      <h3>Add an Item!</h3>
      <input
        type="text"
        placeholder="Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={itemDesc}
        onChange={(e) => setItemDesc(e.target.value)}
      />
      <button className="text-white" type="submit">
        Add Item
      </button>
    </form>
  );
}
