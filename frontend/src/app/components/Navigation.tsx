export function Navigation() {
    return (

        <>
            <section className="">
                <div className="border-2 border-red-300 bg-red-50 flex justify-between">
                    <div className="flex">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="p-2" alt="Flowbite Logo"/>
                        <input type="text" placeholder="Search Eats..." className="px-8 py-2 rounded-full"/>
                        <button className="px-2">Search Bar</button>
                    </div>
                    <div className="flex">
                        <button className="p-2">Home</button>
                        <button className="p-2">About us</button>
                        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg
                            className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="m1 1 4 4 4-4"/>
                        </svg></button>
                        <div id="dropdown"
                             className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <ul className="py-2 text-sm text-stone-700 dark:text-gray-400"
                                aria-labelledby="dropdownLargeButton">
                                <li>
                                    <a href="#"
                                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Owned Business</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Favorites</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">login/create account</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}
