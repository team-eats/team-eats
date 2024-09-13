"use client"

import {BusinessSchema} from "@/app/utils/models/business/business.validator";
import {z} from "zod";
import {Formik, FormikHelpers, FormikProps} from "formik";
import {toFormikValidationSchema} from "zod-formik-adapter";
import {Button, Label, TextInput} from "flowbite-react";
import {DisplayError} from "@/app/components/DisplayError";
import {DisplayStatus} from "@/app/components/DisplayStatus";
import {FormDebugger} from "@/app/components/FormDebugger";
import {DisplayUploadErrorProps, ImageUploadDropZone} from "@/app/components/ImageUploadDropZone";
import React from "react";
import {Session} from "@/app/utils/session.utils";
import {redirect} from "next/navigation";

const businessListingSchema = BusinessSchema
    .omit({businessId: true, businessProfileId: true})
    .extend({
        businessPhoto:z
            .any()
            .optional()
    })

type BusinessListing = z.infer<typeof businessListingSchema>

type Props = {session: Session}

export function ListingForm(props: Props){
   const session = props.session;


    const initialValues = {
        businessName:'',
        businessHours:'',
        businessBio:'',
        businessEmail:'',
        businessPhone:''
    }

    const handleSubmit = (values: BusinessListing, actions: FormikHelpers<BusinessListing>) => {
        //todo using values build out a new object that contains businessId(null) and businessProfileId(session.profile.profileId) and pass it to json.stringify on line 49
        const newValues = {
            businessId: null,
            businessProfileId: session.profile.profileId,
            businessName: values.businessName,
            businessHours: values.businessHours,
            businessBio: values.businessBio,
            businessEmail: values.businessEmail,
            businessPhone: values.businessPhone,
            businessPhoto: null
        }
        const {setStatus, resetForm} = actions

        if (values.businessPhoto) {
            fetch("/apis/image/",{
                method: "POST",
                headers: {
                    'Authorization': session.authorization ?? ""
                },
                body: values.businessPhoto
            })
                .then(response => response.json())
                .then(json => {
                    if (json.status !== 200) {
                    setStatus({type: 'failure', message: json.message})
                    } else {
                        newValues.businessPhoto = json.message
                        postBusiness()
                    }
                })
        } else {
            newValues.businessPhoto = null
            postBusiness()
        }


function postBusiness() {
        fetch(`/apis/business`, {
            method: 'POST',
            headers: {
                'Authorization':session.authorization,
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
    <Formik
        initialValues=
            {initialValues} onSubmit ={handleSubmit} validationSchema={toFormikValidationSchema(businessListingSchema)}>
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
        handleReset,
        setFieldValue,
        setFieldError,
        setFieldTouched
    } = props;

    const [selectedImage, setSelectedImage] = React.useState<string | null> (null)

    return (
        <>
            <form onSubmit = {handleSubmit} className="">
                {selectedImage?<img src={selectedImage} alt={"uploadedImage"} />: <></>}
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
    <div className="">
    <Label htmlFor="businessPhoto" value="business photo"/>
        </div>
        <ImageUploadDropZone
    formikProps={{
        setFieldError,
            setFieldTouched,
            handleBlur,
            handleChange,
            setFieldValue,
            fieldValue: 'businessPhoto'}}
    setSelectedImage={setSelectedImage}
    />

    <DisplayUploadErrorProps errors={errors} field={'businessPhoto'}/>


    <div>
    <div>
        <Label htmlFor="businessHours" value="Business Hours" />
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