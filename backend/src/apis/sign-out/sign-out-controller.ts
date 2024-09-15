import {Status} from "../../utils/interfaces/Status";
import {Request, Response} from "express";


export function signOutController (request: Request, response: Response): Response<Status> {
    //deconstruct the session object from the request
    const { session } = request
    //destroys the session
    session?.destroy(() => {})
    //create a status object to send back to the client
    const status: Status = { status:200, message: 'sign out successfully', data: null}
        //return the status
    return response.json(status)
}