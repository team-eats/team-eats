'use server'

import {Profile, ProfileSchema} from "@/app/utils/models/profile/profile.validator";


export async function fetchProfileByProfileId(profileId: string): Promise<Profile> {
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/profile/${profileId}`, {
        method: "get",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response: Response) => {
        if (!response.ok) {
            throw new Error('Error fetching profile by profileId')
        } else {
            return response.json()
        }
    })

    return ProfileSchema.parse(data)
}

export async function fetchProfileByProfileName(profileName: string): Promise<Profile | null> {
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/profile/profileName/${profileName}`, {
        method: "get",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response: Response) => {
        if (!response.ok) {
            throw new Error('Error fetching profile by profileName')
        } else {
            return response.json()
        }
    })

    return ProfileSchema.nullable().parse(data)
}

