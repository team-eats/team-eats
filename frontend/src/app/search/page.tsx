
import {BusinessCard} from "@/app/components/BusinessCard";
import {fetchAllBusinesses, fetchBusinessByName} from "@/app/utils/models/business/business.model";
import {PageProps} from "@/app/utils/interfaces/NextComponents";
import {Business} from "@/app/utils/models/business/business.validator";


type SearchParams = {q: string | undefined}

export default async function results(props: PageProps<{}, SearchParams>){

    const q = props.searchParams.q

    let results: Business[] = []

    if (q) {
        results = await fetchBusinessByName(q)
    } else {
        results = await fetchAllBusinesses();
    }

    if (results.length === 0 ) {
        results = await fetchAllBusinesses();
    }

    return (
        <>
            <body className={"bg-red-700"} ></body>
            <section className={"container mx-auto "}>
                {
                    !q ??
                    <>
                        <div>
                            <h2 className={"text-4xl text-center pt-20 my-10 text-sky-800"}>Sorry! Try these instead!</h2>
                        </div>
                    </>
                }

                <div>
                    <h2></h2>
                    <div className="md:grid-cols-2 xl:grid-cols-4 grid grid-rows-1 gap-8 ">
                        {results.map(business => <BusinessCard key={business.businessId} business={business}/>)}
                    </div>
                </div>
            </section>
        </>
    )
}
