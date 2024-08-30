import {Status} from "../../utils/interfaces/Status";
import {Request, Response} from "express";


export function signOutController (request: Request, response: Response): Response<Status> {
    const { session } = request
    session?.destroy(() => {})
    const status: Status = { status:200, message: 'sign out successfully', data: null }
    return response.json(status)
}