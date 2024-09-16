'use client'

import {MenuItemCard} from "@/app/business-listing/MenuItemCard";
import {SectionSchema} from "@/app/utils/models/section/section.validator";
import {z} from "zod";
import {Session} from "node:inspector";
import {FormikHelpers} from "formik";

const menuSectionSchema = SectionSchema
    .omit({sectionId: true, sectionBusinessId: true})

type MenuSection = z.infer<typeof menuSectionSchema>

type Props = {session: Session} // do we need this to show we are logged in, so we can put a section in a menu?


export function MenuSection(props:Props) {
    const session = props.session;


    const initialValues  = {
        sectionName: '',
        sectionDescription: '',
        sectionOrder: 0
    }


    const handleSubmit = (values: MenuSection, actions: FormikHelpers<MenuSection>) => {

    }



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