import {Contact,} from "@/app/about-us/form";
import { FiPhone } from "react-icons/fi";
import {MdOutlineMail} from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

export default function() {
    return (

        <>
             <h1 className={"text-center text-6xl mt-20"}>About Team Eats</h1>


     <div className={"container mx-auto border-2 border-gray-300 shadow-md px-10 py-14 mt-20"}>


                  <p>Well, the way they make shows is, they make one show. That show's called a pilot. Then they
                       show that show to the people who make shows, and on the strength of that one show they
                       decide if they're going to make more shows. Some pilots get picked and become television
                       programs. Some don't, become nothing. She starred in one of the ones that became
                       nothing. </p> <br/>

                  <p>Normally, both your grasses would be dead as ducking fried chicken, but you happen to pull this
                       sit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I
                       can't give you this case, it don't belong to me. Besides, I've already been through too much
                       sit this morning over this case to hand it over to your dumb bum. </p> <br/>
                  <p>
                       Well, the way they make shows is, they make one show. That show's called a pilot. Then they
                       show that show to the people who make shows, and on the strength of that one show they
                       decide if they're going to make more shows. Some pilots get picked and become television
                       programs. Some don't, become nothing. She starred in one of the ones that became
                       nothing.</p> <br/>
                  <p>
                       Normally, both your grasses would be dead as ducking fried chicken, but you happen to pull this
                       sit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I
                       can't give you this case, it don't belong to me. Besides, I've already been through too much
                       sit this morning over this case to hand it over to your dumb bum.</p>  <br/>


             </div>
<div className={"container mx-auto mt-10 mb-10 grid grid-cols-1 md:grid-cols-2 gap-8 shadow-md border border-gray-300"}>

    <div>
<h2 className={"text-3xl mt-5 text-center"}>How to Contact Us</h2>
<p className={"text-center"}>Well, the way they make shows is, they make one show. That show's called a pilot. <br/>
        Well, the way they make shows is, they make one show. That show's called a pilot.</p>

        <div className={"flex mt-10 ml-20"}>
        <FiPhone className={"border border-black h-10 w-10 mt-1 mr-5 bg-gray-300"}/>
            <p>Call us<br/>
            888-888-8888</p>
        </div>

        <div className={"flex mt-10 ml-20"}>
            <MdOutlineMail className={"border border-black h-10 w-10 mt-1 mr-5 bg-gray-300"}/>
            <p>E-mail us <br/>
            Team Eats@somemail.com</p>
        </div>

        <div>
            <h2 className={"text-2xl text-center mt-5"}>Follow us</h2>
           <div className={"flex items-center justify-center mt-5"}>
            <FaFacebookSquare />
            <FaInstagram />
            <FaLinkedin />
            <CiYoutube />
        </div>

        </div>



    </div>

 <div>
    <Contact/>
</div>

</div>


        </>

    )

}