'use server'
import {HomepageSection} from "@/app/(index)/HomepageSection";
import {RandomButton} from "@/app/components/RandomButton";
import {fetchAllBusinesses} from "@/app/utils/models/business/business.model";
import {Suspense} from "react";

export default async function Home() {

    const businesses = await fetchAllBusinesses()

    return (
        <>

            <div className={"container sm:w-[600px] mx-4 sm:mx-auto my-8 border-2 border-black text-center p-5"}>
                <h1 className={"text-3xl font-bold"}>Welcome to Team Eats</h1>
                <p className={"py-5"}>We focus on highlighting local New Mexico restaurants, food-trucks, and pop-ups. If you want to find the best food owned by locals, you're in the right spot! Feeling lucky? Try finding a random place with great food with the button below.</p>
                {businesses?.length ? <RandomButton businesses={businesses} /> : ''}
            </div>

            <div>
                <HomepageSection />
            </div>

        </>
    )
}
