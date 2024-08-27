'use client'

import { Carousel } from "flowbite-react";
import React from "react";
import {MenuSection} from "@/app/components/MenuSection";

export default function () {
    return (
        <>
            <div className='block sm:flex'>
                <div className='hidden sm:flex sm:w-[384px] sm:-top-[0px] sm:fixed sm:h-[94px] text-red-700 bg-red-700 sm:-z-10 sm:border-r-2 sm:border-black select-none'>Filler</div>
                <div className='sm:fixed'>
                    <div className="sm:max-w-sm sm:h-screen sm:border-r-2 sm:border-black bg-red-700">
                        <h2 className='block sm:hidden text-center text-4xl pt-5 underline underline-offset-8'>Tony's Pizzeria</h2>
                        <img src="https://placehold.co/300x300" alt="Placeholder business image"
                             className='mx-auto pt-10 pb-5'/>
                        <p className='text-xl text-gray-950 mx-[42px] my-2'><span className='text-lg'>Address:</span>
                        </p>
                        <p className='text-xl text-gray-950 mx-[42px] my-2'><span
                            className='text-lg'>Phone Number:</span></p>
                        <p className='text-xl text-gray-950 mx-[42px] my-2'><span className='text-lg'>Hours:</span></p>
                        <div className='text-center mt-5'>
                            <h3 className='text-2xl font-bold'>About Tony's Pizzeria</h3>
                            <p className="text-gray-100 mx-[42px] py-5">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolorum
                                exercitationem numquam reiciendis? Debitis, magni, quibusdam. Accusantium animi beatae
                                fuga libero nam officiis quas, quos sequi similique tempore, veniam voluptas. Lorem
                                ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolorum exercitationem
                                numquam reiciendis? Debitis, magni, quibusdam. Accusantium animi beatae fuga libero nam
                                officiis quas, quos sequi similique
                            </p>
                        </div>
                    </div>
                </div>
                <div className='block sm:ml-[384px] px-[5%] sm:max-w-[calc(100lvw-386px)]'>
                    <h2 className='sm:block hidden text-6xl my-10 underline underline-offset-8'>Tony's Pizzeria</h2>
                    <h3 className='text-2xl sm:text-4xl text-center sm:text-left mt-5 underline underline-offset-8'>Menu Items</h3>
                    <MenuSection />
                    <MenuSection />
                    <MenuSection />
                    <MenuSection />
                </div>
            </div>
        </>
    )
}