
"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import {SignUpForm} from "@/app/login/SignUpForm";


export default function() {
    return (
        <>
            <div
                className="flex flex-col justify-evenly items-center md:flex-row my-12 md:my-auto md:py-20 md:justify-around gap-12 md:gap-0">


                <div>
                    <form className="flex w-72 md:w-[20rem] flex-col gap-4 border-2 border-gray-600 p-5 rounded-lg">
                        <h2 className="text-2xl">Login</h2>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email2" value="Your email"/>
                            </div>
                            <TextInput id="email2" type="email" placeholder="email@address.com" required shadow/>
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password2" value="Your password"/>
                            </div>
                            <TextInput id="password2" type="password" required shadow/>
                        </div>
                        <Button type="submit"
                                className="my-3l">Login</Button>
                    </form>
                </div>

                <div>
                    <p>or</p>
                </div>

                <div>
                    <SignUpForm />
                </div>


            </div>
        </>
    );
}

