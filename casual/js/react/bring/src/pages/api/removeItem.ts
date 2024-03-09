import {removeItem} from "../../lib/clientActions";
import type { NextApiRequest, NextApiResponse } from 'next'
 
type Item = {
  name: string,
  specification: string,
}

type ItemList = {
  uuid: string,
  status:  string,
  purchase: Item[],
  recently: Item[]
}

type ResponseData = {
  status: string,
  list: ItemList | undefined,
}
 
export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
if (req.method === 'DELETE') {
    const {itemId, listUUID} = req.query;
    const newList: ItemList = await removeItem(listUUID, itemId);
    res.status(200).json({ status: "success", list: newList });
  } else {
    res.status(405).json({ status: "Method Not Allowed", list: undefined });
  }
}
