'use client'

import {MenuItemCard} from "@/app/business-listing/MenuItemCard";
import {Business} from "@/app/utils/models/business/business.validator";

type MenuSectionProps = {
    business: Business
}

export function MenuSection(props: MenuSectionProps) {
    const {business} = props

    return(
        <>
            <h3 className='text-2xl'>Appetizers</h3>
            <div className='overflow-x-auto flex gap-3'>
                <MenuItemCard />
                <MenuItemCard />
                <MenuItemCard />
                <MenuItemCard />
                <MenuItemCard />
            </div>
        </>
    )
}