import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {insertLocation, LocationSchema} from "./location.model";
import {zodErrorResponse} from "../../utils/response.utils";

export async function postLocationController(request: Request, response: Response): Promise<Response<Status>> {
    try{
        const validationResult = LocationSchema.safeParse(request.body)

        if(!validationResult.success){
            return zodErrorResponse(response, validationResult.error)
        }

        const { locationBusinessId, }

        const result = await insertLocation()

        return response.status(200).json({
            status: 200,
            message: "location successfully inserted",
            data: null
        })


        }catch(error: any){
            return response.json({status: 500, data: null, message: error.message})


    }
}