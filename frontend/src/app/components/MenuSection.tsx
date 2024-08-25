'use client'

import {MenuItem} from "@/app/components/MenuItem";

export function MenuSection() {
    return(
        <>
            <h3 className='text-2xl'>Appetizers</h3>
            <div className='overflow-x-auto flex gap-3'>
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
        </>
    )
}