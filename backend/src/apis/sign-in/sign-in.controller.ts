import {signInProfileSchema} from "./sign-in.validator";
import {Request, Response} from "express";
import {zodErrorResponse} from "../../utils/response.utils";
import {PrivateProfile, selectPrivateProfileByProfileEmail} from "../profile/profile.model";
import {Status} from "../../utils/interfaces/Status";
import {generateJwt, validatePassword} from "../../utils/auth.utils";
import { v4 as uuid } from 'uuid'

export async function signInController(request: Request, response: Response): Promise<Response> {
    try{
        const validationResult = signInProfileSchema.safeParse(request.body)
        if (!validationResult.success){
            return zodErrorResponse(response, validationResult.error)
        }
        const {profileEmail, profilePassword} = validationResult.data
        const profile: PrivateProfile | null = await selectPrivateProfileByProfileEmail(profileEmail)
        const signInFailedStatus: Status = {status: 400, message: 'Email or password is incorrect please try again.', data: null}
        if (profile === null) {
            return response.json(signInFailedStatus)
        }
        const isPasswordValid = await validatePassword(profile.profileHash, profilePassword)
        if (!isPasswordValid) {
            return response.json(signInFailedStatus)
        }
        const {profileId, profileName} = profile
        const signature: string = uuid()
        const authorization: string = generateJwt({
            profileId,
            profileName
        }, signature)
        request.session.profile = profile
        request.session.jwt = authorization
        request.session.signature = signature
        response.header({
            authorization
        })
        return response.json({status: 200, message: 'Sign in successful', data: null})
    } catch (error: any) {
        return response.json({status: 500, data: null, message: error.message})
    }
}