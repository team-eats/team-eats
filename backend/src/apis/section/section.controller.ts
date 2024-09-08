import {Status} from "../../utils/interfaces/Status";
import {LocationSchema} from "../location/location.model";
import {zodErrorResponse} from "../../utils/response.utils";
import {
    deleteSectionBySectionId,
    insertSection,
    Section,
    SectionSchema,
    selectSectionBySectionId,
    updateSection
} from "./section.model";
import {selectBusinessByBusinessId} from "../business/business.model";
import {Request, Response} from "express";
import {z} from "zod";


export async function postSectionController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = LocationSchema.safeParse(request.body)

        if (!validationResult.success) {
            return zodErrorResponse (response, validationResult.error)
        }

        const {sectionId, sectionBusinessId, sectionName, sectionDescription, sectionOrder} = validationResult.data

        const section: Section = {
            sectionId: '',
            sectionBusinessId,
            sectionName,
            sectionDescription,
            sectionOrder
        }

        const profileIdFromSession = request.session?.profile?.profileId

        const business = await selectBusinessByBusinessId(sectionBusinessId)

        if (business?.businessProfileId !== profileIdFromSession) {
            return response.json ({
                status: 401,
                message: 'you cannot add sections to a business you do not own',
                data: null
            })
        }

        const result = await insertSection(section)

        return response.json({
            status: 200,
            message: 'section successfully inserted',
            data: null
        })

    }catch (error) {
        console.log(error)
        return response.json({
            status: 500,
            data: null,
            message: 'error posting section'
        })
    }
}

export async function getSectionBySectionIdController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = z.string()
            .uuid({message: 'please provide a valid section id.'})
            .safeParse(request.params.sectionId)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const sectionId = validationResult.data
        const data = await selectSectionBySectionId(sectionId)

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

export async function putSectionController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = SectionSchema.safeParse(request.body.sectionId)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const {
            sectionId,
            sectionBusinessId,
            sectionName,
            sectionDescription,
            sectionOrder} = validationResult.data

        const updatedSection: Section = {
            sectionId,
            sectionBusinessId,
            sectionName,
            sectionDescription,
            sectionOrder}

        const section: Section | null = await selectSectionBySectionId(sectionId ?? '')

        if (section === null) {
            return response.json ({
                status: 400,
                message: 'section not found',
                data: null
            })
        }

        section.sectionName = sectionName
        section.sectionDescription = sectionDescription
        section.sectionOrder = sectionOrder

        await updateSection(updatedSection)

        return response.json ({
            status: 200,
            message: 'section successfully updated',
            data: null
        })

    }catch (error: unknown) {
        return response.json({
            status: 500,
            message: 'error posting section',
            data: null
        })
    }
}

export async function deleteSectionBySectionIdController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = z.string()
            .uuid({message: 'please provide a valid section id.'})
            .safeParse(request.params.sectionId)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const sectionId = validationResult.data
        const section: Section | null = await selectSectionBySectionId(sectionId)

        const business = await selectBusinessByBusinessId(section?.sectionBusinessId ?? '')

        if (section?.sectionId !== sectionId) {
            return response.json ({
                status: 403,
                message: 'you are not allowed to delete this section',
                data: null
            })
        }

        const result = await deleteSectionBySectionId(sectionId)

        return response.json ({
            status: 200,
            message: 'section successfully deleted',
            data: null
        })

    }catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: null
        })
    }
}











// get section by section id or business id??