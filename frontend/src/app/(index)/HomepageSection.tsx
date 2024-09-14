import {BusinessCard} from "@/app/components/BusinessCard";
import {fetchAllBusinesses} from "@/app/utils/models/business/business.model";

export async function HomepageSection() {
    const businesses = await fetchAllBusinesses()
    console.log(businesses)
    return (
        <section className="mx-full my-5 mb-16 ">
            <div>
                <h5 className="text-3xl font-bold text-gray-900 text-center my-9 overflow-x-auto">Pizza</h5>
            </div>

            <div className="bg-red-700 p-3 shadow-lg overflow-x-auto flex flex-row gap-3 mx-auto h-[24rem]">
                {businesses.map(business =><BusinessCard key={business.businessId} business={business} />)}
            </div>
        </section>
    )
}
