import {z} from "zod";


export const ItemSchema = z.object({
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


