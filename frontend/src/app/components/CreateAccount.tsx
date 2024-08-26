
"use client";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useRef, useState } from "react";

export function Register() {
    const [openModal, setOpenRegister] = useState(false);
    const emailInputRef = useRef<HTMLInputElement>(null);

    return (
        <>
            <Button onClick={() => setOpenRegister(true)}>Toggle modal</Button>
            <Modal show={openModal} size="md" popup onClose={() => setOpenRegister(false)} initialFocus={emailInputRef}>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Create an Account</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Your email"/>
                            </div>
                            <TextInput id="email" ref={emailInputRef} placeholder="name@company.com" required/>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" value="Your password"/>
                            </div>
                            <TextInput id="password" type="password" required/>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" value="Retype password"/>
                            </div>
                            <TextInput id="password" type="password" required/>
                        </div>
                        <div className="w-full">
                            <Button>Create Account</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
