
'use client'

import {BusinessCard} from "@/app/components/BusinessCard";
import {Card} from "flowbite-react";

export function Section() {
    return (
        <Card className="">
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white text-center">Pizza</h5>

            <div className="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                <div className="grid grid-cols-3 gap-4 ">
                    <BusinessCard/>
                    <BusinessCard/>
                    <BusinessCard/>
                </div>
            </div>
        </Card>
    )
}