import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {
    insertLocation,
    LocationSchema,
    Location,
    selectAllLocationsByLocationBusinessId,
    selectLocationByLocationId, updateLocation, deleteLocationByLocationId
} from "./location.model";
import {zodErrorResponse} from "../../utils/response.utils";
import {Business, selectBusinessByBusinessId} from "../business/business.model";
import {z} from "zod";

export async function postLocationController(request: Request, response: Response): Promise<Response<Status>> {
    try{
        const validationResult = LocationSchema.safeParse(request.body)

        if(!validationResult.success){
            return zodErrorResponse(response, validationResult.error)
        }

        const {locationBusinessId, locationOfBusiness, locationActive, locationStartDatetime, locationEndDatetime} = validationResult.data
        //we may need to add something here
        const location: Location = {
            locationId: '',
            locationBusinessId,
            locationOfBusiness,
            locationActive,
            locationStartDatetime,
            locationEndDatetime
        }

        const profileIdFromSession = request.session?.profile?.profileId

        const business = await selectBusinessByBusinessId(locationBusinessId)

        if(business?.businessProfileId !== profileIdFromSession) {
            return response.json({
                status: 401,
                message: 'you cannot post a location on a business you do not own',
                data: null
            })
        }


        const result = await insertLocation(location)

        return response.status(200).json({
            status: 200,
            message: 'location successfully inserted',
            data: null
        })


        }catch(error: any){
            return response.json({status: 500, data: null, message: 'internal server error' })


    }
}

export async function getLocationByLocationBusinessIdController(request: Request, response: Response): Promise<Response<Status>> {
    try{
        const validationResult = z.string()
            .uuid({message: 'please provide a valid location business id.'})
            .safeParse(request.params.locationBusinessId)

        if(!validationResult.success){
            return zodErrorResponse(response, validationResult.error)
        }

        const locationBusinessId = validationResult.data
        const data = await selectAllLocationsByLocationBusinessId(locationBusinessId)

        return response.json({
            status: 200,
            message: null,
            data})

    }catch(error){
        return response.json({
            status: 500,
            data: null,
            message: 'internal server error' })
    }
}

export async function putLocationController(request: Request, response: Response): Promise<Response<Status>> {
    try {
         const validationResult = LocationSchema.safeParse(request.params.locationId)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const {
            locationId,
            locationBusinessId,
            locationOfBusiness,
            locationActive,
            locationStartDatetime,
            locationEndDatetime
        } = validationResult.data

        const newLocation: Location = {
            locationId: '',
            locationBusinessId,
            locationOfBusiness,
            locationActive,
            locationStartDatetime,
            locationEndDatetime
        }

        const location: Location | null = await selectLocationByLocationId(locationId ?? '')

        if (location === null) {
            return response.json({status: 400, data: null, message: 'location not found'})
        }


        location.locationOfBusiness = locationOfBusiness
        location.locationActive = locationActive
        location.locationStartDatetime = locationStartDatetime
        location.locationEndDatetime = locationEndDatetime

        await updateLocation(location)

        return response.json({status: 200, data: null, message: 'location successfully updated'})

    } catch (error: unknown) {
        return response.json({status: 500, data: null, message: 'internal server error, could not update location, try again later'})
    }

}


export async function deleteLocationByLocationIdController(request: Request, response: Response):Promise<Response<Status>> {
    try{
        const validationResult = z.string()
            .uuid({message: 'please provide a valid location id.'})
            .safeParse(request.params.locationId)

        if(!validationResult.success){
            return zodErrorResponse(response, validationResult.error)
        }

        const locationId = validationResult.data
        const location: Location | null = await selectLocationByLocationId(locationId)

        const profileIdFromSession = request.session?.profile?.profileId

        const business = await selectBusinessByBusinessId(location?.locationBusinessId ?? '')

        if(business?.businessProfileId !== profileIdFromSession) {
            return response.json({
                status: 401,
                message: 'you cannot delete a location on a business you do not own',
                data: null
            })
        }

        if (location?.locationId !== locationId) {
            return response.json({
                status: 403,
                message: 'you are not allowed to delete this location',
                data: null
            })
        }

        const result = await deleteLocationByLocationId(locationId)

        return response.json({
            status: 200,
            message: result,
            data: null
        })




    }catch(error){
        return response.json({
            status: 500,
            message: '',
            data: null
        })
    }
}
