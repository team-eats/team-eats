
'use client'

import {BusinessCard} from "@/app/components/BusinessCard";
import {Card} from "flowbite-react";

export function Section() {
    return (
        <section className="mx-full my-5 mb-16 ">
            <div>
                <h5 className="text-3xl font-bold text-gray-900 text-center my-9 overflow-x-auto">Pizza</h5>
            </div>

            <div className="bg-red-700 p-3 shadow-lg overflow-x-auto flex flex-row gap-3 mx-auto h-[24rem]">
                <BusinessCard />
                <BusinessCard />
            </div>
        </section>
    )
}
