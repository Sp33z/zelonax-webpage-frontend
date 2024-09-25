import { useState } from "react";
import { Link } from "react-router-dom";

function MobileNavbar(props)
{   
    let currentPage = window.location.pathname;
    let isMenuOpened = props.isMenuOpened;

    return <div className = {"absolute top-0 left-0 h-full w-3/4 bg-gray-400 md:hidden shadow-md shadow-white transition duration-700 " + (isMenuOpened ? "": "-translate-x-full")}>
        <div className="flex flex-col h-full w-full py-8 px-4">
            <Link className="w-fit h-fit text-3xl font-bold">Zelonax</Link>
            <div className="flex flex-col my-auto">
                <Link className= { "bg-black text-white p-3 my-1 font-semibold transition duration-300 rounded-xl hover:opacity-100 " + (currentPage == "/" ? "": "opacity-50") }>Home</Link>
                <Link className= { "bg-black text-white p-3 my-1 font-semibold transition duration-300 rounded-xl hover:opacity-100 " + (currentPage == "Services" ? "": "opacity-50") }>Services</Link>
                <Link className= { "bg-black text-white p-3 my-1 font-semibold transition duration-300 rounded-xl hover:opacity-100 " + (currentPage == "Services" ? "": "opacity-50") }>Fleet</Link>
                <Link className= { "bg-black text-white p-3 my-1 font-semibold transition duration-300 rounded-xl hover:opacity-100 " + (currentPage == "Services" ? "": "opacity-50") }>Request a Quote</Link>
                <Link className= { "bg-black text-white p-3 my-1 font-semibold transition duration-300 rounded-xl hover:opacity-100 " + (currentPage == "Services" ? "": "opacity-50") }>About Us</Link>
                <Link className= { "bg-black text-white p-3 my-1 font-semibold transition duration-300 rounded-xl hover:opacity-100 " + (currentPage == "Services" ? "": "opacity-50") }>Careers</Link>
                <Link className= { "bg-black text-white p-3 my-1 font-semibold transition duration-300 rounded-xl hover:opacity-100 " + (currentPage == "Services" ? "": "opacity-50") }>News</Link>
                <Link className= { "bg-black text-white p-3 my-1 font-semibold transition duration-300 rounded-xl hover:opacity-100 " + (currentPage == "Services" ? "": "opacity-50") }>Our Partners</Link>
            </div>
            <p className="mt-auto text-sm">All rights resered. © 2024 Zelonax.</p>
        </div>
    </div>
}

export default MobileNavbar;