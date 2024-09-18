import {fetchAllBusinesses} from "@/app/utils/models/business/business.model";
import {Business} from "@/app/utils/models/business/business.validator";
import Image from "next/image";
import Link from "next/link";
import React from "react";


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
            <button type={"button"} className={"bg-sky-800 text-white p-3 px-7 font-bold text-2xl rounded-2xl"}>
                <Link href={`/business-listing/${business.businessName}`}>Random</Link>
            </button>
        </>
    )
}
