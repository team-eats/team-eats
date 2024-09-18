
"use client";

import { Card } from "flowbite-react";
import Image from "next/image";
import ReactCardFlip from "react-card-flip";
import React, {useState} from "react";
import {Item} from "@/app/utils/models/items/item.validator";
import Link from "next/link";

type ItemCardProps = {
    item: Item
}



export function MenuItemCard (props: ItemCardProps) {
    const item = props.item
    const [isFlipped, setIsFlipped] = useState(false);

     function flipCard(){
         setIsFlipped (!isFlipped);
     }

    return (
        <Card className="min-w-[16rem] max-w-[16rem] h-[22rem] box-border mx-auto container">
            <ReactCardFlip flipDirection={'horizontal'} isFlipped={isFlipped}>
                <div onClick={flipCard}>
                    <img className='w-60 h-60' src={item.itemPhoto?.toString()} alt={''}/>
                    <h5 className="card text-md font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.itemName}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">${item.itemPrice}</p>
                </div>

                <div onClick={flipCard}>
                    <h2 className='card card-back'></h2>
                    <p>{item.itemDescription}</p>
                </div>
            </ReactCardFlip>
        </Card>
    );
}
