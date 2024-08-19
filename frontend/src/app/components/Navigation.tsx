'use client'

import {Avatar, Dropdown, Navbar} from "flowbite-react";


export function Navigation() {
    return (

        <>
            <nav>
                <div className="flex items-center justify-evenly">
                    <a href='..' className='flex'><img src="/placeholder-logo.png" className="h-12 hover:border-red-800" alt="placeholder logo"/>
                        <span className="text-5xl text-black hover:text-red-950 hover:rounded-xl hover:border-red-800">Team Eats</span></a>
                    <form className="flex items-center max-w-sm px-8 py-4">
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
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:border-red-800 focus:ring-red-800 focus:border-red-800 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 px-6"
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

                    <div className="flex justify-items-end">
                        <ul className="hidden md:flex items-center">
                            <li>
                                <a href="/" className="hover:text-red-950 text-2xl px-2">About us</a>
                            </li>
                            <li>
                                <button type="button"
                                        className="px-4 py-3 text-sm font-medium text-gray-900 focus:outline-none bg-white border border-black hover:bg-orange-800 hover:text-red-950 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Submit
                                    a listing
                                </button>
                            </li>
                        </ul>
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
                            <Dropdown.Item>Favorites</Dropdown.Item>
                            <Dropdown.Item>Create Account</Dropdown.Item>
                            <Dropdown.Item className='block xl:hidden text-left'>About Us</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item>Sign in/out</Dropdown.Item>
                        </Dropdown>
                    </div>
                </div>
            </nav>

        </>

    )

}