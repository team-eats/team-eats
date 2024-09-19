import {z} from "zod";


export const ProfileSchema = z.object({
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

    profileDatetime: z.coerce.date({
        required_error: 'please provide a valid profileDatetime or null',
        invalid_type_error: "profileDatetime is not a valid date"})
        .nullable(),
})

export type Profile = z.infer<typeof ProfileSchema>