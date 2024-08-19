'use client'

import React from "react";
import { Card } from "flowbite-react";
import Image from "next/image";

export default function () {
    return (
        <>
            <div className='flex'>
                <div>
                    <Card
                        className="max-w-sm h-[calc(100lvh-70px)]"
                        renderImage={() => <Image width={500} height={500} src="/images/blog/image-1.jpg"
                                                  alt="image 1"/>}
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
                            chronological
                            order.
                        </p>
                    </Card>
                </div>
                <div className='block mx-auto'>
                    <h2 className='block'>Tony's Pizzeria</h2>
                    <p className='text-6xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam animi consequatur doloremque eum ex explicabo incidunt magni maiores maxime officia, perspiciatis placeat totam? Aperiam dolorem eos inventore magnam quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam animi consequatur doloremque eum ex explicabo incidunt magni maiores maxime officia, perspiciatis placeat totam? Aperiam dolorem eos inventore magnam quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam animi consequatur doloremque eum ex explicabo incidunt magni maiores maxime officia, perspiciatis placeat totam? Aperiam dolorem eos inventore magnam quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam animi consequatur doloremque eum ex explicabo incidunt magni maiores maxime officia, perspiciatis placeat totam? Aperiam dolorem eos inventore magnam quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam animi consequatur doloremque eum ex explicabo incidunt magni maiores maxime officia, perspiciatis placeat totam? Aperiam dolorem eos inventore magnam quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam animi consequatur doloremque eum ex explicabo incidunt magni maiores maxime officia, perspiciatis placeat totam? Aperiam dolorem eos inventore magnam quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam animi consequatur doloremque eum ex explicabo incidunt magni maiores maxime officia, perspiciatis placeat totam? Aperiam dolorem eos inventore magnam quas.</p>
                </div>
            </div>
        </>
    )
}