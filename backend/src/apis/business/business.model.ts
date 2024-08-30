import {number, z} from "zod";


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