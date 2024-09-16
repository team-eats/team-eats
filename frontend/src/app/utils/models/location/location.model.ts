import {unstable_noStore as noStore} from "next/cache";
import {Location, LocationSchema} from "@/app/utils/models/location/location.validator";

export async function fetchAllLocationsByLocationBusinessId(locationBusinessId: string): Promise<Location[]> {
    noStore()
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/location/locationBusinessId/${locationBusinessId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response: Response) => {
        if (!response.ok) {
            throw new Error('Error fetching location by location business id')
        } else {
            return response.json()
        }
    })

    return LocationSchema.array().parse(data)
}