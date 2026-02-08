import { useState, useEffect, createContext, useContext } from "react"; // Gunakan createContext
import getPesertaData from "./api/getPeserta";
import getAdminData from "./api/getAdmin";
import { apiLogout } from "./api/logout";
import {checkRole} from "./api/login"
import { showError, showSuccess } from "./components/swallTemplate";

// 1. Inisialisasi Context
const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [event, setEvent] = useState(null)
    const [pendaftaran, setPendaftaran] = useState(null)
    const [pembayaran, setPembayaran] = useState(null)
    const [loading, setLoading] = useState(true);


    const CheckIsLoggedIn = async () => {
        try {
            let role = await checkRole()
            console.log(role)
            if (role == "admin") {
                const data = await getAdminData(); 
                setUser(data)
                return "admin"
            } else if (role == "peserta") {
                const data = await getPesertaData();
                setUser(data?.payload?.data[1]);
                setEvent(data?.payload?.data[0])
                console.log(data)
                if (typeof data?.payload?.data[1].pendaftaran?.nama_peserta){
                    console.log("true")
                    let pendaftaranRaw = data?.payload?.data[1].pendaftaran
                    const nama_peserta = data?.payload?.data[1].pendaftaran?.nama_peserta
                    pendaftaranRaw.nama_peserta = nama_peserta
                    setPendaftaran(pendaftaranRaw)
                    setPembayaran(pendaftaranRaw.pembayaran)
                }
                return "peserta"
            }
        } catch (error) {
            setUser(null);
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    const logout = async () => {
        try {
            const hasil = await apiLogout(); 
            if(hasil.success == false) {
                showError("LOGOUT GAGAL", hasil.message)
            } else if(hasil.success == true) {
                showSuccess("LOGOUT BERHASIL", hasil.message)
            }
        } catch (err) {
            console.error("Gagal hapus session di server, tapi tetep logout di lokal");
        } finally {
            // Hapus state lokal
            setUser(null);
            setPendaftaran(null);
            setPembayaran(null);
            
            // Redirect
            window.location.href = "/";
        }
    };

    useEffect(() => {
        CheckIsLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{ user, event, pendaftaran, pembayaran, loading, setUser, setPendaftaran, setPembayaran, logout, CheckIsLoggedIn }}>
            {!loading ? children : <div>Loading...</div>}
        </AuthContext.Provider>
    );
};