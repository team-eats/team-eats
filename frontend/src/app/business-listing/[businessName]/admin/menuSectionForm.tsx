'use client'
import {SectionSchema} from "@/app/utils/models/section/section.validator";
import {z} from "zod";
import {Session} from "@/app/utils/session.utils";
import {Formik, FormikHelpers, FormikProps} from "formik";
import {toFormikValidationSchema} from "zod-formik-adapter";
import {Button, Label, TextInput} from "flowbite-react";
import {DisplayError} from "@/app/components/DisplayError";
import {DisplayStatus} from "@/app/components/DisplayStatus";
import {FormDebugger} from "@/app/components/FormDebugger";
import React from "react";

const menuSectionSchema = SectionSchema
    .omit({sectionId: true, sectionBusinessId: true})

type MenuSection = z.infer<typeof menuSectionSchema>

type Props = {session: Session|undefined, businessId: string} // do we need this to show we are logged in, so we can put a section in a menu?


export  function MenuSectionForm(props:Props) {
    const session = props.session;
    const businessId = props.businessId;


    const initialValues = {
        sectionName: '',
        sectionDescription: '',
        sectionOrder: 0
    }


    const handleSubmit = (values: MenuSection, actions: FormikHelpers<MenuSection>) => {

        const newSectionValues = {
            sectionId: null,
            sectionBusinessId: businessId, // is this needed, or do we need to alter this in sessions?  adding something in the session to show we own a business.
            sectionName: values.sectionName,
            sectionDescription: values.sectionDescription,
            sectionOrder: values.sectionOrder
        }
        const {setStatus, resetForm} = actions
        fetch('/apis/section/', {
            method: 'POST',
            headers: {
                'Authorization': session?.authorization ?? 'jdjdjd',
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

    return (
        <>
            <Formik
                initialValues={initialValues} onSubmit ={handleSubmit} validationSchema={toFormikValidationSchema(menuSectionSchema)}>
                {MenuSectionFormContent}
            </Formik>

        </>
    )

}

export function MenuSectionFormContent(props: FormikProps<MenuSection>) {

    const {
        status,
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
    } = props;


    return (

        <>
            <div className="container mx-auto max-w-lg p-4">
            <form onSubmit={handleSubmit} className="">
                <div>
                    <div>
                        <Label htmlFor="sectionName" value="Section Name"/>
                    </div>
                    <TextInput
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="sectionName"
                        name={'sectionName'}
                        type='text'
                        value={values.sectionName}
                    />
                    <DisplayError errors={errors} touched={touched} field={'sectionName'}/>
                </div>

                <div>

                    <div>
                        <Label htmlFor="sectionDescription" value="Section Description"/>
                    </div>
                    <TextInput
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="sectioDescription"
                        name={"sectionDescription"}
                        type='text'
                        value={values.sectionDescription}
                    />
                    <DisplayError errors={errors} touched={touched} field={'sectionDescription'}/>
                </div>

                <div>
                    <div>
                        <Label htmlFor="sectionOrder" value="Section Order"/>
                    </div>
                    <TextInput
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="sectionOrder"
                        name={"sectionOrder"}
                        type='number'
                        value={values.sectionOrder}
                    />

                    <DisplayError errors={errors} touched={touched} field={'sectionOrder'}/>
                </div>
                <Button color={'success'} type="submit" >Submit</Button>
                <DisplayStatus status={status}/>
            </form>
            <FormDebugger {...props} />
            </div>


        </>
    )


}
