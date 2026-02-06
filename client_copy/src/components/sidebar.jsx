import {HiChevronRight, HiChevronDown, HiLogout, HiHome, HiArchive, HiOutlineUsers, HiPhone, HiOutlineMenu} from "react-icons/hi";
import {HiUser, HiPencilAlt, HiDotsHorizontal} from "react-icons/hi";
import Logo from '../assets/garsafa_aranavia.webp'
import {NavLink, useLocation} from "react-router";
import {useState} from 'react'
import {  useAuth } from "../AuthContext";

export function SidebarUser () {
    const [statusButton, setstatusButton] = useState(null) 
    const [statusSubButton, setstatusSubButton] = useState(null)
    const {logout} =  useAuth()
    const location = useLocation();
    const basePath = location.pathname.split('/').slice(0, 2).join('/');
    const [statusSidebar, setstatusSidebar] = useState(false)

    const menuItems = [
    {   title: "Home", 
        icon: <HiHome size={20} />, 
        href: "/", 
        hasSubmenu: false },
    {   title: "Dashboard", 
        icon: <HiArchive size={20} />,
        href: null,  
        hasSubmenu: true, 
        subMenu: [
            {nama : 'Overview', logo : <HiUser/> , link : 'dashboard/overview'},
            {nama : 'Edit Profil', logo : <HiPencilAlt/>,  link : 'dashboard/editprofil'},
            // {nama : 'Ubah Password', logo : <HiDotsHorizontal/>,  link : 'dashboard/ubahpassword'}
        ]
    },
    {   title: "Team", 
        icon: <HiOutlineUsers size={20} />, 
        href: null, 
        hasSubmenu: true,
        subMenu: [
            {nama : 'Lomba', logo : <HiUser/> , link : 'pendaftaran/lomba'},
            {nama : 'Daftar', logo : <HiPencilAlt/>,  link : 'pendaftaran/daftar'},
        ] 
    },
    {   title: "Hubungi Kami", 
        icon: <HiPhone size={20} />,
        href: null,  
        hasSubmenu: false },
    ];
    return (
        <>
            <HiOutlineMenu 
                onClick={() => setstatusSidebar(!statusSidebar)}
                className="absolute block md:hidden text-4xl inset-0 top-2 left-2 z-20 "/>
            <div className={`group peer ${statusSidebar ? 'block' : 'hidden'} md:block md:w-72 h-screen overflow-hidden`}>
                <div className="md:hidden absolute inset-0 bg-black opacity-50 backdrop-blur-md z-20" onClick={() => setstatusSidebar(!statusSidebar)}></div>
                <div className="block fixed inset-y-0 left-0 z-20 w-2/3 md:w-72 transition-all duration-200 ease-linear bg-gradient-to-b from-primary via-secondary to-accent text-white shadow-2xl border-r-0 flex flex-col">
                    {/* Header / Logo */}
                    <div className="flex flex-col gap-2 p-2 px-6 py-4 mt-4">
                    <img alt="Techcomfest" src={Logo} className="w-full h-auto" />
                    </div>

                    {/* Navigation Content */}
                    <nav className="flex flex-col flex-1 py-4 overflow-y-auto">
                    <ul className="space-y-1 px-3 flex-1">
                        {menuItems.map((item, index) => (
                        <li key={index}>
                            <button
                            className={`
                                relative w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-left
                                ${statusButton === index
                                ? "bg-gradient-to-r from-secondary/60 to-accent/60" 
                                : "hover:bg-gradient-to-r hover:from-secondary/40 hover:to-accent/40 "
                                }
                            `}
                            onClick={() => setstatusButton((prev) => prev === index ? null : index)}
                            >
                            <NavLink to={item.href && item.href} className="absolute inset-0"> </NavLink>
                            <div className="flex items-center gap-3 text-white ">
                                {item.icon}
                                <span className="font-medium">{item.title}</span>
                            </div>
                            
                            {item.hasSubmenu && (
                                <div className="flex items-center gap-1 text-white">
                                {statusButton === index ?  <HiChevronDown size={16}/> : <HiChevronRight size={16} />}
                                </div>
                            )}
                            </button>
                            {item.hasSubmenu && item.subMenu && (
                                <ul className={`${statusButton === index ? "" : "hidden"} ml-6 mt-2 space-y-1 border-l-2 border-highlight/30 pl-4 overflow-hidden height-auto`}>
                                    {item.hasSubmenu && item.subMenu.map((itemChild, indexChild) => (
                                        <li className="" key={indexChild}>
                                            <NavLink 
                                            to={`${basePath}/${itemChild.link}`}
                                            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200
                                            ${statusSubButton === indexChild ? 'bg-primary/60' : 'hover:bg-primary/30'}`}
                                            onClick={() => setstatusSubButton(indexChild)}>
                                                {itemChild.logo}
                                                {itemChild.nama}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>

                        ))}
                    </ul>

                    {/* Footer / Sign Out */}
                    <div className="px-3 mt-auto mb-4">
                        <a 
                        onClick={() => logout()} 
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-left bg-red-600 hover:bg-red-500/80 text-white"
                        >
                        <HiLogout size={20} className="text-red-200 group-hover:text-white" />
                            <span className="font-medium">Sign Out</span>
                        </a>
                    </div>
                    </nav>
                </div>
            </div>
        </>
        
    )
}

export function SidebarAdmin () {
    const [statusButton, setstatusButton] = useState(null) 
    const [statusSubButton, setstatusSubButton] = useState(null)
    const {logout} =  useAuth()
    const location = useLocation();
    const basePath = location.pathname.split('/').slice(0, 2).join('/');
    const [statusSidebar, setstatusSidebar] = useState(false)

    const menuItems = [
    {   title: "Event", 
        icon: <HiHome size={20} />, 
        href: "/session/dashboard/overview", 
        hasSubmenu: false },
    ];
    return (
        <>
            <HiOutlineMenu 
                onClick={() => setstatusSidebar(!statusSidebar)}
                className="absolute block md:hidden text-4xl inset-0 top-2 left-2 z-20 "/>
            <div className={`group peer ${statusSidebar ? 'block' : 'hidden'} md:block md:w-72 h-screen overflow-hidden`}>
                <div className="md:hidden absolute inset-0 bg-black opacity-50 backdrop-blur-md z-20" onClick={() => setstatusSidebar(!statusSidebar)}></div>
                <div className="block fixed inset-y-0 left-0 z-20 w-2/3 md:w-72 transition-all duration-200 ease-linear bg-gradient-to-b from-primary via-secondary to-accent text-white shadow-2xl border-r-0 flex flex-col">
                    {/* Header / Logo */}
                    <div className="flex flex-col gap-2 p-2 px-6 py-4 mt-4">
                    <img alt="Techcomfest" src={Logo} className="w-full h-auto" />
                    </div>

                    {/* Navigation Content */}
                    <nav className="flex flex-col flex-1 py-4 overflow-y-auto">
                    <ul className="space-y-1 px-3 flex-1">
                        {menuItems.map((item, index) => (
                        <li key={index}>
                            <button
                            className={`
                                relative w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-left
                                ${statusButton === index
                                ? "bg-gradient-to-r from-secondary/60 to-accent/60" 
                                : "hover:bg-gradient-to-r hover:from-secondary/40 hover:to-accent/40 "
                                }
                            `}
                            onClick={() => setstatusButton((prev) => prev === index ? null : index)}
                            >
                            <NavLink to={item.href && item.href} className="absolute inset-0"> </NavLink>
                            <div className="flex items-center gap-3 text-white ">
                                {item.icon}
                                <span className="font-medium">{item.title}</span>
                            </div>
                            
                            {item.hasSubmenu && (
                                <div className="flex items-center gap-1 text-white">
                                {statusButton === index ?  <HiChevronDown size={16}/> : <HiChevronRight size={16} />}
                                </div>
                            )}
                            </button>
                            {item.hasSubmenu && item.subMenu && (
                                <ul className={`${statusButton === index ? "" : "hidden"} ml-6 mt-2 space-y-1 border-l-2 border-highlight/30 pl-4 overflow-hidden height-auto`}>
                                    {item.hasSubmenu && item.subMenu.map((itemChild, indexChild) => (
                                        <li className="" key={indexChild}>
                                            <NavLink 
                                            to={`${basePath}/${itemChild.link}`}
                                            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200
                                            ${statusSubButton === indexChild ? 'bg-primary/60' : 'hover:bg-primary/30'}`}
                                            onClick={() => setstatusSubButton(indexChild)}>
                                                {itemChild.logo}
                                                {itemChild.nama}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>

                        ))}
                    </ul>

                    {/* Footer / Sign Out */}
                    <div className="px-3 mt-auto mb-4">
                        <a 
                        onClick={() => logout()} 
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-left bg-red-600 hover:bg-red-500/80 text-white"
                        >
                        <HiLogout size={20} className="text-red-200 group-hover:text-white" />
                            <span className="font-medium">Sign Out</span>
                        </a>
                    </div>
                    </nav>
                </div>
            </div>
        </>
        
    )
}
