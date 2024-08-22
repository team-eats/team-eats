
"use client";

import { Card } from "flowbite-react";
import Image from "next/image";

export function BusinessCard() {
    return (
        <Card
            className="min-w-[16rem] max-w-[16rem] h-[22rem] box-border mx-auto container"
            renderImage={() => <Image width={150} height={200} src="/images/blog/image-1.jpg" alt="image 1" />}>
            <div>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400"></p>
            </div>
        </Card>
    );
}
