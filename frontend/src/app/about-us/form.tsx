"use client";

import { Label, TextInput, Textarea} from "flowbite-react";

export function Contact() {
    return (
        <div className="flex max-w-md flex-col gap-4">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="name" value="Name" />
                </div>
                <TextInput id="name" type="text" sizing="sm" />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="number" value="Number" />
                </div>
                <TextInput id="number" type="text" sizing="sm" />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="E-mail" value="E-mail" />
                </div>
                <TextInput id="E-mail" type="text" sizing="sm" />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="message" value="Message" />
                </div>
                <Textarea id="message" placeholder="Your message..." required rows={4} />
            </div>
        </div>
    );
}