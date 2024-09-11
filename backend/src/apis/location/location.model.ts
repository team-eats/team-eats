import {z} from "zod";
import {sql} from "../../utils/database.utils";

export const LocationSchema = z.object({
    locationId: z.string({
        required_error: 'please provide a valid location id',
        invalid_type_error: 'locationId Must be a uuid'
    })
        .uuid({message: 'please provide a valid uuid for locationId'})
        .nullable(),

    locationBusinessId: z.string({
        required_error: 'please provide a valid location business id',
        invalid_type_error: 'location business id must be uuid'
    })
        .uuid({message: 'please provide a valid uuid location business id'}),

    locationOfBusiness: z.string({
        required_error: 'please provide valid location of business',
        invalid_type_error: 'location of business ',
    })
        .max(255, {message: 'please provide a shorter location of business'}),

    locationActive: z.boolean({
        required_error: 'location active is required',
        invalid_type_error: 'location active must be a boolean',
    }),

    locationStartDatetime: z.date({
        required_error: 'please provide a valid location start datetime',
    })
        .nullable(),

    locationEndDatetime: z.date({required_error: 'please provide a valid location end datetime',

    })
        .nullable()
})

export type Location = z.infer<typeof LocationSchema>


export async function insertLocation(location: Location): Promise<string> {

    const {locationBusinessId, locationOfBusiness,locationActive,locationStartDatetime, locationEndDatetime} = location

    await sql`INSERT INTO location(
                     location_id,
                     location_business_Id,
                     location_of_business, 
                     location_active, 
                     location_start_datetime, 
                     location_end_datetime )
    VALUES (
            gen_random_uuid(),
            ${locationBusinessId},
            ${locationOfBusiness}, 
            ${locationActive},
            ${locationStartDatetime ?? null},
            ${locationEndDatetime ?? null}
           )`

    return "location successfully inserted"
}


export async function updateLocation(location: Location): Promise<string> {
    const  {locationId, locationOfBusiness, locationActive,locationStartDatetime,locationEndDatetime} = location

    await sql`UPDATE location SET 
                    location_of_business = ${locationOfBusiness}, 
                    location_active = ${locationActive}, 
                    location_start_datetime = ${locationStartDatetime ?? null}, 
                    location_end_datetime = ${locationEndDatetime ?? null}
                    WHERE location_id = ${locationId}`


    return "location successfully updated"
}


export async function selectLocationByLocationId(locationId: string): Promise<Location | null> {
    const rowList = await sql`SELECT
                                     location_id,
                                     location_business_id,
                                     location_of_business,
                                     location_active,
                                     location_start_datetime,
                                     location_end_datetime
                              FROM location
                              WHERE location_id = ${locationId}`
    const result = LocationSchema.array().max(1).parse(rowList)
    return result?.length === 0 ? null : result[0]
}


export async function selectAllLocationsByLocationBusinessId(locationBusinessId: string): Promise<Location[] | null> {
    const rowList = await sql`SELECT 
                                     location_id,
                                     location_business_id,
                                     location_of_business,
                                     location_active,
                                     location_start_datetime,
                                     location_end_datetime
                                FROM location
                                WHERE location_business_id = ${locationBusinessId}`
const result = LocationSchema.array().parse(rowList)

    return result?.length === 0 ? null : result
}


export async function deleteLocationByLocationId(locationId: string): Promise<string> {
    await sql`
        DELETE 
        FROM location 
        WHERE location_id = ${locationId}`
    return "location successfully deleted"
}
