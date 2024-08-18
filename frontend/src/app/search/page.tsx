import {BusinessCard} from "@/app/components/BusinessCard";

export default function results(){
    return (
        <>
            <section className={"container mx-auto "}>
                <div>
                    <h1 className={"text-4xl text-center pt-20 my-10"}>Search Results For: <span
                        className={"text-blue-600"}>Example Search</span></h1>

                </div>

                <div className="md:grid-cols-2 xl:grid-cols-4 grid grid-rows-1 gap-8 ">



                        <BusinessCard/>
                        <BusinessCard/>
                        <BusinessCard/>
                        <BusinessCard/>
                    <BusinessCard/>
                    <BusinessCard/>
                    <BusinessCard/>
                    <BusinessCard/>
                    <BusinessCard/>
                    <BusinessCard/>
                    <BusinessCard/>
                    <BusinessCard/>


                    </div>






                {/*<div className={"container mx-auto border border-black py-20 mt-5 "}>*/}
                {/*    hello*/}
                {/*</div>*/}

            </section>


        </>
    )
}



