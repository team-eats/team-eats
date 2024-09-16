
import {BusinessCard} from "@/app/components/BusinessCard";
import {fetchAllBusinesses} from "@/app/utils/models/business/business.model";
import {PageProps} from "@/app/utils/interfaces/NextComponents";


type SearchParams = {q: string | undefined}

export default async function results(props: PageProps<{}, SearchParams>){

    const businesses = await fetchAllBusinesses()

    const q = props.searchParams.q

    return (
        <>
            <section className={"container mx-auto "}>
                <div>
                    <h1 className={"text-4xl text-center pt-20 my-10"}>Search Results For: <span
                        className={"text-blue-600"}>Example Search</span></h1>

                </div>

                <div className="md:grid-cols-2 xl:grid-cols-4 grid grid-rows-1 gap-8 ">

                    {businesses.map(business =><BusinessCard key={business.businessId} business={business} />)}

                </div>

            </section>

        </>
    )
}



