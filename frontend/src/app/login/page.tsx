
"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import {SignUpForm} from "@/app/login/SignUpForm";
import {SignInForm} from "@/app/login/SingInForm";


export default function() {
    return (
        <>
            <div
                className="flex flex-col justify-evenly items-center md:flex-row my-12 md:my-auto md:py-20 md:justify-around gap-12 md:gap-0">


                <div>
                    <div>
                        <SignInForm />
                    </div>
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

