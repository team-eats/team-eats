'use client'

import {Button, Modal, Dropdown, Navbar} from "flowbite-react";
import { useState } from "react";
import {BusinessCard} from "@/app/components/BusinessCard";





export function Navigation() {
    const [openModal, setOpenModal] = useState(false);

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
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
                            </svg>
                        </div>
                        <input type="text" id="simple-search"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:border-red-800 focus:ring-red-800 focus:border-red-800 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 px-14"
                               placeholder="Search Eats..." required/>
                    </div>

                </form>


                <div className="flex flex-wrap items-center p-2 md:order-2">

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
                        <Dropdown.Header>
                            <span className="block text-sm">Team Eats</span>
                            <span className="block truncate text-sm font-medium">Options</span>
                        </Dropdown.Header>
                        <Dropdown.Item>Profile Settings</Dropdown.Item>
                        <Dropdown.Item onClick={() => setOpenModal(true)}>Favorites</Dropdown.Item>
                        <Dropdown.Item>Create Account</Dropdown.Item>
                        <Dropdown.Item className='block xl:hidden text-left'>About Us</Dropdown.Item>
                        <Dropdown.Divider/>
                        <Dropdown.Item>Sign in/out</Dropdown.Item>
                    </Dropdown>
                </div>
            </Navbar>





    <Modal dismissible show={openModal} onClose={() => setOpenModal(false )}>
        <Modal.Header className={"bg-orange-200"}>Favorite Eats</Modal.Header>
        <Modal.Body className={"bg-red-700"}>

            <div>
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
            </div>
        </Modal.Body>
        <Modal.Footer className={"bg-orange-200"}>

        </Modal.Footer>
    </Modal>
</>
);
}







