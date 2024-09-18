
import React from "react";
import {MenuSection} from "@/app/business-listing/MenuSection";
import {fetchBusinessByBusinessId, fetchSingleBusinessByName} from "@/app/utils/models/business/business.model";
import {fetchBusinessByName} from "@/app/utils/models/business/business.model";
import {getSession} from "@/app/utils/session.utils";
import {redirect} from "next/navigation";
import {fetchSectionsBySectionBusinessId} from "@/app/utils/models/section/section.model";
import {fetchAllLocationsByLocationBusinessId} from "@/app/utils/models/location/location.model";


type Props = {
    params: {businessName: string}
}

export default async function (props: Props) {

    const businessName = props.params.businessName

    const business = await fetchSingleBusinessByName(businessName)

    if(business === null) {
        redirect('/')
    }

    const sections = await fetchSectionsBySectionBusinessId(business?.businessId ?? '')

    const location = await fetchAllLocationsByLocationBusinessId(business?.businessId ?? '')


    // Do in backend
    function currentLocation() {
        for (let i in location) {
            if (!location[0].locationActive) {
                if (location[i].locationStartDatetime.getTime() <= new Date().getTime() && location[i].locationEndDatetime.getTime() >= new Date().getTime()) {
                    return location[i].locationOfBusiness;
                }
            } else {
                return location[0].locationOfBusiness;
            }
        }
        return 'This business has no current location';
    }

    let address = currentLocation()

    return (
        <>
            <div className='block sm:flex'>
                <div
                    className='hidden sm:flex min-w-[384px] sm:w-[384px] sm:-top-[0px] sm:fixed sm:h-[94px] text-red-700 bg-red-700 sm:-z-10 sm:border-r-2 sm:border-black select-none'>Filler
                </div>
                <div className='sm:fixed'>
                    <div className="min-w-[384px] max-w-[384px] sm:h-screen sm:border-r-2 sm:border-black bg-red-700">
                        <h2 className='block sm:hidden text-center text-4xl pt-5 underline underline-offset-8'>{business.businessName}</h2>
                        <img src={business.businessPhoto?.toString()} alt="Placeholder business image"
                             className='mx-auto pt-10 pb-5'/>
                        <p className='text-lg text-gray-950 mx-[42px] my-2'><span className='text-xl'>Address:</span>
                            </p>
                        <p className='text-lg text-gray-950 mx-[42px] my-2'><span
                            className='text-xl'>Phone Number:</span> {business.businessPhone}</p>
                        <p className='text-lg text-gray-950 mx-[42px] my-2 pb-5'><span className='text-xl'>Hours:</span> {business.businessHours}</p>
                    </div>
                </div>
                <div className='block sm:ml-[384px] px-[5%] sm:max-w-[calc(100lvw-386px)]'>
                    <h2 className='sm:block hidden text-6xl my-10 underline underline-offset-8'>{business.businessName}</h2>
                    <div className='text-center mt-5'>
                        <p className="text-gray-950 mx-[42px] py-5">
                            {business.businessBio}
                        </p>
                    </div>
                    <h3 className='text-2xl sm:text-4xl text-center sm:text-left mt-5 underline underline-offset-8'>Menu
                        Items</h3>
                    {sections.map(section => <MenuSection key={section.sectionBusinessId} section={section}/>)}
                </div>
            </div>
        </>
    )
}
