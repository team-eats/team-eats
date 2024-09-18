import {fetchAllBusinesses} from "@/app/utils/models/business/business.model";
import {Business} from "@/app/utils/models/business/business.validator";


export async function RandomButton() {

    const allBusinesses = await fetchAllBusinesses();

    function shuffle (array: Business[]) {
        for (let i = array.length; i > 0; i--) {

            let j = Math.floor(Math.random() * (i + 1));

            [array[i], array[j]] = [array[j], array[i]];

        } return array[array.length - 1];
    }

    const business = shuffle(allBusinesses);

    return (
        <>
            <button type={"button"} className={"bg-black text-white p-3 px-7 font-bold text-2xl"}>Random

            </button>
        </>
    )
}
