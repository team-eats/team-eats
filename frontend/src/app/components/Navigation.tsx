'use client'

import {Avatar, Button, Dropdown, Navbar} from "flowbite-react";
import {Login} from "@/app/components/Login";
import { Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useRef, useState } from "react";


export function Navigation() {
    const [openLogin, setOpenLogin] = useState(false);
    const emailInputRef = useRef<HTMLInputElement>(null);
    const [openRegister, setOpenRegister] = useState(false);


    return (

        <>

            <Navbar fluid rounded>
                <Navbar.Brand href="/">
                    <img src="/placeholder-logo.png" className="h-12 hover:border-red-800" alt="placeholder logo"/>
                    <span
                        className="self-center whitespace-nowrap text-black text-5xl hover:text-red-950 hover:rounded-xl hover:border-red-800dark:text-white">Team Eats</span>
                </Navbar.Brand>
                <form className="flex items-center max-w-sm py-4">
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                {/*<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"*/}
                                {/*      stroke-width="2"*/}
                                {/*      d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>*/}
                            </svg>
                        </div>
                        <input type="text" id="simple-search"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:border-red-800 focus:ring-red-800 focus:border-red-800 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 px-14"
                               placeholder="Search Eats..." required/>
                    </div>
                    <button type="submit"
                            className="p-2.5 ms-2 text-sm font-medium text-white bg-black rounded-lg border border-black hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-white dark:bg-red-600 dark:hover:bg-red-800 dark:focus:ring-red-500">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width="2"
                                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </form>

                <div className="flex flex-wrap items-center p-2 md:order-2">
                    {/*<Login/>*/}
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                 viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2"
                                      d="M5 7h14M5 12h14M5 17h14"/>
                            </svg>

                        }
                    >
                        <Dropdown.Header className="bg-red-700 text-white">
                            <span className="block text-sm">Team Eats</span>
                            <span className="block truncate text-sm font-medium">Options</span>
                        </Dropdown.Header>
                        <Dropdown.Item>Profile Settings</Dropdown.Item>
                        <Dropdown.Item>Favorites</Dropdown.Item>
                        <Dropdown.Item onClick={() => setOpenLogin(true)}>Login</Dropdown.Item>
                        <Dropdown.Item>About Us</Dropdown.Item>
                        <Dropdown.Divider/>

                    </Dropdown>
                </div>
            </Navbar>

            <Modal show={openLogin} size="md" popup onClose={() => setOpenLogin(false)} initialFocus={emailInputRef}>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to Team Eats</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Your email" />
                            </div>
                            <TextInput id="email" ref={emailInputRef} placeholder="name@company.com" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" value="Your password" />
                            </div>
                            <TextInput id="password" type="password" required />
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                                <Checkbox id="remember" />
                                <Label htmlFor="remember">Remember me</Label>
                            </div>
                            <a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                                Lost Password?
                            </a>
                        </div>
                        <div className="w-full">
                            <Button>Log In</Button>
                        </div>
                        <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered?&nbsp;
                            <a href="#" className="text-cyan-700 hover:underline dark:text-cyan-500"
                               onClick={() => {setOpenLogin(false)}}>

                                Create account
                            </a>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={openRegister} size="md" popup onClose={() => setOpenRegister(false)} initialFocus={emailInputRef}>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Create an Account</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Your email"/>
                            </div>
                            <TextInput id="email" ref={emailInputRef} placeholder="name@company.com" required/>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" value="Your password"/>
                            </div>
                            <TextInput id="password" type="password" required/>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" value="Retype password"/>
                            </div>
                            <TextInput id="password" type="password" required/>
                        </div>
                        <div className="w-full">
                            <Button>Create Account</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

        </>
    )
}


{/*{setOpenRegister(value:true)}>*/}