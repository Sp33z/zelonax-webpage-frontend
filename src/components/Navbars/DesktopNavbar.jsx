import { Link } from "react-router-dom";

function DesktopNavbar()
{
    let currentPage = window.location.pathname;

    return <div className="hidden xl:flex mx-28 w-full h-full">
        <Link className= { "relative p-1 overflow-hidden m-auto text-white font-semibold text-xl transition duration-500 border-white " + (currentPage == "/" ? "opacity-100 border-b-4": "menuButton opacity-50" )} >Home</Link>
        <Link className= { "relative p-1 overflow-hidden m-auto text-white font-semibold text-xl transition duration-500 border-white " + (currentPage == "Services" ? "opacity-100 border-b-4": "menuButton opacity-50" )} >Services</Link>
        <Link className= { "relative p-1 overflow-hidden m-auto text-white font-semibold text-xl transition duration-500 border-white " + (currentPage == "Fleet" ? "opacity-100 border-b-4": "menuButton opacity-50" )} >Fleet</Link>
        <Link className= { "relative p-1 overflow-hidden m-auto text-white font-semibold text-xl transition duration-500 border-white " + (currentPage == "Request a Quote" ? "opacity-100 border-b-4": "menuButton opacity-50" )} >Request a Quote</Link>
        <Link className= { "relative p-1 overflow-hidden m-auto text-white font-semibold text-xl transition duration-500 border-white " + (currentPage == "About Us" ? "opacity-100 border-b-4": "menuButton opacity-50" )} >About Us</Link>
        <Link className= { "relative p-1 overflow-hidden m-auto text-white font-semibold text-xl transition duration-500 border-white " + (currentPage == "Careers" ? "opacity-100 border-b-4": "menuButton opacity-50" )} >Careers</Link>
        <Link className= { "relative p-1 overflow-hidden m-auto text-white font-semibold text-xl transition duration-500 border-white " + (currentPage == "News" ? "opacity-100 border-b-4": "menuButton opacity-50" )} >News</Link>
        <Link className= { "relative p-1 overflow-hidden m-auto text-white font-semibold text-xl transition duration-500 border-white " + (currentPage == "Our Partners" ? "opacity-100 border-b-4": "menuButton opacity-50" )} >Our Partners</Link>
    </div>
}


export default DesktopNavbar;