import {z} from "zod";
import {useRouter} from "next/router";
import {Formik, FormikHelpers, FormikProps} from "formik";
import {toFormikValidationSchema} from "zod-formik-adapter";
import {Button, Label, TextInput} from "flowbite-react";
import {DisplayError} from "@/app/components/DisplayError";
import {DisplayStatus} from "@/app/components/DisplayStatus";
import {FormDebugger} from "@/app/components/FormDebugger";


const formSchema = z.object({

    profilePassword: z.string({
        required_error: 'password required',
        invalid_type_error: 'password must be text'
    }).min(8, {message: 'please make a longer password'})
        .max(32, {message: 'please make a shorter password'}),

    profileEmail: z.string({
        required_error: 'email is required',
        invalid_type_error: 'email must be text'
    }).email({message: 'please provide valid email'})
        .max(128, {message: 'email too long'})
})

type FormSchema = z.infer<typeof formSchema>

export function SignInForm() {
    const router = useRouter()

    const initialValues = {
        profileEmail: '',
        profilePassword: ''
    }

    const handleSubmit = (values: FormSchema, actions: FormikHelpers<FormSchema>) => {
        const {profileEmail, profilePassword} = values
        const {setStatus, resetForm} = actions

        fetch('/apis/sign-in',{
            method: 'POST',
            body: JSON.stringify({profileEmail, profilePassword}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error('Network response was NOT ok...')
        }).then(json => {
            let type = 'FAILURE'
            if (json.status === 200) {
                resetForm()
                type = 'success'
            }
            setStatus({type, message: json.message})
        })
    }

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={toFormikValidationSchema(formSchema) }>
            {SignInFormContent}
        </Formik>
    )
}


function SignInFormContent(props: FormikProps<FormSchema>) {

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
            <form onSubmit={handleSubmit}>
                <h1>Welcome back...</h1>

                <div>
                    <div>
                        <Label htmlFor="email" value="Your Email"/>
                    </div>

                    <TextInput
                        autoComplete="email"
                        value={values.profileEmail}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        id="email"
                        name='profileEmail'
                    />

                    <DisplayError errors={errors} touched={touched} field={'profileEmail'}/>
                </div>

                <div>
                    <div>
                        <Label htmlFor="password" value="Your password"/>
                    </div>

                    <TextInput
                        autoComplete="current-password"
                        value={values.profilePassword}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        id="password1"
                        type="password"
                    />

                    <DisplayError errors={errors} touched={touched} field={'profilePassword'}/>
                </div>

                <div>
                    <Button onClick={handleReset}>Reset</Button>
                    <Button color={'success'} type="submit">Submit</Button>
                </div>

                <DisplayStatus status={status} />
            </form>

            <FormDebugger {...props} />
        </>
    )
}



















