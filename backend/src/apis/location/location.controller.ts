import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {insertLocation, LocationSchema, Location} from "./location.model";
import {zodErrorResponse} from "../../utils/response.utils";
import {Business} from "../business/business.model";

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


