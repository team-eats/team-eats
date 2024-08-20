'use client'

import { Carousel } from "flowbite-react";
import React from "react";

export default function () {
    return (
        <>
            <div className='flex'>
                <div className='w-[384px] -top-[0px] fixed h-[70px] text-gray-500 bg-gray-500 -z-10 border-r-2 border-black select-none'>Filler</div>
                <div className='fixed'>
                    <div className="max-w-sm h-screen border-r-2 border-black bg-gray-500">
                        <img src="https://placehold.co/300x300" alt="Placeholder business image"
                             className='mx-auto pt-10 pb-5'/>
                        <p className='text-xl text-gray-950 mx-[42px] my-2'><span className='text-lg'>Address:</span></p>
                        <p className='text-xl text-gray-950 mx-[42px] my-2'><span className='text-lg'>Phone Number:</span></p>
                        <p className='text-xl text-gray-950 mx-[42px] my-2'><span className='text-lg'>Hours:</span></p>
                        <div className='text-center mt-5'>
                            <h3 className='text-2xl font-bold'>About Tony's Pizzeria</h3>
                            <p className="text-gray-100 mx-[42px] mt-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolorum exercitationem numquam reiciendis? Debitis, magni, quibusdam. Accusantium animi beatae fuga libero nam officiis quas, quos sequi similique tempore, veniam voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolorum exercitationem numquam reiciendis? Debitis, magni, quibusdam. Accusantium animi beatae fuga libero nam officiis quas, quos sequi similique tempore
                            </p>
                        </div>
                    </div>
                </div>
                <div className='block ml-[384px] px-[5%] max-w-[calc(100lvw-382px)]'>
                    <h2 className='block text-6xl my-10 underline underline-offset-8'>Tony's Pizzeria</h2>
                </div>
            </div>
        </>
    )
}