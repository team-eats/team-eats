import {z} from "zod";
import {unstable_noStore as noStore} from "next/cache";
import {Business, BusinessSchema} from "@/app/utils/models/business/business.validator";




export async function fetchAllBusinesses() : Promise<Business[]> {
    noStore()
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/business`, {
        method: "get",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response: Response) => {
        if (!response.ok) {
            throw new Error('Error fetching all businesses')
        } else {
            return response.json()
        }


    })

    return BusinessSchema.array().parse(data)
}


export async function fetchBusinessByBusinessId(businessId: string): Promise<Business> {
    noStore()
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/businessId/${businessId}`, {
        method: "get",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response: Response) => {
        if (!response.ok) {
            throw new Error('Error fetching business by businessId')
        } else {
            return response.json()
        }
    })

    return BusinessSchema.parse(data)
}


// export async function fetchBusinessByBusinessProfileId