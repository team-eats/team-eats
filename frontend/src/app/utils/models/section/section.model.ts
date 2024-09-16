import {unstable_noStore as noStore} from "next/cache";
import {Section, SectionSchema} from "@/app/utils/models/section/section.validator";


export async function fetchSectionBySectionId(sectionId: string): Promise<Section[]> {
    noStore()
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/section/${sectionId}`, {
        method: "get",
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response: Response) => {
        if (!response.ok) {
            throw new Error('error fetching section by sectionId')
        } else {
            return response.json()
        }
    })
    return SectionSchema.array().parse(data)

}


