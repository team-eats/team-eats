import {Session} from "node:inspector";
import {Formik, FormikHelpers} from "formik";
import React from "react";
import {Button, Label, TextInput} from "flowbite-react";
import {DisplayUploadErrorProps, ImageUploadDropZone} from "@/app/components/ImageUploadDropZone";
import {DisplayError} from "@/app/components/DisplayError";
import {FormDebugger} from "@/app/components/FormDebugger";
import {DisplayStatus} from "@/app/components/DisplayStatus";
import {z} from "zod";



type ItemSchema = z.infer<typeof itemSchema>

type Props = {session: Session}

export function ItemForm(props: Props) {
    const session = props.session;
}

const  handleSubmit = (props: Props, actions: FormikHelpers<ItemsForm>) => {
    const Values = {
        itemName: '',
        itemDescription: '',
        itemPhoto:'',
        itemPrice: '',
        itemOrder: ''
    }
    const {setStatus, resetForm} = actions

    if (values.itemName) {
        fetch("/apis/item/", {
            method: "POST",
            headers: {
                'Authorization': session
                    .authorization ?? ""
            },
            body: values.itemName
        }) Promise<Response>
            .then(response : REsponse =>
            response.json())
        .then(json => {
            if (json.status !== 200) {
                setStatus({type: 'failure', message: json.message})
            } else {
                values.itemName = json.message
                postItem()
            }
        })
    }

    function postItem() {
        fetch(`/apis/item`, {
            method: 'POST',
            headers: {
                'Authorization':session.authorization,
                'Content-Type': 'application/json'
            }
            body: JSON.stringify(values)
        })
            .then(response: Response => response.json())
            .then(data => {
                let type: string = 'failure'
                if (data.status === 200) {
                    type = 'success'
                    resetForm()
                }
                setStatus({type, message: data.message})
        })
            .catch(error => {
                console.log(error)
                setStatus({type: 'failure', message:'input is an error, try again'})
            })
    }
}

return (
    <div className ='flex justify-center items-center min-h-screen bg-gray-100 mx-auto max-w-3xl'>
        <div className="bg-white p-6 rounded-lg shadow-lg w-full">
            <Formik initialValues={initialValues} onSubmit={handleSubmit}
                    validationSchema={{toFormikValidationSchema(itemForm)} >
                        {ItemFormContent}
                        </Formik>
                        </div>
                        </div>
                        )
                    }


                        const [selectedItem, setSelectedName] = React.useState<string | null> (null)

                        export function ItemFormContent(props: FormikProps<ItemListing>)
                    {
                        const {
                        status,
                        values,
                        errors,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        handleReset,
                        setFieldValue,
                        setFieldError,
                        setFieldTouched
                    } = props;

                        const [selectedItem, setSelectedItem] = React.useState<string | null> (null)

                        return (
                        <>
                        <form onSubmit = {handleSubmit}> className="">
                {selectedImage ? <img src{selectedImage} alt={"uploadedImage"}
                                      className="w-full h-auto"/> : <></>}
                <div>
                    <div>
                        <Label htmlFor="itemName" value="Item Name"/>
                    </div>
                    <TextInput
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete='organization'
                        id='itemName'
                        name={'itemName'}
                        type='text'
                        value={values.itemName}
                        className="w-full"
                    />
                    <DisplayError errors={errors} touched={touched} field={'itemName'}/>
                </div>
                <div className="">
                    <Label htmlFor="itemPhoto" value="Item Photo"/>
                </div>
                <ImageUploadDropZone
                    formikProps={{
                        setFieldError,
                        setFieldTouched,
                        handleBlur,
                        handleChange,
                        setFieldValue,
                        fieldValue: 'itemPhoto'
                    }}
                    setSelectedImage={setSelectedImage}
                />

                <DisplayUploadErrorProps errors={errors} field={'itemPhoto'}/>

                <div>
                    <div>
                        <Label htmlFor="itemName" value="Item Name"/>
                    </div>
                    <TextInput
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete='organization'
                        id="itemName"
                        name={"itemName"}
                        type='text'
                        value={values.itemName}
                        className="w-full"
                    />
                </div>
                <DisplayError errors={errors} touched={touched} field={'itemName'} />
                <div>
                    <div>
                        <Label htmlFor="itemDescription" value="Item Description"/>
                    </div>
                    <TextInput
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete='organization'
                        id="itemDescription"
                        name={"itemDescription"}
                        type='text'
                        value={values.itemDescription}
                        className="w-full"
                    />
                </div>
                <DisplayError errors={errors} touched={touched} field={'itemDescription'} />
                <div>
                    <div>
                        <Label htmlFor="itemPrice" value="Item Price"/>
                    </div>
                    <TextInput
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete='organization'
                        id="itemPrice"
                        name={"itemPrice"}
                        type='text'
                        value={values.itemPrice}
                        className="w-full"
                    />
                </div>
                <DisplayError errors={errors} touched={touched} field={'itemPrice'} />
                <div>
                    <div>
                        <Label htmlFor="itemOrder" value="Item Order"/>
                    </div>
                    <TextInput
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete='organization'
                        id="itemOrder"
                        name={"itemOrder"}
                        type='text'
                        value={values.itemOrder}
                        className="w-full"
                    />
                    <DisplayError errors={errors} touched={touched} field={'itemOrder'} />
                </div>
                <Button color={'success'} type="submit">Submit</Button>
                <Button color={'failure'} type="reset" onClick={handleReset}>Reset</Button>
                <DisplayStatus status={status}/>

            </Formik>
            <FormDebugger {...props} />
        </>
        )

    }