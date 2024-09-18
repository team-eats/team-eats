'use server'
import {HomepageSection} from "@/app/(index)/HomepageSection";
import {RandomButton} from "@/app/components/RandomButton";
import {fetchAllBusinesses} from "@/app/utils/models/business/business.model";
import {Suspense} from "react";

export default async function Home() {

    const businesses = await fetchAllBusinesses()

    return (
        <>

            <div className={"sm:container sm:mx-auto mx-4 my-8 border-2 border-black text-center p-5"}>
                <h1 className={"text-3xl font-bold"}>Welcome to Team Eats</h1>
                <p className={"py-5"}>Ah, now we see the violence inherent in the system! Listen. Strange women lying in ponds distributing swords is no basis for a system of government. Supreme executive power derives from a mandate from the masses, not from some farcical aquatic ceremony.</p>

                {businesses?.length ? <RandomButton businesses={businesses} /> : ''}

            </div>

            <div>
                <HomepageSection />
                <HomepageSection />
                <HomepageSection />
            </div>

        </>
    )
}
