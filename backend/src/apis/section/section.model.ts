
import {z} from "zod";
import {sql} from "../../utils/database.utils";



export const SectionSchema = z.object({

    sectionId: z.string({
        required_error: 'please provide a valid section uuid',
        invalid_type_error: 'sectionId must be uuid'
    }).uuid({message: 'please provide a valid section uuid'})
        .nullable(),

    sectionBusinessId: z.string({
        required_error: 'please provide a valid uuid for section business',
        invalid_type_error: 'section business Id must be uuid'
    }).uuid({message: 'please provide a valid section business uuid'}),

    sectionName: z.string({
        required_error: 'please provide a section name',
        invalid_type_error: 'section name must be a string'
    }).max(100, {message: 'please provide a shorter section name'})
        .min(1, {message: 'please make a longer business name'}),

    sectionDescription: z.string({
        required_error: 'please provide a section description',
        invalid_type_error: 'section description must be a string'
    }).max(255, {message: 'please provide a shorter description'})
        .min(1, {message: 'please make a longer business description'}),

    sectionOrder: z.number({
        required_error: 'please provide a section order number',
        invalid_type_error: 'section order must be a whole number'
    })
})

export type Section = z.infer<typeof SectionSchema>

export async function insertSection(section: Section): Promise<string> {

    const {sectionId,
        sectionBusinessId,
        sectionName,
        sectionDescription,
        sectionOrder} = section

    await sql`INSERT INTO section (
        section_id,
        section_business_id,
        section_name,
        section_description,
        section_order)
        
    VALUES (
        gen_random_uuid(),
        ${sectionBusinessId},
        ${sectionName},
        ${sectionDescription},
        ${sectionOrder})`

    return 'HomepageSection Inserted Successfully'
}

export async function selectSectionBySectionId(sectionId: string): Promise<Section | null> {
    const rowList = await sql`SELECT
                                    section_id,
                                    section_business_id,
                                    section_name,
                                    section_description,
                                    section_order
                                FROM section
                                WHERE section_id = ${sectionId}`
    const result = SectionSchema.array().parse(rowList)
    return result?.length < 1 ? null : result[0]
}

export async function updateSection(section: Section): Promise<string> {
    const {
        sectionId,
        sectionName,
        sectionDescription,
        sectionOrder} = section

    await sql`UPDATE section SET
            section_name = ${sectionName},
            section_description = ${sectionDescription},
            section_order = ${sectionOrder}
        WHERE section_id = ${sectionId}`
    return 'HomepageSection Updated Successfully'
}


export async function selectSectionsBySectionBusinessId(sectionBusinessId: string): Promise<Section[]> {
    const rowList = await sql`SELECT
                                    section_id,
                                    section_business_id,
                                    section_name,
                                    section_description,
                                    section_order
                                FROM section
                                WHERE section_business_id = ${sectionBusinessId}`
    return SectionSchema.array().parse(rowList)
}


export async function deleteSectionBySectionId(sectionId: string): Promise<string> {
    await sql`
        DELETE 
        FROM section 
        WHERE section_id = ${sectionId}`
    return 'Deleted HomepageSection Successfully'
}
