
import React from "react";
import {MenuItemCard} from "@/app/business-listing/MenuItemCard";
import {Props} from "next/script";

export function MenuSection(props: Props) {

    const Section = (props: string) => {

    }

    return(
        <>
            <h3 className='text-2xl'>{Section.text}</h3>

            <div className='overflow-x-auto flex gap-3'>
            <MenuItemCard />
            </div>
        </>
    )
}

