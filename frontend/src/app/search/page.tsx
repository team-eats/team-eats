
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

        return (
            <>
                <section className={"container mx-auto "}>
                    {
                        !q ?? <>
                            <div>
                                <h1 className={"text-4xl text-center pt-20 my-10 text-sky-800"}>
                                    <span>Sorry! Try these instead!</span></h1>
                            </div>
                        </>
                    }

                    <div className="md:grid-cols-2 xl:grid-cols-4 grid grid-rows-1 gap-8 ">
                        {results.map(business => <BusinessCard key={business.businessId} business={business}/>)}
                    </div>
                </section>
            </>
        )

}
