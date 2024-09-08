import {zodErrorResponse} from "../../utils/response.utils";
import {Status} from "../../utils/interfaces/Status";
import {ItemSchema} from "./item.model";
import {z} from "zod";


export async function postItemByItemIdController (request: Request, response: Response) : Promise<Response | undefined> {
    try {
        const validationResult = ItemSchema.safeParse(request.body)
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const {itemDescription, itemPhoto, itemPrice, itemOrder} = validationResult.data

        const item: ItemId = request.session.profile as ItemId

        const itemId: string = item.itemId as string
        const item: Item = {
            itemId: null,
            itemSectionId,
            itemDescription,
            itemPhoto,
            itemPrice,
            itemOrder
        }

        const result await insertItem(item)

        const status: Status = {status: 200, message: result, data: null}
        return response.json(status)
    } catch (error) {
        console.log(error)
        return response.json({
            status: 500,
            message: 'Error creating item. Try again.',
            data: null})
    }
}


export async function getItemByItemIdController(request: Request, response: Response) : Promise<Response<Status>> {
    try{

        //validate itemId coming from request parameters
        const validateResult = ItemSchema.pick({itemId: true}).safeParse(request.params)

        // if validation is unsuccssful, return a preformatted response to client.
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        //grab the itemId off of the validated request parameters

        const {itemId} = validationResult.data

        //grab the item by itemId

        const data = await selectItemByItemId(itemId)

        // return the response to the client
        return response.json({
            status: 200,
            message: null,
            data})
    } catch (error: unknown) {
        console.error(error)
        return response.json({status: 500, message: 'internal servor error', data: null})
    }
}

export async function putItemByItemIdController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        //validate updated item coming from request body

        const validationResultForRequestBody = ItemSchema.safeParse(request.body)

        if(!validationResultForRequestBody.success) {
            return zodErrorResponse(response, validationResultRequestBody.error)
        }

        const validationResultForRequestParams = ItemSchema.pick({itemId: true}).safeParse(request.params)

        if(!validationResultForRequestParams.success) {
            return zodErrorResponse(response, validationResultForRequestParams.error)
        }

        const itemFromSession = request.session?.item
        const itemIdFromSession = itemFromSession?.itemId

        const {itemId} = validationResultForRequestParams.data

        if (itemIdFromSession !== itemId) {
            return response.json({status: 400, message: 'you cannot update an item that exists', data: null})
        }

        const {itemId, itemSectionId, itemDescription, itemPhoto, itemPrice, itemOrder} = validationResultForRequestBody.data

        const item: ItemId | null = await selectItemByItemId(itemId)

        if(item === null) {
        return response.json({
            status: 400,
            message: 'item does not exist',
            data: null})
        }

        item.itemDescription = itemDescription
        item.itemPhoto = itemPhoto
        item.itemPrice = itemPrice
        item.itemOrder = itemOrder

        await updateItem(item)

        return response.json({status: 200, message:'item successfully updated', data: null})

    } catch (error: unknown) {
        return response.json({status: 500, message: 'internal servor error', data: null})
    }
}


export async function deleteItemByItemIdController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = z.string().uuid
        ({message: 'please provide a valid itemId'}).safeParse(request.params.itemId)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        //get the profile from the session
        const profile: PublicProfile = request.session.profile as string

        //set the item id to the item id from the session
        const Item

    }
}