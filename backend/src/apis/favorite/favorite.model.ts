import {z} from "zod";
import {sql} from "../../utils/database.utils";


export const FavoriteSchema = z.object({
    favoriteProfileId: z.string({
        required_error: 'please provide a valid favoriteProfileId'})
        .uuid({message: 'please provide a valid uuid for favoriteProfileId'}),
    favoriteBusinessId: z.string({
        required_error: 'please provide a valid favoriteBusinessId'})
        .uuid({message: 'please provide a valid uuid for favoriteBusinessId'}),
    favoriteDatetime: z.string({
        required_error: 'please provide a valid favoriteDatetime or null'})
        .nullable()
})

export type Favorite = z.infer<typeof FavoriteSchema>

export async function insertFavorite(favorite: Favorite): Promise<string> {
    const {favoriteProfileId, favoriteBusinessId} = favorite

    await sql`INSERT INTO favorite (
        favorite_profile_id,
        favorite_business_id,
        favorite_datetime
    )
    VALUES (${favoriteProfileId}, ${favoriteBusinessId}, NOW())`

    return 'Favorite successfully posted'
}

export async function selectFavoriteByFavoriteId(favorite: Favorite): Promise<Favorite | null> {
    const {favoriteProfileId, favoriteBusinessId} = favorite

    const rowList = <Favorite[]>await sql`SELECT favorite_profile_id, favorite_business_id, favorite_datetime
        FROM favorite
        WHERE favorite_profile_id = ${favoriteProfileId}
        AND favorite_business_id = ${favoriteBusinessId}`

    const result = FavoriteSchema.array().max(1).parse(rowList)

    return result.length === 0 ? null : result[0]
}

export async function deleteFavorite(favorite: Favorite): Promise<string> {
    const {favoriteProfileId, favoriteBusinessId} = favorite

    await sql`DELETE 
        FROM favorite
        WHERE favorite_profile_id = ${favoriteProfileId}
        AND favorite_business_id = ${favoriteBusinessId}`

    return 'Favorite successfully deleted'
}

export async function selectFavoritesByFavoriteBusinessId(favoriteBusinessId: string): Promise<Favorite[]> {
    const rowList = <Favorite[]>await sql`SELECT favorite_profile_id, favorite_business_id, favorite_datetime
        FROM favorite
        WHERE  favorite_business_id  = ${favoriteBusinessId}`

    return FavoriteSchema.array().parse(rowList)
}

export async function selectFavoritesByFavoriteProfileId(favoriteProfileId: string): Promise<Favorite[]> {
    const rowList = <Favorite[]>await sql`SELECT favorite_profile_id, favorite_business_id, favorite_datetime
        FROM favorite
        WHERE favorite_profile_id = ${favoriteProfileId}`

    return FavoriteSchema.array().parse(rowList)
}