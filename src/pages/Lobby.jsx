import { Link } from "react-router-dom";
import MobileNavbar from "../components/Navbars/MobileNavbar";
import { useState } from "react";
import DesktopNavbar from "../components/Navbars/DesktopNavbar";


function Lobby(props)
{
    const [menuOpened, setMenuOpened] = useState(false);

    return <div className="flex flex-col w-full h-full p-5 fadeIn">
        <div className="flex w-full h-fit p-2">
            <Link className="text-white text-3xl font-bold xl:text-5xl">Zelonax</Link>
            <button className="ml-auto my-auto h-8 w-8 xl:hidden" onClick={ (e) => { setMenuOpened(!menuOpened) } }>
                <img
                    className="relative w-full h-full"
                    src="/icons/menu.svg"
                />
            </button>
            <DesktopNavbar/>
        </div>
        <div className="relative h-full w-full mt-3">
            { props.children }
        </div>
        <MobileNavbar isMenuOpened = { menuOpened }/>
    </div>
}

export default Lobby;