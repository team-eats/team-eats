'use client'

import {MenuItemCard} from "@/app/business-listing/MenuItemCard";
import {SectionSchema,} from "@/app/utils/models/section/section.validator";
import {z} from "zod";
import {Session} from "@/app/utils/session.utils";
import {FormikHelpers} from "formik";
import React from "react";
import {toFormikValidationSchema} from "zod-formik-adapter";

const menuSectionSchema = SectionSchema
    .omit({sectionId: true, sectionBusinessId: true})

type MenuSection = z.infer<typeof menuSectionSchema>

type Props = {session: Session} // do we need this to show we are logged in, so we can put a section in a menu?


export function MenuSection(props:Props) {
    const session = props.session;


    const initialValues = {
        sectionName: '',
        sectionDescription: '',
        sectionOrder: 0
    }


    const handleSubmit = (values: MenuSection, actions: FormikHelpers<MenuSection>) => {

        const newSectionValues = {
            sectionId: null,
            sectionBusinessId: session.profile.profileId, // is this needed, or do we need to alter this in sessions?  adding something in the session to show we own a business.
            sectionName: values.sectionName,
            sectionDescription: values.sectionDescription,
            sectionOrder: values.sectionOrder
        }
        const {setStatus, resetForm} = actions

        function postSection() {
            fetch('/apis/section/', {
                method: 'POST',
                headers: {
                    'Authorization': session.authorization,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newSectionValues)
            })
                .then(response => response.json())
                .then(data => {
                    let type = 'failure'
                    if (data.status === 200) {
                        type = 'success'
                        resetForm()
                    }
                    setStatus({type, message: data.message})
                })
                .catch(error => {
                    console.log(error)
                    setStatus({type: 'failure', message: 'input is an error, try again.'})
                })
        }
    }

    return (
        <>
            <formiK>
                initialValues=
                {initialValue} onsubmit ={handleSubmit} validationSchema={toFormikValidationSchema(menuSectionSchema)}>
                {MenuSectionFormContent}
            </formiK>

        </>
    )

}

export function MenuSectionFormContent









//    return(
//         <>
//             <h3 className='text-2xl'>Appetizers</h3>
//             <div className='overflow-x-auto flex gap-3'>
//                 <MenuItemCard />
//                 <MenuItemCard />
//                 <MenuItemCard />
//                 <MenuItemCard />
//                 <MenuItemCard />
//             </div>
//         </>
//     )
// }