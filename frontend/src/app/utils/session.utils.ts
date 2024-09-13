"use server"
import {Profile, ProfileSchema} from "@/app/utils/models/profile/profile.validator";

unstable_noStore()
import {unstable_noStore} from "next/cache";
import {cookies} from "next/headers";
import {jwtDecode} from "jwt-decode";





export type Session = {
    profile: Profile,
    authorization: string
    exp: number
}



const currentTimeInSeconds = new Date().getTime() / 1000

export async function getSession(): Promise<Session|undefined > {


    const cookieStore = cookies()
    const jwtToken = cookieStore.get("jwt-token")
    console.log(jwtToken)
    if ( jwtToken) {
        return  setJwtToken(jwtToken.value)

    } else {
        return undefined
    }

}

export async function clearSession() {
    const cookieStore = cookies()
    cookieStore.delete("jwt-token")
    cookieStore.delete("connect.sid")
}

async function setJwtToken(jwtToken: string):Promise<Session | undefined> {
    try {
        const  parsedJwtToken = jwtDecode(jwtToken) as any

        if(parsedJwtToken &&  currentTimeInSeconds < parsedJwtToken.exp) {
            return  {
                profile: ProfileSchema.parse(parsedJwtToken.auth),
                authorization: jwtToken,
                exp: parsedJwtToken.exp
            }
        } else {
            return undefined
        }


    } catch (error) {
        console.error(error)
        throw new Error('Invalid jwt token')
    }
}
