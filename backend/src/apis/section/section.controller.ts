import {Status} from "../../utils/interfaces/Status";
import {LocationSchema} from "../location/location.model";
import {zodErrorResponse} from "../../utils/response.utils";
import {Section} from "./section.model";


export async function postSectionController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = LocationSchema.safeParse(request.body)

        if (!validationResult.success) {
            return zodErrorResponse (response, validationResult.error)
        }

        const {sectionId, sectionBusinessId, sectionName, sectionDescription, sectionOrder} = validationResult.data

        const section: Section = {
            sectionId: ''
        }
    }
}