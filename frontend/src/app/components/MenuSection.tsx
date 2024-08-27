'use client'

import {MenuItem} from "@/app/components/MenuItem";

export function MenuSection() {
    return(
        <>
            <div className='my-5'>
                <h3 className='text-2xl py-2'>Appetizers</h3>
                <div className='overflow-x-auto flex gap-3'>
                    <MenuItem/>
                    <MenuItem/>
                    <MenuItem/>
                    <MenuItem/>
                    <MenuItem/>
                    <MenuItem/>
                </div>
            </div>
        </>
    )
}