import {LocationForm} from "@/app/location/LocationForm";
import {getSession} from "@/app/utils/session.utils";


export default async function () {
    const session = await getSession()
    if (session === undefined) {
        return <>
            you're not logged in
        </>
    }

    return (
        <>
            <LocationForm session={session} />
        </>
    )
}