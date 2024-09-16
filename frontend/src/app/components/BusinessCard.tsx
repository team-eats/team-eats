
"use client";


import { Card } from "flowbite-react";
import Image from "next/image";
import ReactCardFlip from "react-card-flip";



import React, {useState} from "react";
import {Business} from "@/app/utils/models/business/business.validator";
import Link from "next/link";




export function BusinessCard({ business }: {business: Business}) {
    const [isFlipped, setIsFlipped] = useState(false);

    function flipCard() {
        setIsFlipped(!isFlipped);
    }

    //Ensure business.businessPhoto is not null or undefined
    const imageUrl = business.businessPhoto || "/images/default.jpg";
    return (
        <Card
            className="min-w-[16rem] max-w-[16rem] h-[22rem] box-border mx-auto container"

            renderImage={() => <Link href={`/business-listing/${business.businessName}`}><Image width={150} height={200} src="/images/blog/image-1.jpg" alt="image 1" /></Link>}>

            <ReactCardFlip flipDirection={'horizontal'} isFlipped={isFlipped}>
                <div onClick={flipCard}>
                    <h5 className="card text-2xl font-bold tracking-tight text-gray-900 dark:text-white">

                        {business.businessName}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Come to {business.businessName}!</p>
                </div>

                <div onClick={flipCard} className="p-4 cursor-pointer">
                    <h2 className="text-xl font-bold dark:text-white">{business.businessName}</h2>
                    <p>{business.businessBio}</p>
                </div>
            </ReactCardFlip>
        </Card>
    );
}

//
// export function BusinessCard(props: businessCardProps) {
//     const business = props.business;
//     const [isFlipped, setIsFlipped] = useState(false);
//
//
//
//     function flipCard(){
//         setIsFlipped (!isFlipped);
//     }
//
//     return (
//         <Card
//             className="min-w-[16rem] max-w-[16rem] h-[22rem] box-border mx-auto container"
//             renderImage={() => <Image width={150} height={200} src="/images/blog/image-1.jpg" alt="image 1" />}>
//
//             <ReactCardFlip flipDirection={'horizontal'} isFlipped={isFlipped}>
//                 <div onClick={flipCard}>
//                     <h5 className="card text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                         {business.businessName}
//                     </h5>
//                     <p className="font-normal text-gray-700 dark:text-gray-400">Come to Tony's!</p>
//                 </div>
//
//                 <div onClick={flipCard}>
//                     <h2 className='card card-back'></h2>
//                     <p>{business.businessBio}</p>
//                 </div>
//             </ReactCardFlip>
//         </Card>
//     );
// }
