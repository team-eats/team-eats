


import {z} from "zod";
import {sql} from "../../utils/database.utils";


//create schema

export const ItemSchema = z.object ({
    itemId: z.string({
        required_error: 'please provide a valid item id.',
        invalid_type_error: 'itemId must be a valid a valid uuid.'
    })
        .uuid({message: 'please provide a valid item uuid'})
        .nullable(),
    itemSectionId: z.string({
        required_error: 'please provide a valid uuid for item section',
        invalid_type_error: 'itemId must be a string',
    })
        .uuid({message: 'please provide a valid itemSection uuid'}),

    itemName: z.string({
        required_error: 'please provide an item name',
        invalid_type_error: 'ItemName must be a string'
    }).max(100, {message: 'please provide an item name not exceeding 100 characters.'}).min(1,{message: 'please provide an item name greater than 1 character.'}),

    itemDescription: z.string({
        required_error: 'please provide an item description',
        invalid_type_error: 'itemId must be a string'
    })
        .max(255, {message: 'please provide an item description not exceeding 255 character.'}).min(1, {message: 'please provide an item description greater than 1 character.'}),

    itemPhoto: z.string({
        required_error: 'please provide a valid item photo.',
        invalid_type_error: 'itemPhoto must be a string.',
    }).nullable(),

    itemPrice: z.coerce.number({
        required_error: 'please provide dollar amount.',
        invalid_type_error: 'item must have a price.',
    }),

    itemOrder: z.number({
        required_error: 'please provide an order,',
        invalid_type_error: 'item must have an order.'
    })
})

export type Item = z.infer<typeof ItemSchema>

    //add, select, update, delete

export async function insertItem(item: Item) : Promise<string> {
        //deconstruct the object

    const {itemId,
        itemSectionId,
        itemName,
        itemDescription,
        itemPhoto,
        itemPrice,
        itemOrder} = item

        //insert item into item table

    await sql` INSERT INTO item (
            item_id, 
            item_section_id, 
            item_name,
            item_description, 
            item_photo, 
            item_price, 
            item_order)
        VALUES (
            gen_random_uuid(), 
            ${itemSectionId}, 
            ${itemName}, 
            ${itemDescription}, 
            ${itemPhoto}, 
            ${itemPrice}, 
            ${itemOrder})`

    return 'Item successfully submitted'
}

export async function selectItemByItemId (itemId: string) : Promise<Item | null> {
    const rowList = await sql`SELECT 
            item_id, 
            item_section_id, 
            item_name, 
            item_description, 
            item_photo, 
            item_price, 
            item_order 
        FROM item 
        WHERE item_id = ${itemId}`
console.log(rowList[0].itemPrice)
        // enforce that the result is an array of one profile or null
    const result = ItemSchema.array().max(1).parse(rowList)

    return result?.length === 0 ? null : result[0]
}


    //update an item to item table
export async function updateItem (item: Item) : Promise<string> {
    const {
        itemId,
        itemName,
        itemDescription,
        itemPhoto,
        itemPrice,
        itemOrder} = item

    await sql `UPDATE item SET 
                 item_name = ${itemName},
                 item_description = ${itemDescription},
                 item_photo = ${itemPhoto},
                 item_price = ${itemPrice},
                 item_order = ${itemOrder}
             WHERE item_id = ${itemId}`

    return 'item updated successfully'
}


export async function deleteItemByItemId(itemId: string): Promise<string> {
        //delete the item from the item table in database by itemId
    await sql`DELETE
        FROM item 
        WHERE item_id = ${itemId}`

    return 'Item successfully deleted.'

}
