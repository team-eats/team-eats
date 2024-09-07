import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {
    insertLocation,
    LocationSchema,
    Location,
    selectAllLocationsByLocationBusinessId,
    selectLocationByLocationId, updateLocation
} from "./location.model";
import {zodErrorResponse} from "../../utils/response.utils";
import {Business} from "../business/business.model";
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
         const validationResult = LocationSchema.safeParse(request.body)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const {
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

        const location: Location | null = await selectLocationByLocationId(locationId)

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
