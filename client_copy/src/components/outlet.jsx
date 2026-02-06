import { Route, Routes } from "react-router";

import Overview from "./session_user/overview";
import EditProfile from "./session_user/editprofil";
import Daftar from "./session_user/daftar"
import Lomba from "./session_user/lomba"
import UbahPassword from "./session_user/ubahpassword";

import Admin from "./session_admin/admin"

export function OutletUser () {
    return (
        <Routes>
                <Route path="dashboard/overview" element={<Overview />} />
                <Route path="dashboard/editprofil" element={<EditProfile/>} />
                <Route path="dashboard/ubahpassword" element={<UbahPassword />} />
                <Route path="pendaftaran/lomba" element={<Lomba />} />
                <Route path="pendaftaran/daftar" element={<Daftar />} />
        </Routes>
    )
}

export function OutletAdmin () {
    return (
        <Routes>
            <Route path="dashboard/overview" element={<Admin/>} />
        </Routes>
    )
}