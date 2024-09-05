import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {LocationSchema} from "./location.model";
import {zodErrorResponse} from "../../utils/response.utils";

export async function putLocationController(request: Request, response: Response): Promise<Response<Status>> {
    try{
        const validationResultForRequestBody = LocationSchema.safeParse(request.body)

        if(!validationResultForRequestBody.success){
            return zodErrorResponse(response, validationResultForRequestBody.error)
        }

        const validationResultForRequestParams = LocationSchema.pick({locationId: true}).safeParse(request.params)

        if (!validationResultForRequestBody.success) {
            return zodErrorResponse(response, validationResultForRequestParams.error)
        }

        const

    }
}