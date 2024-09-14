import {getSession} from "@/app/utils/session.utils";
import {ListingForm} from "@/app/listing-form/listing-form";



export default async function (){
    const session = await getSession()
    if (session === undefined) {
        return <>
            you're not logged in
        </>
    }

    return (
        <>
            <ListingForm session={session} />
        </>
    )
}