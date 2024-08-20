
"use client";

import { Card } from "flowbite-react";
import Image from "next/image";
import ReactCardFlip from "react-card-flip";
import {useState} from "react";

export function MenuItemCard () {
    const [isFlipped, setIsFlipped] = useState(false);

     function flipCard(){
         setIsFlipped (!isFlipped);
     }

    return (
        <Card
            className="min-w-[16rem] max-w-[16rem] h-[22rem] box-border mx-auto container"
            renderImage={() => <Image width={150} height={200} src="/images/blog/image-1.jpg" alt="image 1" />}>

            <ReactCardFlip flipDirection={'horizontal'} isFlipped={isFlipped}>
                <div onClick={flipCard}>
                    <h5 className="card text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Eggplant Parmesan
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">$99.99</p>
                </div>

                <div onClick={flipCard}>
                    <h2 className='card card-back'>Back</h2>
                    <p>Just a normal eggplant parm, with gmo heavy panko.</p>
                </div>
            </ReactCardFlip>
        </Card>
    );
}
