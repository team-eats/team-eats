import {z} from "zod";


export const SectionSchema = z.object({
    sectionId: z.string({
        required_error: 'section Id or null is required',
        invalid_type_error: 'sectionId must be a uuid or null'})
        .uuid({message: 'please provide a valid uuid for sectionId'})
        .nullable(),

    sectionBusinessId: z.string({
        required_error: 'please provide a valid sectionBusinessId ',
        invalid_type_error: 'sectionBusinessId must be a uuid'})
        .uuid({message: 'please provide a valid uuid for sectionBusinessId'}),

    sectionName: z.string({
        required_error: 'Please provide a section name',
        invalid_type_error: 'section name must be a string'})
        .max(100, {message: 'section name must not be longer than 100 characters'})
        .min(1, {message: 'section name must be at least 1 character'}),

    sectionDescription: z.string({
        required_error: 'please provide a section description',
        invalid_type_error: 'section description must be a string'})
        .max(255, {message: 'section description must not be longer than 255 characters'})
        .min(1, {message: 'section description must be at least 1 character'}),

    sectionOrder: z.number({
        required_error: 'please provide a section order',
        invalid_type_error: 'section order must be a number'})
        .int()
        .min(1, {message: 'section order must be at least 1'})

})

export type Section = z.infer<typeof SectionSchema>