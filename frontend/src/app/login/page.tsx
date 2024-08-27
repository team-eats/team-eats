
"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";


export default function() {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-around p-6 my-auto py-20 gap-16 md:gap">


                <div>
                    <form className="flex max-w-md flex-col gap-4">
                        <h2>Login</h2>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email2" value="Your email"/>
                            </div>
                            <TextInput id="email2" type="email" placeholder="name@flowbite.com" required shadow/>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password2" value="Your password"/>
                            </div>
                            <TextInput id="password2" type="password" required shadow/>
                        </div>
                        <Button type="submit"
                        className="my-3 ">Login</Button>
                    </form>
                </div>

                <div>
                    <form className="flex max-w-md flex-col gap-4">
                        <h2>Create Account</h2>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email2" value="Your email"/>
                            </div>
                            <TextInput id="email2" type="email" placeholder="name@flowbite.com" required shadow/>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password2" value="Your password"/>
                            </div>
                            <TextInput id="password2" type="password" required shadow/>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="repeat-password" value="Repeat password"/>
                            </div>
                            <TextInput id="repeat-password" type="password" required shadow/>
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="agree"/>
                            <Label htmlFor="agree" className="flex">
                                I agree with the&nbsp;
                                <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                    terms and conditions
                                </Link>
                            </Label>
                        </div>
                        <Button type="submit">Register new account</Button>
                    </form>
                </div>


            </div>
        </>
    );
}

