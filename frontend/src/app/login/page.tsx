
"use client";
import React from 'react';
import {SignUpForm} from "@/app/login/SignUpForm";
import {SignInForm} from "@/app/login/SignInForm";


// export default function() {
//     return (
//         <>
//             <div
//                 className="flex flex-col justify-evenly items-center md:flex-row my-12 md:my-auto md:py-20 md:justify-around gap-12 md:gap-0">
//
//
//                 <div>
//                     <div>
//                         <SignInForm />
//                     </div>
//                 </div>
//
//                 <div>
//                     <p>or</p>
//                 </div>
//
//                 <div>
//                     <SignUpForm />
//                 </div>
//
//             </div>
//         </>
//     );
// }


const Page = () => {
    return (
        <div className="flex justify-center items-center min-h-screen mt-20">
            <div className="flex space-x-4 w-full max-w-4xl">
                <div className="flex-1 bg-red-700 p-4 rounded-lg flex">

                    <div className="bg-white p-6 rounded-lg shadow-lg w-full min-h-[400px]">
                    <h1 className="text-white items-center font-bold">Please Sign-In Below</h1>
                        <SignInForm />
                    </div>
                </div>
                <div className="flex-1 bg-red-700 p-4 rounded-lg flex">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full min-h-[400px]">
                        <h1 className="text-black text-center items-center font-bold mb-20">Please Create a New Account Below</h1>
                        <SignUpForm/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Page;
