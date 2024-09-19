'use client'

import {Button, Modal, Dropdown, Navbar, Label, TextInput} from "flowbite-react";
import React, { useState } from "react";
import Image from 'next/image';
import {SignInForm} from "@/app/login/SignInForm"
import {SignUpForm} from "@/app/login/SignUpForm";
import {BusinessCard} from "@/app/components/BusinessCard";
import {getSession, Session} from "@/app/utils/session.utils";
import {redirect} from "next/navigation";



// const businessData= [
//     { businessPhoto: "/images/card-top.jpg", businessName: 'SouthWestern Express', businessBio: 'No Bio' }
// ];

type SessionProps = {
    session: Session | undefined
}


export function Navigation(props: SessionProps) {
    const [openFavoritesModal, setOpenFavoritesModal] = useState(false);

    const [openSettingsModal, setOpenSettingsModal] = useState(false);
    const [email, setEmail] = useState('');

    const [openSignInModal, setOpenSignInModal] = useState(false);
    const [openSignUpModal, setOpenSignUpModal] = useState(false);

    // const [openFavoriteModal, setOpenFavoriteModal] = useState(false);
    // const [email, setEmail] = useState('');

    const session = props.session

    let user = ''

    if (session === undefined) {
        user = 'to Eats'
    } else {
        user = session.profile.profileName
    }

    function onCloseSettingsModal() {
        setOpenSettingsModal(false);
        setEmail('');

    }

    function onCloseFavoriteModal() {
        setOpenFavoritesModal(false);
        setEmail('');
    }

    function onCloseSignInModal() {
        setOpenSignInModal(false);
        setEmail('');
    }

    function onCloseSignUpModal() {

        setOpenSignUpModal(false);
        setEmail('')
    }


    return (
        <>
            <Navbar className='p-1' fluid>

                <Navbar.Brand href="/">
                    <div className='flex'>
                        <img src="/plate-logo.svg" className="h-10 hover:border-red-800 self-center pr-2" alt="Team Eats logo"/>
                        <span
                            className="hidden sm:flex self-center whitespace-nowrap text-black text-4xl hover:text-red-950 hover:rounded-xl hover:border-red-800dark:text-white">TasteBuddy
                        </span>
                    </div>
                </Navbar.Brand>

                <form action={async(formData) => {
                    redirect(`/search/?q=${formData.get('search')}`);
                }} className="flex items-center max-w-sm">
                    <label htmlFor="simple-search" className="sr-only">Search</label>

                    <div className="relative">
                        <input type="text" id="simple-search"
                               name={'search'}
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  hover:border-red-600 focus:ring-red-700 focus:border-red-700 block w-40 sm:w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"

                               placeholder="Search Eats..." required/>
                    </div>

                    <button type="submit"
                            className="p-2.5 ms-2 text-sm font-medium text-white bg-black border border-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-white dark:bg-red-600 dark:hover:bg-red-800 dark:focus:ring-red-500">
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
                            <span className="block text-sm">Welcome {user}!</span>
                            <span className="block truncate text-sm font-medium">Options</span>
                        </Dropdown.Header>
                        <Dropdown.Item href="/listing-form">
                            Business Listing
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setOpenSettingsModal(true)}>Profile Settings</Dropdown.Item>
                        <Dropdown.Item onClick={() => setOpenFavoritesModal(true)}>Favorites</Dropdown.Item>
                        <Dropdown.Item className='block xl:hidden text-left'>About Us</Dropdown.Item>
                        <Dropdown.Divider/>
                        {/*<Dropdown.Item onClick={() => setOpenSignInModal(true)}>Sign In</Dropdown.Item>*/}
                        <Dropdown.Item href="/login">Sign-In / Sign-Up</Dropdown.Item>
                        {/*<Dropdown.Item>Sign Out</Dropdown.Item>*/}
                    </Dropdown>
                </div>
            </Navbar>

            {/*<Modal show={openFavoriteModal} size="md" onClose={onCloseFavoriteModal} popup>*/}
            {/*    <Modal.Header>*/}
            {/*        <BusinessCard />*/}
            {/*    </Modal.Header>*/}
            {/*</Modal>*/}

            {/*Settings Modal*/}
            <Modal dismissible show={openSettingsModal} size="md" onClose={onCloseSettingsModal} popup>
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

            {/*Sign In Modal*/}
            {/*<Modal show={openSignInModal} size="md" onClose={onCloseSignInModal}*/}
            {/*       popup>*/}
            {/*    <Modal.Header className={"bg-orange-200"}>Sign In</Modal.Header>*/}
            {/*    <Modal.Body className={"bg-red-700"}>*/}
            {/*        <SignInForm />*/}
            {/*    </Modal.Body>*/}
            {/*</Modal>*/}

            {/* Sign Up Modal */}
            {/*<Modal show={openSignUpModal} size="md" onClose={onCloseSignUpModal} popup>*/}
            {/*    <Modal.Header />*/}
            {/*    <Modal.Body>*/}
            {/*        <SignUpForm />*/}
            {/*    </Modal.Body>*/}
            {/*</Modal>*/}

        </>
    );
}