import {z} from "zod";


export const LocationSchema = z.object({
    locationId: z.string({
        required_error: 'please provide a valid location id or null',
        invalid_type_error: 'location id must be a uuid or null'})
        .uuid({message: 'please provide a valid uuid for location id'})
        .nullable(),

    locationBusinessId: z.string({
        required_error: 'please provide a valid location business id or null',
        invalid_type_error: 'location business id must be a uuid or null'})
        .uuid({message: 'please provide a valid uuid location business id'}),

    locationOfBusiness: z.string({
        required_error: 'Please provide a location',
        invalid_type_error: 'location id must be a string'})
        .max(255, {message: 'Location address must not be longer than 255 characters'})
        .min(1, {message: 'Location address must not be longer than 1 character'}),

    locationActive: z.boolean({
        required_error: 'location active must be set to true or false',
        invalid_type_error: 'location active must be a boolean'
    }),

    locationStartDatetime: z.coerce.date({
        required_error: 'please provide a valid location start datetime',
        invalid_type_error: 'location start datetime must be a valid datetime'}),

    locationEndDatetime: z.coerce.date({
        required_error: 'please provide a valid location start datetime',
        invalid_type_error: 'location start datetime must be a valid datetime'})
})

export type Location = z.infer<typeof LocationSchema>