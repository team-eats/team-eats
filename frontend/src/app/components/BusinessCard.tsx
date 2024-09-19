
"use client";

import { Card } from "flowbite-react";
import Image from "next/image";
import ReactCardFlip from "react-card-flip";
import React, {useState} from "react";
import {Business} from "@/app/utils/models/business/business.validator";
import Link from "next/link";

type businessCardProps = {
    business: Business
}

export function BusinessCard(props: businessCardProps) {
    const business = props.business;
    const [isFlipped, setIsFlipped] = useState(false);



    function flipCard(){
        setIsFlipped (!isFlipped);
    }

    return (
        <Card
            className="min-w-[16rem] max-w-[16rem] h-[22rem] box-border mx-auto container">
            <ReactCardFlip flipDirection={'horizontal'} isFlipped={isFlipped}>
                <div className='overflow-hidden' onClick={flipCard}>
                    <img className='w-full h-48 object-cover' src={business.businessPhoto?.toString()} alt={''}/>
                    <h5 className="card text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {business.businessName}
                    </h5>
                </div>

                <div onClick={flipCard}>
                    <h2 className='card card-back'></h2>
                    <p>{business.businessBio}</p>
                </div>
            </ReactCardFlip>
            <p className="font-normal text-gray-700 dark:text-gray-400"><a
                href={`/business-listing/${business.businessName}`}>View Menu</a></p>
        </Card>
    );
}
