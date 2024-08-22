"use client";

import { Label, TextInput, Textarea,} from "flowbite-react";

export function Contact() {
    return (
        <div className="flex max-w-lg flex-col gap-4 my-5">
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
                <button className={"mt-5 px-10 border-2 border-black bg-blue-500 text-white rounded-lg hover:bg-blue-700"} type={"submit"}>Submit</button>
            </div>
        </div>
    );
}




