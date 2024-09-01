import {Request, Response} from "express";
import {Business, BusinessSchema, insertBusiness} from "./business.model";
import {zodErrorResponse} from "../../utils/response.utils";
import {PrivateProfile, PrivateProfileSchema} from "../profile/profile.model";
import {string, z} from "zod";
import {Status} from "../../utils/interfaces/Status";


export async function createBusinessController(request: Request, response: Response): Promise<Response | undefined> {
    try {
        const validationResult = BusinessSchema.safeParse(request.body);
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const {
            businessName,
            businessPhoto,
            businessHours,
            businessBio,
            businessEmail,
            businessPhone
        } = validationResult.data

        const profile: PrivateProfile = request.session.profile as PrivateProfile

        const businessProfileId: string = profile.profileId as string

        const business: Business = {
            businessId: null,
            businessProfileId,
            businessName,
            businessPhoto,
            businessHours,
            businessBio,
            businessEmail,
            businessPhone
        }

        const result = await insertBusiness(business)

        const status: Status = {status: 200, message: result, data: null}
        return response.json(status)

    } catch (error) {
        console.log(error)
        return response.json({status: 500, message: 'error creating business. try again.', data: null})
    }
}

// export async function getAllBusinesses

export async function getBusinessesByProfileName (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = PrivateProfileSchema.pick({profileName: true}).safeParse(request.params.profileName)
    }
}







