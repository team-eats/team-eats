'use client'

import {LocationSchema} from "@/app/utils/models/location/location.validator";
import {z} from "zod";
import {Formik, FormikHelpers, FormikProps} from "formik";
import {Session} from "@/app/utils/session.utils";
import {toFormikValidationSchema} from "zod-formik-adapter";
import {Button, Checkbox, Datepicker, Label, TextInput} from "flowbite-react";
import {DisplayError} from "@/app/components/DisplayError";
import {FormDebugger} from "@/app/components/FormDebugger";
import {DisplayStatus} from "@/app/components/DisplayStatus";



const CreateLocationSchema = LocationSchema
    .omit({locationId: true, locationBusinessId: true, locationEndDatetime: true, locationStartDatetime: true})
    .extend({
        locationDate: z.any({
            required_error: 'please provide a valid date',
            invalid_type_error: 'date must be a string'}),

        locationStartTime: z.any({
            required_error: 'please provide a valid start time',
            invalid_type_error: 'start time must be a string'}),

        locationEndTime: z.any({
            required_error: 'please provide a valid end time',
            invalid_type_error: 'end time must be a string'})
    })

type CreateLocation = z.infer<typeof CreateLocationSchema>

type Props = {
    session: Session,
    businessId: string
}

export function LocationForm(props: Props) {
    const session = props.session

    const initialValues = {
        locationOfBusiness: '',
        locationDate: '',
        locationActive: false,
        locationStartTime: '10:00',
        locationEndTime: '22:00',
    }

    const handleSubmit = (values: CreateLocation, actions: FormikHelpers<CreateLocation>) => {
        const {setStatus, resetForm} = actions



        const {
            locationDate,
            locationStartTime,
            locationEndTime
        } = values

        values.locationActive = values.locationActive !== [];

        const convertDate = new Date(locationDate)
        const formattedDate = `${convertDate.getFullYear()}-${convertDate.getMonth() + 1}-${convertDate.getDate()}`
        const locationStartDatetime = `${formattedDate} ${locationStartTime}`
        const locationEndDateTime = `${formattedDate} ${locationEndTime}`

        const newValues = {
            locationId: null,
            locationBusinessId: props.businessId,
            locationActive: values.locationActive,
            locationOfBusiness: values.locationOfBusiness,
            locationStartDatetime: locationStartDatetime,
            locationEndDatetime: locationEndDateTime
        }

        // console.log()

        fetch('/apis/location', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': session.authorization
            },
            body: JSON.stringify(newValues)
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
        <div className='flex justify-center items-center min-h-screen bg-red-700 mx-auto max-w-3xl rounded-lg'>
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
                <Formik initialValues={initialValues} onSubmit={handleSubmit}
                        validationSchema={toFormikValidationSchema(CreateLocationSchema)}>
                    {LocationFormContent}
                </Formik>
            </div>
        </div>
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
        setFieldValue,
        handleSubmit,
        handleReset
    } = props

    return (
        <>
                <form onSubmit={handleSubmit}>
                    <div>
                        <Label htmlFor='locationOfBusiness' value='Business address:'/>
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

                    <div className="flex items-center gap-2">
                        <Label htmlFor="promotion">Check box if the address for this business won't change: </Label>
                        <Checkbox id="locationActive" onChange={handleChange} onBlur={handleBlur}/>
                    </div>

                    <div>
                        <Label htmlFor={'locationDate'} value={'Date:'}/>
                        <Datepicker onSelectedDateChanged={(date) => {
                            setFieldValue('locationDate', date)
                        }} name='locationDate' minDate={new Date()}/>
                    </div>

                    <div className='flex gap-6'>
                        <div>
                            <label htmlFor="start-time"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start
                                time:</label>
                            <div className="relative ">
                                <div
                                    className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd"
                                              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </div>
                                <input type="time" id="start-time"
                                       className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       onChange={handleChange}
                                       value={values.locationStartTime}
                                       name="locationStartTime"
                                       required/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="end-time"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End
                                time:</label>
                            <div className="relative">
                                <div
                                    className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd"
                                              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </div>
                                <input type="time" id="end-time"
                                       className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       onChange={handleChange}
                                       value={values.locationEndTime}
                                       name="locationEndTime"
                                       required/>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3 mt-3">
                        <Button color={'success'} type='submit'>Submit</Button>
                        <Button color={'failure'} onClick={handleReset}>Reset</Button>

                        <DisplayStatus status={status}/>
</div>
                </form>
                {/*<FormDebugger {...props} />*/}
        </>
    )
}