'use client'

import {LocationSchema} from "@/app/utils/models/location/location.validator";
import {z} from "zod";
import {Formik, FormikHelpers, FormikProps} from "formik";
import {Session} from "@/app/utils/session.utils";
import {toFormikValidationSchema} from "zod-formik-adapter";
import {Button, Datepicker, Label, TextInput} from "flowbite-react";
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

                {/*<div>*/}
                {/*    <Label htmlFor='locationStartDatetime' value='Start time'/>*/}

                {/*    <DateTimePicker onChange={handleChange} id='locationStartDateTime' name={'locationStartDatetime'} value={values.locationStartDatetime} minDate={new Date()}/>*/}
                {/*</div>*/}

                {/*<div>*/}
                {/*    <Label htmlFor='locationEndDatetime' value='End time'/>*/}

                {/*    <DateTimePicker onChange={handleChange} id='locationEndDateTime' name={'locationEndDatetime'} value={values.locationEndDatetime}/>*/}
                {/*</div>*/}
                
                <div>
                    <Label htmlFor={'locationDate'} value={'Date:'} />
                    <Datepicker name='locationDate' minDate={new Date()} />
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
                                    <path fill-rule="evenodd"
                                          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                          clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <input type="time" id="start-time"
                                   className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={'locationStartTime'} required/>
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
                                    <path fill-rule="evenodd"
                                          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                          clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <input type="time" id="end-time"
                                   className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   value="00:00" required/>
                        </div>
                    </div>
                </div>

                <div>
                    <Button onClick={handleReset}>Reset</Button>
                    <Button color={'success'} type='submit'>Submit</Button>
                    <DisplayStatus status={status}/>
                </div>
            </form>
            <FormDebugger {...props} />
        </>
    )
}