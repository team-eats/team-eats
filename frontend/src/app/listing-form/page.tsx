"use client";

import {Label, Textarea, TextInput} from "flowbite-react";
import { HiMail } from "react-icons/hi";

export default function() {
    return(
        <>
            <div className="mx-auto text-center">
                <p className="text-4xl">
                New Listing Form
                </p>
            </div>
            <div className="flex justify-evenly">
                <div className="my-4">
                    <div className="max-w-md hover:border-4">
                        <TextInput id="email4" type="email" icon={HiMail} placeholder="Name" required/>
                    </div>
                    <div className="max-w-md hover:border-4">
                        <TextInput id="email4" type="email" icon={HiMail} placeholder="Address" required/>
                    </div>
                    <div className="max-w-md hover:border-4">
                        <TextInput id="email4" type="email" icon={HiMail} placeholder="Business Name" required/>
                    </div>
                    <div className="max-w-md hover:border-4">
                        <TextInput id="email4" type="email" icon={HiMail} placeholder="Business Phone Number" required/>
                    </div>
                    <div className="max-w-md hover:border-4">
                        <div className="mb-2 block">
                            <Label htmlFor="comment" value="About your restaurant"/>
                        </div>
                        <Textarea className="hover:b-4" id="comment" placeholder="About your business..." required
                                  rows=""/>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="large" value="Large input"/>
                        </div>
                        <TextInput id="large" type="text" sizing="lg"/>
                    </div>
                </div>
                <div className="max-w-md hover:border-4">
                    <div className="mb-2 block">
                        <Label htmlFor="comment" value="attach files"/>
                    </div>
                    <Textarea className="hover:b-4" id="comment" placeholder="Attach files..." required
                              rows=""/>
                </div>
            </div>

                <div
                    className="mx-auto mt-8 w-64 py-6 px-2 border-2 text-2xl text-center bg-black text-white hover:bg-border-white hover:border-4 hover:bg-red-950">Submit
                    listing
                </div>
        </>
    )
}



