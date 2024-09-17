import {fetchBusinessByName} from "@/app/utils/models/business/business.model";
import {getSession} from "@/app/utils/session.utils";
import {redirect} from "next/navigation";
import {MenuSectionForm} from "@/app/business-listing/[businessName]/admin/menuSectionForm";

import {fetchSectionsBySectionBusinessId} from "@/app/utils/models/section/section.model";

import {LocationForm} from "@/app/business-listing/[businessName]/admin/LocationForm";
import React from "react";
import {CreateItemForm} from "@/app/business-listing/[businessName]/admin/item.form";



type Props = {
    params: {businessName: string}
}

export default async function (props: Props) {
    const businessName = props.params.businessName
    const business = await fetchBusinessByName(businessName)
    const session = await getSession()

    const sections = await fetchSectionsBySectionBusinessId(business?.businessId ?? '')

    if(business === null){
        redirect('/')
    }
    if(session?.profile.profileId !== business.businessProfileId){
        redirect('..')
    }




    return (
        <>


            <MenuSectionForm session={session} businessId={business.businessId as string}/>
            <LocationForm session={session} businessId={business.businessId as string}/>
            <CreateItemForm session={session} sections={sections}/>
            </>

    )

}