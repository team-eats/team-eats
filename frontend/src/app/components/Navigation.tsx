'use client'

import {Button, Modal, Dropdown, Navbar, Label, TextInput} from "flowbite-react";
import { useState } from "react";
import {BusinessCard} from "@/app/components/BusinessCard";




export function Navigation() {
    const [openFavoritesModal, setOpenFavoritesModal] = useState(false);

    const [openSettingsModal, setOpenSettingsModal] = useState(false);
    const [email, setEmail] = useState('');

    function onCloseSettingsModal() {
        setOpenSettingsModal(false);
        setEmail('');
    }
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
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
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
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
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
                        <Dropdown.Item onClick={() => setOpenSettingsModal(true)}>Profile Settings</Dropdown.Item>
                        <Dropdown.Item onClick={() => setOpenFavoritesModal(true)}>Favorites</Dropdown.Item>

                        <Dropdown.Item className='block xl:hidden text-left'>About Us</Dropdown.Item>
                        <Dropdown.Divider/>
                        <Dropdown.Item href="/login" >Sign In / Create Account</Dropdown.Item>
                        <Dropdown.Item>Sign Out</Dropdown.Item>
                    </Dropdown>
                </div>
            </Navbar>

            <Modal show={openSettingsModal} size="md" onClose={onCloseSettingsModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Account Settings</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Change e-mail" />
                            </div>
                            <TextInput
                                id="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" value="Change password" />
                            </div>
                            <TextInput id="password" type="password" />
                        </div>
                        <div className="w-full">
                            <Button>Save settings</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal dismissible show={openFavoritesModal} onClose={() => setOpenFavoritesModal(false )}>
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







