import {z} from 'zod'
import {sql} from "../../utils/database.utils";



export const PrivateProfileSchema = z.object({
    profileId: z.string({
        required_error: 'profileId is required',
        invalid_type_error: 'Please provide a valid profileId'
    })

        .uuid({ message: 'please provide a valid profileId' })
        .nullable(),

    profileName: z.string()
        .trim()
        .min(1, { message: 'please provide a valid profile name (min 1 characters)' })
        .max(100, { message: 'please provide a valid profile name (max 32 characters)' }),

    profileEmail: z.string({
        required_error: 'profileEmail is required',
        invalid_type_error: ' please provide a valid profileEmail'
    })
        .email({ message: 'please provide a valid email' })
        .max(255, { message: 'profileEmail is to long' }),

    profileHash: z.string({
        required_error: 'profileHash is required',
        invalid_type_error: 'please provide a valid profileHash'
    })
        .length(97, { message: 'profile hash must be 97 characters' }),

    profileIsOwner: z.boolean({
        required_error: 'profileIsOwner is required',
        invalid_type_error: 'profileIsOwner must be a boolean',
    })
        .nullable(),

    profileDatetime: z.coerce.date({
        required_error: 'please provide a valid profileDatetime or null',
        invalid_type_error: "profileDatetime is not a valid date"})
        .nullable(),

    profileActivationToken: z.string({
        required_error: 'profileActivationToken is required',
        invalid_type_error: 'please provide a valid profileActivationToken'
    })
        .length(32, { message: 'profile activation token is to long' })
        .nullable(),

})

export type PrivateProfile = z.infer<typeof PrivateProfileSchema>

export const PublicProfileSchema = PrivateProfileSchema.omit({profileHash: true, profileActivationToken: true, profileIsOwner: true})
export type PublicProfile =z.infer<typeof PublicProfileSchema>

export async function selectPublicProfileByProfileId(profileId: string): Promise<PublicProfile | null> {

    const rowList = await sql`SELECT profile_id, profile_name, profile_email, profile_datetime FROM profile WHERE profile_id = ${profileId}`
    const result = PublicProfileSchema.array().max(1).parse(rowList)

    return result?.length === 1 ? result[0] : null
}

export async function selectPrivateProfileByProfileId(profileId: string): Promise<PrivateProfile | null> {
    const rowList = await sql`SELECT profile_id, profile_name, profile_email, profile_hash, profile_is_owner, profile_activation_token, profile_datetime FROM profile WHERE profile_id = ${profileId}`
    const result = PrivateProfileSchema.array().max(1).parse(rowList)
    return result?.length === 1 ? result[0] : null
}

export async function updateProfile (profile: PrivateProfile): Promise<string> {
    const {profileId, profileName, profileEmail, profileHash, profileIsOwner, profileActivationToken, profileDatetime} = profile
    await sql`UPDATE profile SET profile_name = ${profileName}, profile_email = ${profileEmail}, profile_hash = ${profileHash}, profile_is_owner = ${profileIsOwner},
                   profile_activation_token = ${profileActivationToken},profile_datetime = ${profileDatetime}  WHERE profile_id = ${profileId}`
    return 'Profile successfully updated'
}

export async function selectPrivateProfileByProfileEmail (profileEmail: string): Promise<PrivateProfile | null> {
    const rowList = await sql`SELECT profile_id, profile_name, profile_email, profile_hash, profile_is_owner, profile_activation_token, profile_datetime FROM profile WHERE profile_email = ${profileEmail}`
    const result = PrivateProfileSchema.array().max(1).parse(rowList)
    return result?.length === 1 ? result[0] : null
}

export async function insertProfile(profile: PrivateProfile) : Promise<string> {
    const {profileName, profileEmail, profileHash, profileIsOwner, profileActivationToken, profileDatetime} = profile
    await sql`INSERT INTO profile(profile_id, profile_name, profile_email, profile_hash, profile_is_owner, profile_activation_token, profile_datetime) VALUES (gen_random_uuid(), ${profileName}, ${profileEmail}, ${profileHash}, ${profileIsOwner}, ${profileActivationToken}, ${profileDatetime})`
    return 'Profile successfully created'
}

export async function selectPrivateProfileByProfileActivationToken (profileActivationToken: string) : Promise<PrivateProfile|null> {


    const rowList = await sql`SELECT profile_id, profile_name, profile_email, profile_hash, profile_is_owner, profile_activation_token, profile_datetime FROM  profile WHERE profile_activation_token = ${profileActivationToken}`
    const result = PrivateProfileSchema.array().max(1).parse(rowList)
    return result?.length ===1 ? result[0] : null
}