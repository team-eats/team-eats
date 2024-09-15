import {BusinessCard} from "@/app/components/BusinessCard";
import {fetchAllBusinesses} from "@/app/utils/models/business/business.model";

export default async function results(){
    const businesses = await fetchAllBusinesses()
    console.log(businesses)
    return (
        <>
            <section className={"container mx-auto "}>
                <div>
                    <h1 className={"text-4xl text-center pt-20 my-10"}>Search Results For: <span
                        className={"text-blue-600"}>Example Search</span></h1>

                </div>

                <div className="md:grid-cols-2 xl:grid-cols-4 grid grid-rows-1 gap-8 ">



                    {businesses.map(business =><BusinessCard key={business.businessId} section={section.sectionName} />)}



                    </div>






                {/*<div className={"container mx-auto border border-black py-20 mt-5 "}>*/}
                {/*    hello*/}
                {/*</div>*/}

            </section>


        </>
    )
}



