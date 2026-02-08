import { useAuth } from "./AuthContext";
import {SidebarUser, SidebarAdmin} from "./components/sidebar";
import {OutletUser, OutletAdmin} from "./components/outlet";

export function SessionPeserta () {
    return(
        <div className="flex h-screen w-screen bg-gradient-to-br from-cyan-50 to-blue-50">
            <SidebarUser/>
            <div className="flex-1 flex flex-col">
                <div className="h-14 flex items-center px-4 border-b border-blue-200 bg-white backdrop-blur-md shadow-sm sticky top-0 z-10"></div>
                <main className="flex-1 overflow-y-auto">
                   <OutletUser/>
                </main>
            </div>
        </div>
    )
}

export function SessionAdmin () {
    return(
        <div className="flex h-screen w-screen bg-gradient-to-br from-cyan-50 to-blue-50">
            <SidebarAdmin/>
            <div className="flex-1 flex flex-col">
                <div className="h-14 flex items-center px-4 border-b border-blue-200 bg-white backdrop-blur-md shadow-sm sticky top-0 z-10"></div>
                <main className="flex-1 overflow-y-auto ">
                   <OutletAdmin/>
                </main>
            </div>
        </div>
    )
}