import {number, string, z} from "zod";
import {sql} from "../../utils/database.utils";
import {PrivateProfile} from "../profile/profile.model";


export const BusinessSchema = z.object({
    businessId: z.string({
        required_error: 'please provide a valid business id or null',
        invalid_type_error: 'businessId must be a uuid or null'})
        .uuid({message: 'please provide a valid uuid for business id'})
        .nullable(),

    businessProfileId: z.string({
        required_error: 'please provide a valid businessProfile id',
        invalid_type_error: 'businessProfileId must be uuid'})
        .uuid({message: 'please provide a valid uuid for businessProfile id'}),

    businessName: z.string({
        required_error: 'Please provide a business name',
        invalid_type_error: 'business name must be a string'})
        .max(100, {message: 'please provide a shorter business name'})
        .min(1, {message: 'please make a longer business name'}),

    businessPhoto: z.string({
        required_error: 'please provide a valid business photo address or null',
        invalid_type_error: 'business image url must be a string or null'})
        .trim()
        .url({message: 'business image address must be url'})
        .max(255, {message: 'please provide a business photo url shorter than 255'})
        .nullable(),

    businessHours: z.string({
        required_error: 'please provide business hours',
        invalid_type_error: 'business hours must be a string'})
        .max(255, {message: 'business hours reached character limit'}),

    businessBio: z.string({
        required_error: 'please provide a business bio',
        invalid_type_error: 'business bio must be a string'})
        .max(800, {message: 'business bio must be a lil shorter'}),

    businessEmail: z.string({
        required_error: 'business must have an email',
        invalid_type_error: 'business email must be a string'})
        .email('please provide a valid email address')
        .max(255, {message: 'please provide a shorter email address'}),

    businessPhone: z.string({
        required_error: 'please provide a phone number',
        invalid_type_error: 'business phone must be a string'})
        .max(10, {message: 'business phone too long'})
        .min(10, {message: 'business phone too short'})
})

export type Business = z.infer<typeof BusinessSchema>

export async function insertBusiness(business: Business): Promise<string> {
    const {businessId, businessProfileId, businessName, businessPhoto, businessHours, businessBio, businessEmail, businessPhone} = business

    await sql`INSERT INTO business (
                      business_id,
                      business_profile_id, 
                      business_name, 
                      business_photo, 
                      business_hours, business_bio, 
                      business_email, 
                      business_phone
    )
    VALUES (gen_random_uuid(),
            ${businessProfileId},
            ${businessName}, 
            ${businessPhoto}, 
            ${businessHours},
            ${businessBio}, 
            ${businessEmail},
            ${businessPhone})`

    return 'Business Inserted Successfully'
}

export async function selectAllBusinesses(): Promise<Business[]> {
    const rowList = await sql`SELECT 
            business_id,
            business_profile_id,
            business_name,
            business_photo,
            business_hours,
            business_bio,
            business_email,
            business_phone
        FROM business`
    return BusinessSchema.array().parse(rowList)
}

export async function selectBusinessByProfileName(businessProfileName: string): Promise<Business[]> {
    const rowList = await sql`SELECT 
        business_id,
        business_profile_id, 
        business_name, 
        business_photo, 
        business_hours, 
        business_bio, 
        business_email, 
        business_phone
    FROM business JOIN profile ON business.business_profile_id = profile.profile_id
    WHERE profile.profile_name = ${businessProfileName}`

    return BusinessSchema.array().parse(rowList)
}

export async function selectBusinessesByBusinessProfileId(businessProfileId: string): Promise<Business[]> {
    const rowList = await sql`SELECT
        business_id,
        business_profile_id, 
        business_name, 
        business_photo, 
        business_hours, 
        business_bio, 
        business_email, 
        business_phone
    FROM business
    WHERE business_profile_id = ${businessProfileId}`

    return BusinessSchema.array().parse(rowList)
}

export async function selectBusinessByBusinessId(businessId: string): Promise<Business | null> {
    const rowList = await sql`SELECT
        business_id,
        business_profile_id, 
        business_name, 
        business_photo, 
        business_hours, 
        business_bio, 
        business_email, 
        business_phone
    FROM business
    WHERE business_id = ${businessId}`

    const result = BusinessSchema.array().max(1).parse(rowList)

    return result?.length === 0 ? null : result[0]
}

export async function selectBusinessByBusinessName(businessName: string): Promise<Business[] | null> {
    const rowList = await sql`SELECT
        business_id,
        business_profile_id, 
        business_name, 
        business_photo, 
        business_hours, 
        business_bio, 
        business_email, 
        business_phone
    FROM business
    WHERE business_name = ${businessName}`

    const result = BusinessSchema.array().parse(rowList)

    return result?.length < 1 ? null : result
}

export async function selectBusinessByBusinessBio(businessBio: string): Promise<Business[]> {
    const rowList = await sql`SELECT
        business_id,
        business_profile_id,
        business_name,
        business_photo,
        business_hours,
        business_bio,
        business_email,
        business_phone
    FROM business
    WHERE business_bio IS NOT NULL`

    return BusinessSchema.array().parse(rowList)
}

export async function updateBusiness(business: Business): Promise<string> {

    const {businessName, businessPhoto, businessHours, businessBio, businessEmail, businessPhone} = business

        await sql`UPDATE business SET 
            business_name = ${businessName}, 
            business_photo = ${businessPhoto}, 
            business_hours = ${businessHours}, 
            business_bio = ${businessBio},
            business_email = ${businessEmail},
            business_phone = ${businessPhone}`

    return 'Business successfully updated'
}

export async function deleteBusinessByBusinessId(businessId: string): Promise<string> {
    await sql`
        DELETE 
        FROM business 
        WHERE business_id = ${businessId}
        ON DELETE CASCADE`
    return 'Business Deleted Successfully'
}
