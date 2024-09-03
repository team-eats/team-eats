import {
    PrivateProfileSchema,
    PublicProfileSchema,
    selectPrivateProfileByProfileId,
    updateProfile,
    PrivateProfile
} from "./profile.model";
import {zodErrorResponse} from "../../utils/response.utils";

import {Status} from "../../utils/interfaces/Status";
import {Request, Response} from "express";

export async function getPrivateProfileByProfileIdController (request: Request, response: Response) : Promise<Response<Status>> {
    try {
        const validationResult = PrivateProfileSchema.pick({profileId: true}).safeParse(request.params)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }
        const {profileId} = validationResult.data

        const data = await selectPrivateProfileByProfileId(profileId)

        return response.json({
                status: 200,
                message: null,
                data})

    } catch (error: unknown) {
        console.error(error)

        return response.json({
                status: 500,
                message: "internal server error",
                data: null})

    }
}

export async function putProfileController(request: Request, response: Response): Promise<Response<Status>> {

    try {
        const validationResultForRequestBody = PublicProfileSchema.safeParse(request.body)

        if(!validationResultForRequestBody.success) {
            return zodErrorResponse(response, validationResultForRequestBody.error)
        }

        const validationResultForRequestParams = PublicProfileSchema.pick({profileId: true}).safeParse(request.params)

        if(!validationResultForRequestParams.success) {
            return zodErrorResponse(response, validationResultForRequestParams.error)
        }


        const profileFromSession = request.session?.profile
        const profileIdFromSession = profileFromSession?.profileId

        const {profileId} = validationResultForRequestParams.data

        if(profileIdFromSession !== profileId) {
            return response.json({status:400, message: 'You cannot update a profile that is not yours', data: null})

        }

        const { profileName, profileEmail} = validationResultForRequestBody.data

        const profile: PrivateProfile|null = await selectPrivateProfileByProfileId(profileId)

        if(profile === null) {
            return response.json({status: 400, message: 'profile does not exist', data: null})
        }

//update password and is business owner?
        profile.profileName = profileName
        profile.profileEmail = profileEmail

        await updateProfile(profile)

        return response.json({
            status: 200,
            message: 'profile successfully updated',
            data: null})

    } catch (error: unknown) {
        return response.json({
            status: 500,
            message: 'internal server error',
            data: null})
    }
}