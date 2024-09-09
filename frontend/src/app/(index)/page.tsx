
import {Section} from "@/app/components/Section";
import {fetchProfileByProfileId} from "@/app/utils/models/profile.model";

export default function Home() {
    const profile = await fetchProfileByProfileId()

    return (
        <>

            <div className={"border-2 border-black text-center py-5"}>
                <h1 className={"text-3xl font-bold"}>Welcome to Team Eats</h1>
                <p className={"py-5"}>Ah, now we see the violence inherent in the system! Listen. Strange women lying in ponds distributing swords is no basis for a system of government. Supreme executive power derives from a mandate from the masses, not from some farcical aquatic ceremony.</p>
                <button type={"button"} className={"bg-black text-white p-3 px-7 font-bold text-2xl"}>Random</button>
            </div>

            <div>
                <Section />
                <Section />
                <Section />
            </div>

        </>
    )
}
