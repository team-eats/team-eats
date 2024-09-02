import {Request, Response} from "express";
import {
    Business,
    BusinessSchema, deleteBusinessByBusinessId,
    insertBusiness, selectAllBusinesses, selectBusinessByBusinessBio, selectBusinessByBusinessId,
    selectBusinessByBusinessName, selectBusinessByProfileId,
    selectBusinessByProfileName
} from "./business.model";
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

export async function getAllBusinesses (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const data = await selectAllBusinesses()
        const status: Status = {status: 200, message: null, data}
        return response.json(status)

    } catch (error) {
        console.error(error)
        return response.json({
            status: 500,
            message: 'error getting all businesses. try again.',
            data: []
        })
    }
}

export async function getBusinessesByProfileNameController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = PrivateProfileSchema
            .pick({profileName: true})
            .safeParse(request.params.profileName)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const {profileName} = validationResult.data

        const data = await selectBusinessByProfileName(profileName)

        return response.json({
            status: 200,
            message: null,
            data
        })

    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function getBusinessByProfileIdController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = z.string()
            .uuid({message: 'please provide a valid business profile id.'})
            .safeParse(request.params.businessProfileId)
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }
        const businessProfileId = validationResult.data

        const data = await selectBusinessByProfileId(businessProfileId)

        return response.json({
            status: 200,
            message: null,
            data})

    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function getBusinessByBusinessIdController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = z.string()
            .uuid({message: 'please provide a valid business id.'})
            .safeParse(request.params.businessId)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const businessId = validationResult.data
        const data = await selectBusinessByBusinessId(businessId)

        return response.json({
            status: 200,
            message: null,
            data
        })

    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function getBusinessByBusinessNameController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = z.string()
            .uuid({message: 'please provide a valid business name.'})
            .safeParse(request.params.businessName)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const businessName = validationResult.data
        const data = await selectBusinessByBusinessName(businessName)

        return response.json({
            status: 200,
            message: null,
            data
        })

    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function getBusinessByBusinessBio (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = z.string().safeParse(request.params.businessBio)
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const businessBio = validationResult.data
        const data = await selectBusinessByBusinessBio(businessBio)

        return response.json({
            status: 200,
            message: null,
            data
        })

    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function deleteBusinessByBusinessIdController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = z.string()
            .uuid({message: 'please provide a valid business id.'})
            .safeParse(request.params.businessId)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const profile: PrivateProfile = request.session.profile as PrivateProfile
        const businessProfileId: string = profile.profileId as string
        const businessId = validationResult.data
        const business = await selectBusinessByBusinessId(businessId)

        if (business?.businessProfileId !== businessProfileId) {
            return response.json({
                status: 403,
                message: 'you are not allowed to delete this business',
                data: null
            })
        }

        const result = await deleteBusinessByBusinessId(businessId)

        return response.json({
            status: 200,
            message: result,
            data: null
        })

    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}
