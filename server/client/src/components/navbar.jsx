import { useState} from "react";
import { HiUser, HiMenu, HiViewGrid } from "react-icons/hi";
import { Link as Scrolllink } from "react-scroll";
import { Link as Routerlink } from "react-router";

import {  useAuth } from "../AuthContext";
import icedStalagmite from '../assets/ice-stalagmite.webp'
import icedStalagmiteBig from '../assets/ice-stalagmite-2.webp'
import miladLogo from '../assets/Logo_milad.webp'

const NavItem = ({ to, children }) => {
    const navClass = "hover:text-highlight transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-secondary hover:after:w-full after:transition-all cursor-pointer list-none";
    
    return (
        <li className={navClass}>
        <Scrolllink 
            to={to} 
            href={`#${to}`}
            smooth={true} 
            duration={500} 
            offset={-70}
            className="block w-full h-full"
        >
            {children}
        </Scrolllink>
        </li>
    );
};
function Navbar () {
    const {user} = useAuth()
    const [navigation, setNavigation] = useState(false)

    return (
        <header className="fixed h-16 w-screen z-30 "> 
            <div className={` absolute flex inset-0 bg-primary-light pointer-events-none `}>
                <div className="absolute inset-0 shadow-md -z-[3]"></div>
                <div className="object-fit absolute inset-0 -left-10 md:-left-12 top-[50%] md:top-[40%] -z-[1]">
                    <img src={icedStalagmiteBig} alt="" className="w-24 md:w-28"/>
                </div>
                <div className="object-fit absolute inset-0 -left-1 top-[50%] md:top-[40%] -z-[2]">
                    <img src={icedStalagmite} alt="" className="w-44 md:w-50"/>
                </div>
            </div>
            <nav className="flex w-full h-full justify-between px-6  z-20">
                <div className="relative h-full w-16 z-20">
                    <img src={miladLogo} alt="logo bertemakan Garsafa Aranavia dalam peringatan milad ke-9 MAN 2 Kota Kediri" className="w-full h-full object-contain " />
                </div>
                <button 
                        onClick={() => setNavigation(!navigation)}
                        className="md:hidden outline-2 outline-solid outline-highlight/30 w-10 flex justify-center items-center z-21 py-3">
                    <HiMenu className="text-4xl "/>
                </button>
                <div className={`${navigation === true ? "flex flex-col gap-6 gap-6 absolute top-16 left-0 backdrop-blur-md p-4 w-full text-white" : "hidden"} md:flex md:gap-6 justify-center items-start md:items-center `}>
                    <ul className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-center  ">
                        <NavItem to="hero">Beranda</NavItem>
                        <NavItem to="about">Tentang</NavItem>
                        <NavItem to="category">Kategori</NavItem>
                        <NavItem to="gallery">Gallery</NavItem>
                        <NavItem to="faq">FAQ</NavItem>
                    </ul>
                        <Routerlink to={user ? 'session/dashboard/overview':'/auth/login'} className="px-4 py-2 bg-highlight flex justify-center items-center gap-2 rounded-full z-21">
                            {user ? <HiViewGrid className="text-2xl"/> : <HiUser className="text-2xl"/>}
                            
                            {user ? <span className="text-black">DASHBOARD</span> : <span className="text-black">LOGIN</span>}
                        </Routerlink>
                </div>
            </nav>
        </header>
    )
}

export default Navbar