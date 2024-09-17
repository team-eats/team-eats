import {Item, ItemSchema} from "@/app/utils/models/items/item.validator";
import {unstable_noStore as noStore} from "next/cache";


export async function fetchMenuItemByItemSectionId(itemSectionId: string): Promise<Item[]>{
    noStore()
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/section/${itemSectionId}`, {
        method: "get",
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response: Response) => {
            if (!response.ok) {
                throw new Error('error fetching item by itemId')
            } else {
                return response.json()
            }
    })
    return ItemSchema.array().parse(data)

}

export async function fetch