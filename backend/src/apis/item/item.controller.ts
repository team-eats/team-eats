import {zodErrorResponse} from "../../utils/response.utils";
import {Status} from "../../utils/interfaces/Status";
import {deleteItemByItemId, insertItem, Item, ItemSchema, selectItemByItemId, updateItem} from "./item.model";
import {z} from "zod";
import {Request, Response} from "express";
import {selectSectionBySectionId} from "../section/section.model";
import {selectBusinessByBusinessId} from "../business/business.model";


export async function postItemController (request: Request, response: Response) : Promise<Response | undefined> {
    try {
        const validationResult = ItemSchema.safeParse(request.body)
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const {itemSectionId,itemDescription,  itemPhoto, itemPrice, itemOrder} = validationResult.data


        const item: Item = {
            itemId: null,
            itemSectionId,
            itemDescription,
            itemPhoto,
            itemPrice,
            itemOrder
        }

        const profileIdFromSession = request.session?.profile?.profileId

        const section = await selectSectionBySectionId(itemSectionId)

        const business = await selectBusinessByBusinessId(section?.sectionBusinessId ?? '')

        if (business?.businessProfileId !== profileIdFromSession) {
            return response.json ({
                status: 401,
                message: 'you cannot post a section on a business you do not own.',
                data: null
            })
        }

        const result = await insertItem(item)

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
        const validationResult = z.string().uuid({message: 'please provide a valid itemId.'}).safeParse(request.params.itemId)

        // if validation is unsuccessful, return a preformatted response to client.
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        //grab the itemId off of the validated request parameters

        const itemId = validationResult.data

        //grab the item by itemId

        const data = await selectItemByItemId(itemId)

        // return the response to the client
        return response.json({
            status: 200,
            message: null,
            data})
    } catch (error: unknown) {
        console.error(error)
        return response.json({
            status: 500,
            message: 'internal server error',
            data: null
        })
    }
}

export async function putItemByItemIdController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        //validate updated item coming from request body

        const validationResultForRequestBody = ItemSchema.safeParse(request.body)

        if(!validationResultForRequestBody.success) {
            return zodErrorResponse(response, validationResultForRequestBody.error)
        }

        const {
            itemId,
            itemSectionId,
            itemDescription,
            itemPhoto,
            itemPrice,
            itemOrder
        } = validationResultForRequestBody.data

        const profileIdFromSession = request.session?.profile?.profileId


        const section = await selectSectionBySectionId(itemSectionId)

        const business = await selectBusinessByBusinessId(section?.sectionBusinessId ?? '')

        if (business?.businessProfileId !== profileIdFromSession) {
            return response.json ({
                status: 401,
                message: 'you cannot post a section on a business you do not own.',
                data: null
            })
        }

        const item: Item | null = await selectItemByItemId(itemId ?? '')

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
        return response.json({status: 500, message: 'internal server error', data: null})
    }
}


export async function deleteItemByItemIdController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = ItemSchema.safeParse(request.body)
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const {itemId, itemSectionId} = validationResult.data

        const profileIdFromSession = request.session?.profile?.profileId


        const section = await selectSectionBySectionId(itemSectionId)

        const business = await selectBusinessByBusinessId(section?.sectionBusinessId ?? '')

        if (business?.businessProfileId !== profileIdFromSession) {
            return response.json ({
                status: 403,
                message: 'you cannot delete this item.',
                data: null
            })
        }

        const result = await deleteItemByItemId(itemId ?? '')

        return response.json({
            status: 200,
            message: result,
            data: null
        })

    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: null
        })
    }
}