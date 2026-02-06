import {useState, useEffect} from "react";
import {Link, useLocation, useNavigate} from 'react-router'
import {  
        HiOutlineInbox, 
        HiLockClosed, 
        HiEye, 
        HiEyeOff } from "react-icons/hi";
import {login} from "../../api/login"; //api
import Snowfall from "../snowfall"; //effects
import { showSuccess, showError } from "../swallTemplate";
import { useAuth } from "../../AuthContext";
import maskotTongkat from '../../assets/maskot_tongkat.webp'
import snowflakes from '../../assets/snowflakes.webp'
import snowflakes2 from '../../assets/snowflakes2.webp'

export default function Login() {
    const location = useLocation();
    const {CheckIsLoggedIn} =  useAuth()

    const [statusSubmit, setstatusSubmit] = useState(true)
    const [loginData, setloginData] = useState({
            email : location.state?.email || "", 
            password : ""
        })
    const [showPassword, setshowPassword] = useState(false)

    const inputChange = (e) => {
        const {id, value} = e.target
        setloginData(prevData => ({...prevData, [id] : value}))
    }
    
    // useEffect (() => {
    //     for (let x in loginData){
    //         if (x === "password" && loginData["password"].length >= 8){
    //             setstatusSubmit(true)
    //         } else if (x === "password" && loginData["password"].length != 8) {
    //             setstatusSubmit(false)
    //         }
    //         else {
    //             setstatusSubmit(false)
    //         }
    //     }
    // }, [loginData])

    const navigate = useNavigate()
    const submitForm = (e) => {
            e.preventDefault()
    
            const dataForm = loginData
    
            login(dataForm)
            .then((hasil) => {
                showSuccess("PROSES LOGIN BERHASIL", hasil.message)
                CheckIsLoggedIn(hasil.payload.data).then((role) => {
                    console.log(role)
                    if(role === "peserta"){
                        navigate("/session/dashboard/overview")
                        console.log("Navigating....")
                    } else if (role === "admin"){
                        navigate("/session/dashboard/events")
                        console.log("Navigating....")
                    }
                }).catch((err) => {
                showError("PROSES VERIFIKASI GAGAL", err.message)
                });
            }).catch((err) => {
                showError("PROSES LOGIN GAGAL", err.message)
            });
    }

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
            {/* Left Side */}
            <div className="hidden md:flex w-1/2 relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-500 items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-32 h-32 opacity-20 animate-pulse"><img src={snowflakes2} alt="" /></div>
                    <div className="absolute top-40 right-16 w-24 h-24 opacity-30 animate-bounce"><img src={snowflakes} alt="" /></div>
                    <div className="absolute bottom-32 left-20 w-40 h-40 opacity-15 animate-ping"><img src={snowflakes} alt="" /></div>
                    <div className="absolute bottom-20 right-10 w-28 h-28 opacity-25"><img src={snowflakes2} alt="" /></div>
                    <Snowfall snowflakeCount={80}/>
                </div>
                <div className="relative z-10 text-center text-white p-8">
                    <div className="mb-8">
                        <img
                            src={maskotTongkat}
                            alt="Garsafa Auth"
                            className="max-h-80 object-contain mx-auto mb-6 drop-shadow-2xl"
                        />
                    </div>
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">
                        Welcome to Garsafa 2026
                    </h2>
                    <p className="text-cyan-100 text-lg leading-relaxed max-w-md">
                        Join the most exciting Competition Festival. Growth your skill, academic, and connection.
                    </p>
                </div>
            </div>

            {/* Right Side (Form) */}
            <div className="flex w-full md:w-1/2 items-center justify-center relative px-6 py-8">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900 to-cyan-500"></div>
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                        <defs>
                            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>
                <div
                    data-slot="card"
                    className="text-card-foreground flex flex-col gap-6 py-6 w-full max-w-md relative z-10 bg-white/95 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden pt-0"
                >
                    <div className="bg-gradient-to-r from-blue-900 to-cyan-500 p-6 text-center">
                        <div data-slot="card-title" className="text-2xl font-bold text-white mb-2">
                            <span className="flex items-center justify-center gap-2">Login</span>
                        </div>
                        <p className="text-cyan-100 text-sm">Login Garsafa 2026</p>
                    </div>
                    <div data-slot="card-content" className="p-6 space-y-5">
                        <form 
                            className="space-y-5"
                            onSubmit={submitForm}
                            >
                            {/* Email */}
                            <div className="space-y-2">
                                <label
                                    data-slot="label"
                                    className="flex items-center gap-2 text-sm leading-none select-none text-blue-900 font-medium"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                    <div className="relative gap-3 flex items-center border-2 border-slate-200 rounded-xl px-4 py-3 bg-white hover:border-cyan-400 focus-within:border-blue-500 transition-colors duration-300">
                                        <HiOutlineInbox className="text-xl text-accent"/>
                                        <input
                                            type="email"
                                            data-slot="input"
                                            className="flex h-9 w-full min-w-0 rounded-md bg-transparent text-base outline-none border-none shadow-none focus-visible:ring-0 p-0 placeholder:text-slate-400 text-black"
                                            id="email"
                                            placeholder="Masukkan email"
                                            value={loginData.email}
                                            onChange={inputChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Password */}
                            <div className="space-y-2">
                                <label
                                    data-slot="label"
                                    className="flex items-center gap-2 text-sm leading-none select-none text-blue-900 font-medium"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                    <div className="relative flex gap-3 items-center border-2 border-slate-200 rounded-xl px-4 py-3 bg-white hover:border-cyan-400 focus-within:border-blue-500 transition-colors duration-300">
                                        <HiLockClosed className="text-accent text-xl"/>
                                        <input
                                            type={`${showPassword ? 'text' : 'password'}`}
                                            data-slot="input"
                                            className="flex-1 h-9 w-full min-w-0 rounded-md bg-transparent text-base outline-none border-none shadow-none focus-visible:ring-0 p-0 placeholder:text-slate-400 text-black"
                                            id="password"
                                            placeholder="Masukkan password"
                                            value={loginData.password}
                                            onChange={inputChange}
                                        />
                                        <button
                                            type="button"
                                            className="text-lg text-slate-400 hover:text-cyan-500 transition-colors duration-200 ml-2"
                                            onClick={() => {setshowPassword(!showPassword)}}
                                        >
                                            {showPassword ? <HiEyeOff/> : <HiEye/>}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                data-slot="button"
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm h-9 px-4 w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 mt-6 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                                type="submit"
                                disabled={statusSubmit === true ? false : true}
                            >
                                <span className="flex items-center justify-center gap-2">Login Account</span>
                            </button>
                        </form>

                        {/* Sign In Link */}
                        <div className="text-center mt-6 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl">
                            <p className="text-sm text-slate-600  ">
                                Belum memiliki akun?{" "}
                                <Link to='/auth/register'><span  className="text-accent hover:text-secondary">Buat akun</span></Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}