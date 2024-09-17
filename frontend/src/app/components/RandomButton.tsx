import {fetchAllBusinesses} from "@/app/utils/models/business/business.model";


export async function RandomButton() {

    const allBusinesses: [] = await fetchAllBusinesses();

    function shuffle (allBusinesses: []) {

    }

    return (
        <>
            <button type={"button"} className={"bg-black text-white p-3 px-7 font-bold text-2xl"}>Random

            </button>
        </>
    )
}
