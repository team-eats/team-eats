'use client'
import {Dropdown} from "flowbite-react";


export function Navigation() {
    return (

        <>


            {/*<nav className="text-red-950 dark:text-yellow-300">*/}
            {/*    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">*/}
            {/*        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">*/}
            {/*            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"/>*/}
            {/*            <span*/}
            {/*                className="self-center text-5xl font-semibold dark:text-yellow-400">Team Eats</span>*/}
            {/*        </a>*/}
            {/*        <div className="">*/}
            {/*            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search"*/}
            {/*                    aria-expanded="false"*/}
            {/*                    className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">*/}
            {/*                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"*/}
            {/*                     viewBox="0 0 20 20">*/}
            {/*                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"*/}
            {/*                          strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>*/}
            {/*                </svg>*/}
            {/*                <span className="sr-only">Search</span>*/}
            {/*            </button>*/}
            {/*            <div className="relative hidden md:block">*/}
            {/*                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">*/}
            {/*                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"*/}
            {/*                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">*/}
            {/*                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"*/}
            {/*                              strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>*/}
            {/*                    </svg>*/}
            {/*                    <span className="sr-only">Search icon</span>*/}
            {/*                </div>*/}
            {/*                <input type="text" id="search-navbar"*/}
            {/*                       className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"*/}
            {/*                       placeholder="Search..."/>*/}
            {/*            </div>*/}
            {/*            <button data-collapse-toggle="navbar-search" type="button"*/}
            {/*                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"*/}
            {/*                    aria-controls="navbar-search" aria-expanded="false">*/}
            {/*                <span className="sr-only">Open main menu</span>*/}
            {/*                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"*/}
            {/*                     viewBox="0 0 17 14">*/}
            {/*                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"*/}
            {/*                          strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>*/}
            {/*                </svg>*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"*/}
            {/*             id="navbar-search">*/}
            {/*            <div className="relative mt-3 md:hidden">*/}
            {/*                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">*/}
            {/*                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"*/}
            {/*                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">*/}
            {/*                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"*/}
            {/*                              strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>*/}
            {/*                    </svg>*/}
            {/*                </div>*/}
            {/*                <input type="text" id="search-navbar"*/}
            {/*                       className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"*/}
            {/*                       placeholder="Search..."/>*/}
            {/*            </div>*/}
            {/*            <ul className="flex flex-row p-4 md:p-0 mt-4 font-medium rounded-lg items-center md:space-x-8 rtl:space-x-reverse md:flex-row text-3xl lg:dark:bg-orange-600  md:dark:bg-orange-600 dark:bg-orange-600 ">*/}
            {/*                <li>*/}
            {/*                    <a href="#"*/}
            {/*                       className="block px-3 rounded md:bg-transparent md:text-red-950 md:p-0 md:dark:text-yellow-300"*/}
            {/*                       aria-current="page">Home</a>*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    <a href="#"*/}
            {/*                       className="block px-3 text-red-950 rounded hover:bg-orange-500 md:hover:bg-transparent md:hover:text-red-950 md:p-0 md:dark:hover:text-yellow-500 dark:text-yellow-300 dark:hover:bg-orange-800 dark:hover:text-yellow-300 md:dark:hover:bg-transparent dark:border-gray-700">About*/}
            {/*                        us</a>*/}
            {/*                </li>*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</nav>*/}


            <nav>
                <div className="flex items-center">
                    <a href="/"></a>
                    <img src="/placeholder-logo.png" className="h-12 hover:border-red-800" alt="placeholder logo"/>
                    <span className="text-5xl text-black hover:text-red-950 hover:rounded-xl hover:border-red-800">Team Eats</span>


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


                    <ul className="flex items-center justify-between">
                        <li>
                            <a href="/" className="hover:text-red-950 text-2xl px-2">About us</a>
                        </li>
                        <li>
                            <button type="button"
                                    className="px-4 py-3 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white border border-black hover:bg-orange-800 hover:text-red-950 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Submit
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
                            <span className="block text-sm">Account Options</span>
                            <span className="block truncate text-sm font-medium">Team Eats Options</span>
                        </Dropdown.Header>
                        <Dropdown.Item>New listing form</Dropdown.Item>
                        <Dropdown.Item>Favorites</Dropdown.Item>
                        <Dropdown.Item>About us</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Sign in/out</Dropdown.Item>
                    </Dropdown>



                </div>

            </nav>

        </>

    )

}