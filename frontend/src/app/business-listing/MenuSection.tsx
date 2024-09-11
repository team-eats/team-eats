'use client'

import {MenuItemCard} from "@/app/business-listing/MenuItemCard";

export function MenuSection() {
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