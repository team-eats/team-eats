import {Request, Response} from 'express'
import {zodErrorResponse} from "../../utils/response.utils";
import Mailgun from "mailgun.js";
import {SignUpProfileSchema} from "./sign-up.validator";
import {setActivationToken, setHash} from "../../utils/auth.utils";
import {insertProfile, PrivateProfile} from "../profile/profile.model";
import {Status} from "../../utils/interfaces/Status";
import formData from "form-data"


export async function signupProfileController (request: Request, response: Response): Promise<Response | undefined> {
    try {
        const validationResult = SignUpProfileSchema.safeParse(request.body)
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }



const mailgun: Mailgun = new Mailgun(formData)
const mailgunClient = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY as string})

const {profileName, profileEmail, profilePassword} = request.body

const profileHash = await setHash(profilePassword)

const profileActivationToken = setActivationToken()

const basePath: string = `${request.protocol}: //${request.hostname}:8080${request.originalUrl}activation/${profileActivationToken}`

const message = `<h2>Welcome to Team Eats App</h2>
<p>Please confirm your account</p>
<p><a href="${basePath}">${basePath}</a></p>`


const mailgunMessage = {
    from: `Mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN as string}>`,
    to: profileEmail,
    subject: 'New account at Team Eats -- Account Activation',
    html: message
}

const profile: PrivateProfile = {
    profileId: '',
    profileName,
    profileEmail: profileEmail,
    profileHash,
    profileIsOwner:false,
    profileActivationToken,
    profileDatetime:null
}

await insertProfile(profile)

await mailgunClient.messages.create(process.env.MAILGUN_DOMAIN as string, mailgunMessage)

const status: Status = {
    status:200,
    message: 'Account successfully created.',
    data: null
}
return response.json(status)

} catch (error: any) {
    const status: Status = {
        status: 500,
        message: error.message,
        data: null
    }
    return response.json(status)
    }
}