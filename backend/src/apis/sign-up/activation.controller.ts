import {Request, Response} from "express";
import{Status} from '../../utils/interfaces/Status'
import {zodErrorResponse} from '../../utils/response.utils'
import {z} from "zod";
import {selectPrivateProfileByProfileActivationToken, updateProfile} from "../profile/profile.model";

export async function activationController(request: Request, response: Response, ):Promise<Response<Status>>{
    try {
        const validationResult = z.object({activation: z.string().length(32, {message: 'please provide valid profileActivationToken'})}).safeParse(request.params)
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }
        const {activation} = validationResult.data

        const profile = await selectPrivateProfileByProfileActivationToken(activation)

        if (profile === null) {
            return response.json({
                status: 400,
                data: null,
                Message: 'Account activation has failed. Have you already activated this account?'

            })
        }

        profile.profileActivationToken = null
        await updateProfile(profile)
        return response.json({
            status: 200,
            data: null,
            message: 'Account activation was successful'
        })

    } catch(error: any) {

          return response.json({status: 500, data: null, message: error.message})

    }

}