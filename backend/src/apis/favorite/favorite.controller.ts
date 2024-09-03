import {Request, Response} from "express";
import {zodErrorResponse} from "../../utils/response.utils";
import {
    deleteFavorite,
    Favorite,
    FavoriteSchema, insertFavorite, selectFavoriteByFavoriteId,
    selectFavoritesByFavoriteBusinessId,
    selectFavoritesByFavoriteProfileId
} from "./favorite.model";
import {z} from "zod";
import {Status} from "../../utils/interfaces/Status";
import {PublicProfile} from "../profile/profile.model";


export async function getFavoritesByFavoriteBusinessIdController(request: Request, response: Response): Promise<Response> {
    try {
        const validationResult = z.string().uuid("Please provide a valid favoriteBusinessId").safeParse(request.params.favoriteBusinessId)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const favoriteBusinessId = validationResult.data

        const data = await selectFavoritesByFavoriteBusinessId(favoriteBusinessId)

        return response.json({status: 200, message: null, data})
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function getFavoritesByFavoriteProfileIdController(request: Request, response: Response): Promise<Response> {
    try {
        const validationResult = z.string().uuid("Please provide a valid favoriteProfileId").safeParse(request.params.favoriteProfileId)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const favoriteProfileId = validationResult.data

        const data = await selectFavoritesByFavoriteProfileId(favoriteProfileId)

        return response.json({status: 200, message: null, data})
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function toggleFavoriteController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = FavoriteSchema.safeParse(request.body)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const {favoriteBusinessId} = validationResult.data

        const profile = request.session.profile

        // @ts-ignore
        const favoriteProfileId = (profile.profileId ?? '')

        const favorite: Favorite = {
            favoriteProfileId,
            favoriteBusinessId,
            favoriteDatetime: null
        }

        const status: Status = {
            status: 200,
            message: '',
            data: null
        }

        const selectedFavorite: Favorite | null = await selectFavoriteByFavoriteId(favorite)

        if (selectedFavorite === null) {
            status.message = await insertFavorite(favorite)
        } else {
            status.message = await deleteFavorite(favorite)
        }

        return response.json(status)
    } catch (error: any) {
        return response.json({
            status: 500,
            message: error.message,
            data: null
        })
    }
}

export async function postFavoriteController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = FavoriteSchema.safeParse(request.body)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const {favoriteBusinessId} = validationResult.data

        const profile = request.session.profile as PublicProfile

        const favoriteProfileId = profile.profileId as string

        const favorite: Favorite = {
            favoriteProfileId,
            favoriteBusinessId,
            favoriteDatetime: null
        }

        const status: Status = {
            status: 200,
            message: '',
            data: null
        }

        status.message = await insertFavorite(favorite)

        return response.json(status)
    } catch (error: any) {
        return response.json({
            status: 500,
            message: error.message,
            data: null
        })
    }
}

export async function deleteFavoriteController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = FavoriteSchema.safeParse(request.body)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const {favoriteBusinessId} = validationResult.data

        const profile = request.session.profile as PublicProfile

        const favoriteProfileId = profile.profileId as string

        const favorite: Favorite = {
            favoriteProfileId,
            favoriteBusinessId,
            favoriteDatetime: null
        }

        const status: Status = {
            status: 200,
            message: '',
            data: null
        }

        status.message = await deleteFavorite(favorite)

        return response.json(status)
    } catch (error: any) {
        return response.json({
            status: 500,
            message: error.message,
            data: null
        })
    }
}