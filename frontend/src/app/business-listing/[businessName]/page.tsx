
import React from "react";
import {MenuSection} from "@/app/business-listing/MenuSection";
import {fetchBusinessByBusinessId} from "@/app/utils/models/business/business.model";
import {fetchBusinessByName} from "@/app/utils/models/business/business.model";
import {getSession} from "@/app/utils/session.utils";
import {redirect} from "next/navigation";
import {fetchAllLocationsByLocationBusinessId} from "@/app/utils/models/location/location.model";


type Props = {
    params: {businessName: string}
}

export default async function (props: Props) {

    const businessName = props.params.businessName

    const business = await fetchBusinessByName(businessName)

    const location = await fetchAllLocationsByLocationBusinessId(business?.businessId ?? '')

    if(business === null) {
        redirect('/')
    }

    // Do in backend
    // for (let i in location) {
    //     if (location[i].locationStartDatetime.getTime() < new Date().getTime() && location[i].locationEndDatetime.getTime() > new Date().getTime()) {
    //
    //     }
    // }

    return (
        <>
            <div className='flex'>
                <div className='w-[384px] -top-[0px] fixed h-[70px] text-gray-500 bg-gray-500 -z-10 border-r-2 border-black select-none'>Filler</div>

                <div className='fixed'>
                    <div className="max-w-sm h-screen border-r-2 border-black bg-red-700">

                        <img src="https://placehold.co/300x300" alt="Placeholder business image"
                             className='mx-auto pt-10 pb-5'/>

                        <p className='text-xl text-gray-950 mx-[42px] my-2'><span className='text-lg'>Address:</span></p>
                        {/*<p className='text-xl text-gray-950 mx-[42px] my-2'><span className='text-lg'>Hours:</span></p>*/}

                        <p className='text-xl text-gray-950 mx-[42px] my-2'><span className='text-lg'>{business.businessPhone}</span></p>

                        <div className='text-center mt-5'>

                            <h3 className='text-2xl font-bold'>About {business.businessName}</h3>

                            <p className="text-gray-100 mx-[42px] mt-5">{business.businessBio}</p>

                        </div>
                    </div>
                </div>
                <div className='block ml-[384px] px-[5%] max-w-[calc(100lvw-382px)]'>

                    <h2 className='block text-6xl my-10 underline underline-offset-8'>{business.businessName}</h2>

                    <MenuSection businessId={business.businessId}  session={props.session}/>

                </div>
            </div>
        </>
    )
}
