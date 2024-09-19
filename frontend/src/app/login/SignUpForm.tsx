import {ProfileSchema} from "@/app/utils/models/profile/profile.validator";
import {z} from "zod";
import {Formik, FormikHelpers, FormikProps} from "formik";
import {toFormikValidationSchema} from "zod-formik-adapter";
import {Button, Label, TextInput} from "flowbite-react";
import {DisplayError} from "@/app/components/DisplayError";
import {DisplayStatus} from "@/app/components/DisplayStatus";
import {FormDebugger} from "@/app/components/FormDebugger";


const SignUpSchema = ProfileSchema
    .omit({profileId: true, profileDatetime: true})
    .extend({
        profilePassword: z.string({
            required_error: 'profilePassword is required',
            invalid_type_error: 'Please provide a valid profilePassword'
        })
            .min(8, {message: 'Password must be at least 8 characters long'})
            .max(100, {message: 'Password must be less than 100 characters long'}),

        profilePasswordConfirm: z.string({
            required_error: 'profilePasswordConfirm is required',
            invalid_type_error: 'Please provide a valid profilePasswordConfirm'
        })
            .min(8, {message: 'Password must be at least 8 characters long'})
            .max(100, {message: 'Password must be less than 100 characters long'})
    })
    .refine(data => data.profilePassword === data.profilePasswordConfirm, {
        message: 'Passwords do not match',})

type SignUp = z.infer<typeof SignUpSchema>

export function SignUpForm() {
    const initialValues = {
        profileName: '',
        profileEmail: '',
        profilePassword: '',
        profilePasswordConfirm: ''
    }

    const handleSubmit = (values: SignUp, actions: FormikHelpers<SignUp>) => {
        const {setStatus, resetForm} = actions
        fetch('/apis/sign-up', {
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
                    window.location.href = '/'
                }
                setStatus({type, message: data.message})
            })
            .catch(error => {
                console.error(error)
                setStatus({type: 'failure', message: 'An error occurred try again later'})
            })
    }

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={toFormikValidationSchema(SignUpSchema)}>
                {SignUpFormContent}
            </Formik>
        </>
    )

}

export function SignUpFormContent(props: FormikProps<SignUp>) {
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
                <div>
                    <Label htmlFor='profileName' value='Your name'/>
                </div>

                <TextInput
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete='username'
                    id='profileName'
                    name={'profileName'}
                    type='text'
                    value={values.profileName}
                />
                <DisplayError errors={errors} touched={touched} field={'profileName'}/>
            </div>

            <div>
                <div>
                    <Label htmlFor='email1' value='Your email'/>
                </div>

                <TextInput
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete='email'
                    id='email1'
                    name={'profileEmail'}
                    type='email'
                    value={values.profileEmail}
                />
                <DisplayError errors={errors} touched={touched} field={'profileEmail'}/>
            </div>

            <div>
                <div>
                    <Label htmlFor='password' value='Your password'/>
                </div>
                <TextInput
                    autoComplete='current-password'
                    value={values.profilePassword}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name='profilePassword'
                    id='password'
                    type='password'
                />
                <DisplayError errors={errors} touched={touched} field={'profilePassword'}/>
            </div>

            <div>
                <div>
                    <Label htmlFor='profilePasswordConfirm' value='Confirm password'/>
                </div>

                <TextInput
                    value={values.profilePasswordConfirm}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id='profilePasswordConfirm'
                    name='profilePasswordConfirm'
                    autoComplete='new-password confirm'
                    type='password'
                />
                <DisplayError errors={errors} touched={touched} field={'profilePasswordConfirm'}/>
            </div>
<div className="flex gap-3 mt-3">
            <Button color={'success'} type='submit'>Submit</Button>
            <Button color={'failure'} type='reset' onClick={handleReset}>Reset</Button>
</div>
            <DisplayStatus status={status}/>
        </form>
            {/*<FormDebugger {...props}/>*/}
        </>
    )
}