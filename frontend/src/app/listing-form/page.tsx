"use client";


import {BusinessSchema} from "@/app/utils/models/business/business.validator";
import {z} from "zod";
import {Formik, FormikHelpers, FormikProps} from "formik";
import {toFormikValidationSchema} from "zod-formik-adapter";
import {Button, Label, TextInput} from "flowbite-react";
import {DisplayError} from "@/app/components/DisplayError";
import {DisplayStatus} from "@/app/components/DisplayStatus";
import {FormDebugger} from "@/app/components/FormDebugger";

const BusinessListingSchema = BusinessSchema
    .omit({businessId: true, businessProfileId: true})

type BusinessListing = z.infer<typeof BusinessListingSchema>

export default function(){
    const initialValues = {
        businessName:'',
        businessPhoto:'',
        businessHours:'',
        businessBio:'',
        businessEmail:'',
        businessPhone:''
    }

    const handleSubmit = (values: BusinessListing, actions: FormikHelpers<BusinessListing>) => {
        const {setStatus, resetForm} = actions
        fetch('/apis/business', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
            .then(response => response.json())
            .then(data => {
                let type = 'failure'
                if (data.status === 200) {
                    type = 'success'
                    resetForm()
                }
                setStatus({type, message:data.message})
            })
            .catch(error => {
                console.log(error)
                setStatus({type: 'failure', message:'input is an error, try again.'})

            })

    }

    return (
        <>
           <Formik initialValues={initialValues} onSubmit ={handleSubmit} validationSchema={toFormikValidationSchema(BusinessListingSchema)}>
               {BusinessFormContent}
           </Formik>
        </>
    )
}

export function BusinessFormContent(props: FormikProps<BusinessListing>) {
    const {
        status,
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props;

    return (
        <>
        <form onSubmit = {handleSubmit} className="">
            <div>
                <div>
                    <Label htmlFor="businessName" value="Business Name"/>
                </div>
                <TextInput
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete='organization'
                    id="businessName"
                    name={'businessName'}
                    type='text'
                    value={values.businessName}
                    />
                <DisplayError errors={errors} touched={touched} field={'businessName'}/>
            </div>
            <div>
                <div className="">
                    <Label htmlFor="businessPhoto" value="business photo"/>
                </div>
                <ImageUploadDropZone
                    formikProps ={{
                            setFieldError
                    }}
            </div>

            <DisplayError errors={errors} touched={touched} field={'businessName'}/>
                <div>
                    <div>
                    <Label htmlFor="businessHours" value="business hours" />
                    </div>
                    <TextInput
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete='organization'
                        id="businessHours"
                        name={"businessHours"}
                        type='text'
                        value={values.businessHours}
                        />
                </div>
            <DisplayError errors={errors} touched={touched} field={'businessHours'} />
                <div>
                    <div>
                        <Label htmlFor="businessBio" value="Business Bio" />
                    </div>
                    <TextInput
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete='organization'
                        id="businessBio"
                        name={"businessBio"}
                        type='text'
                        value={values.businessBio}
                        />
                </div>
            <DisplayError errors={errors} touched={touched} field={'businessBio'} />
                <div>
                    <div>
                        <Label htmlFor="businessEmail" value="Business Email" />
                    </div>
                    <TextInput
                            onChange={handleChange}
                            onBlur={handleBlur}
                            autoComplete='email'
                            id='businessEmail'
                            name={"businessEmail"}
                            type="email"
                            value={values.businessEmail}
                     />
                     <DisplayError errors={errors} touched={touched} field={'businessEmail'}/>
                    </div>
                    <div>
                        <div className='mb-2 block'>
                            <Label htmlFor="businessPhone" value="Business Phone" />
                        </div>
                        <TextInput
                            onChange={handleChange}
                            onBlur={handleBlur}
                            autoComplete='phone'
                            id="businessPhone"
                            name={'businessPhone'}
                            type="text"
                            value={values.businessPhone}
                        />
                        <DisplayError errors={errors} touched={touched} field={'businessPhone'} />
                    </div>
                    <Button color={'success'} type="submit">Submit</Button>
                    <Button color={'failure'} type="reset" onClick={handleReset}>Reset</Button>
                    <DisplayStatus status={status}/>
        </form>
                    <FormDebugger {...props} />
        </>
    )
}