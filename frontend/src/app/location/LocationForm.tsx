'use client'

import {LocationSchema} from "@/app/utils/models/location/location.validator";
import {z} from "zod";
import {Formik, FormikHelpers, FormikProps} from "formik";
import {Session} from "@/app/utils/session.utils";
import {toFormikValidationSchema} from "zod-formik-adapter";
import {Button, Label, TextInput} from "flowbite-react";
import {DisplayError} from "@/app/components/DisplayError";
import DateTimePicker from "react-datetime-picker";
import {FormDebugger} from "@/app/components/FormDebugger";
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import {DisplayStatus} from "@/app/components/DisplayStatus";



const CreateLocationSchema = LocationSchema
    .omit({locationId: true, locationBusinessId: true})

type CreateLocation = z.infer<typeof CreateLocationSchema>

type Props = {session: Session}

export function LocationForm(props: Props) {
    const session = props.session

    const initialValues = {
        locationOfBusiness: '',
        locationActive: false,
        locationStartDatetime: new Date(),
        locationEndDatetime: new Date()
    }

    const handleSubmit = (values: CreateLocation, actions: FormikHelpers<CreateLocation>) => {
        const {setStatus, resetForm} = actions
        fetch('/apis/location', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': session.authorization
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
                setStatus({type, message: data.message})
            })
            .catch(error => {
                console.log(error)
                setStatus({type: 'failure', message: 'An error occurred try again later'})
            })
    }

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={toFormikValidationSchema(CreateLocationSchema)}>
            {LocationFormContent}
        </Formik>
    )
}

export function LocationFormContent(props: FormikProps<CreateLocation>) {
    const {
        status,
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <Label htmlFor='locationOfBusiness' value='Business address'/>

                    <TextInput
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="address-level4"
                        id='locationOfBusiness'
                        name={'locationOfBusiness'}
                        type='text'
                        value={values.locationOfBusiness}
                    />
                    <DisplayError errors={errors} touched={touched} field={'locationOfBusiness'}/>
                </div>

                <div>
                    <Label htmlFor='locationStartDatetime' value='Start time'/>

                    <DateTimePicker onChange={handleChange} id='locationStartDateTime' name={'locationStartDatetime'} value={values.locationStartDatetime} minDate={new Date()}/>
                </div>

                <div>
                    <Label htmlFor='locationEndDatetime' value='End time'/>

                    <DateTimePicker onChange={handleChange} id='locationEndDateTime' name={'locationEndDatetime'} value={values.locationEndDatetime}/>
                </div>

                <div>
                    <Button onClick={handleReset}>Reset</Button>
                    <Button color={'success'} type='submit'>Submit</Button>
                    <DisplayStatus status={status} />
                </div>
            </form>
            <FormDebugger {...props} />
        </>
    )
}