import {useEffect, useState} from "react";
import { 
    HiUser,  
    HiPhone,  
    HiOutlineInbox, 
    HiLockClosed, 
    HiEye, 
    HiEyeOff, 
    HiXCircle, 
    HiOutlineCheckCircle } from "react-icons/hi";
import {Link, useNavigate} from 'react-router'
import register from '../../api/register' //api
import Snowfall from "../snowfall"; //effects
import { showError, showSuccess } from "../swallTemplate"; //alert
import maskotTongkat from '../../assets/maskot_tongkat.webp'
import snowflakes from '../../assets/snowflakes.webp'
import snowflakes2 from '../../assets/snowflakes2.webp'

export default function Register() {
    const [statusSubmit, setstatusSubmit] = useState()
    const [statusPassword, setstatusPassword] = useState()
    const [changeData, setChangeData] = useState({
        nama_lengkap : "",
        email : "", 
        nomor_telepon : "",
        password : "",
        confirm_password : ""
    })
    const [showPassword, setshowPassword] = useState({
        password : false,
        confirmPassword : false
    })
    const [checkPassword, setcheckPassword] = useState(null)

    const inputChange = (e) => {
        const {id, value} = e.target
        setChangeData(prevData => ({...prevData, [id] : value}))
    }

    useEffect(() => {
        let password = changeData.password
        let status 
        if(password == ""){
            status = {}
            setcheckPassword(null)
        } else {
            status = {
                specialCharacters : /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
                smallAlphabet : /[a-z]/.test(password),
                bigAlphabet : /[A-Z]/.test(password),
                number : /[0-9]/.test(password),
                length : password.length >= 8
            }
            setcheckPassword(status)
        }
    },[changeData.password])
    
    function criteriaPassword (data) {
        let jumlahTrue = 0
        let strengthness = []
        for (let x in data) {
            if (data[x]){
                jumlahTrue += 1
            }
        }
        switch (jumlahTrue) {
            case 1 :
                strengthness[0] = "Lemah"
                strengthness[1] = "25%"
                strengthness[2] = "bg-red-500"
                strengthness[3] = "text-red-500"
                setstatusPassword(false)
                break
            case 2 :
                strengthness[0] = "Lemah"
                strengthness[1] = "25%"
                strengthness[2] = "bg-red-500"
                strengthness[3] = "text-red-500"
                setstatusPassword(false)
                break
            case 3 : 
                strengthness[0] = "Sedang"
                strengthness[1] = "50%"
                strengthness[2] = "bg-yellow-500"
                strengthness[3] = "text-yellow-500"
                setstatusPassword(false)
                break
            case 4 : 
                strengthness[0] = "Kuat"
                strengthness[1] = "75%"
                strengthness[2] = "bg-teal-500"
                strengthness[3] = "text-teal-500"
                setstatusPassword(true)
                break
            case 5 :
                strengthness[0] = "Sangat Kuat"
                strengthness[1] = "100%"
                strengthness[2] = "bg-green-500"
                strengthness[3] = "text-green-500"
                setstatusPassword(true)
                break
        } 
        return ( data ? (
        <div className={`mt-2 rounded-lg bg-slate-50 p-3 space-y-2`}>
            {/* Header Status */}
            <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Kekuatan Password:</span>
                <span className={`${strengthness[3]} font-medium`}>{strengthness[0]}</span>
            </div>

            {/* Progress Bar */}
            <div className="h-2 w-full rounded-full bg-slate-200">
                <div 
                className={`${strengthness[2]} h-2 rounded-full transition-all duration-300`}
                style={{ width: strengthness[1] }} 
                />
            </div>

            {/* List Checklist */}
            <div className="mt-2 space-y-1">
                <div className={`${data.length ? 'hidden' : ''} flex items-center gap-2 text-xs text-red-600`}>
                <HiXCircle/>
                <span>Minimal 8 karakter</span>
                </div>
                
                <div className={`${data.bigAlphabet ? 'hidden' : ''} flex items-center gap-2 text-xs text-red-600`}>
                <HiXCircle/>
                <span>Mengandung huruf besar</span>
                </div>

                <div className={`${data.smallAlphabet ? 'hidden' : ''} flex items-center gap-2 text-xs text-red-600`}>
                <HiXCircle/>
                <span>Mengandung huruf kecil</span>
                </div>
                
                <div className={`${data.number ? 'hidden' : ''} flex items-center gap-2 text-xs text-red-600`}>
                <HiXCircle/>
                <span>Mengandung angka</span>
                </div>
                
                <div className={`${data.specialCharacters ? 'hidden' : ''} flex items-center gap-2 text-xs text-red-600`}>
                <HiXCircle/>
                <span>Mengandung karakter khusus</span>
                </div>

                <div className={`${strengthness[0] === "Sangat Kuat" ? '' : 'hidden'} flex items-center gap-2 text-xs text-green-600`}>
                <HiOutlineCheckCircle/>
                <span>Password sangat kuat</span>
                </div>
            </div>
        </div>
        ):(
        <></>
        )
    )
    }

    useEffect (() => {
        for (let x in changeData){
            if (changeData[x] === ""){
                setstatusSubmit(false)
            } 
            else {
                setstatusSubmit(true)
            } 
        }
    }, [changeData])

    const navigate = useNavigate()
    const submitForm = (e) => {
        e.preventDefault()

        if(changeData.password != changeData.confirm_password){
            showError("KONFIRMASI PASSWORD SALAH", "Tolong masukkan konfirmasi password yang sesuai dengan password yang ada isikan di dalam kolom password")
            return
        }

        const dataForm = changeData

        register(dataForm)
            .then((hasil) => {
                showSuccess("PROSES REGISTRASI BERHASIL", "Selamat akun anda telah berhasil didaftarkan")
                navigate("/auth/login", { state: { email: dataForm.email } })
            }).catch((err) => {
                showError("PROSES REGISTRASI GAGAL", err.message)
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
                            <span className="flex items-center justify-center gap-2">Register</span>
                        </div>
                        <p className="text-cyan-100 text-sm">Buat Akun Untuk Daftar Garsafa 2026</p>
                    </div>
                    <div data-slot="card-content" className="p-6 space-y-5">
                        <form 
                                className="space-y-5"
                                onSubmit={submitForm}>
                            {/* Name */}
                            <div className="space-y-2">
                                <label
                                    data-slot="label"
                                    className="flex items-center gap-2 text-sm leading-none select-none text-blue-900 font-medium"
                                    htmlFor="name"
                                >
                                    Nama
                                </label>
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                    <div className="relative flex gap-3 items-center border-2 border-slate-200 rounded-xl px-4 py-3 bg-white hover:border-cyan-400 focus-within:border-blue-500 transition-colors duration-300">
                                        <HiUser className="text-xl text-accent"/>
                                        <input
                                            type="text"
                                            data-slot="input"
                                            className="flex h-9 w-full min-w-0 rounded-md bg-transparent text-base outline-none border-none shadow-none focus-visible:ring-0 p-0 placeholder:text-slate-400 text-black"
                                            id="nama_lengkap"
                                            placeholder="Masukkan nama lengkap"
                                            value={changeData.nama_lengkap}
                                            onChange={inputChange}
                                        />
                                    </div>
                                </div>
                            </div>

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
                                            value={changeData.email}
                                            onChange={inputChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* nomor_telepon */}
                            <div className="space-y-2">
                                <label
                                    data-slot="label"
                                    className="flex items-center gap-2 text-sm leading-none select-none text-blue-900 font-medium"
                                    htmlFor="nomor_telepon"
                                >
                                    Nomor Telepon
                                </label>
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                    <div className="relative flex gap-3 items-center border-2 border-slate-200 rounded-xl px-4 py-3 bg-white hover:border-cyan-400 focus-within:border-blue-500 transition-colors duration-300">
                                        <HiPhone className="text-xl text-accent"/>
                                        <input
                                            type="tel"
                                            data-slot="input"
                                            className="flex h-9 w-full min-w-0 rounded-md bg-transparent text-base outline-none border-none shadow-none focus-visible:ring-0 p-0 placeholder:text-slate-400 text-black"
                                            id="nomor_telepon"
                                            placeholder="Masukkan nomor telepon"
                                            value={changeData.nomor_telepon}
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
                                            type={`${showPassword.password ? 'text' : 'password'}`}
                                            data-slot="input"
                                            className="flex-1 h-9 w-full min-w-0 rounded-md bg-transparent text-base outline-none border-none shadow-none focus-visible:ring-0 p-0 placeholder:text-slate-400 text-black"
                                            id="password"
                                            placeholder="Masukkan password"
                                            value={changeData.password}
                                            onChange={inputChange}
                                        />
                                        <button
                                            type="button"
                                            className="text-lg text-slate-400 hover:text-cyan-500 transition-colors duration-200 ml-2"
                                            onClick={() => setshowPassword((prev) => ({
                                                ...prev,
                                                password : !prev.password
                                            }))}
                                        >
                                            {showPassword.password ? <HiEyeOff/> : <HiEye/>}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {criteriaPassword(checkPassword)}

                            {/* Confirm Password */}
                            <div className="space-y-2">
                                <label
                                    data-slot="label"
                                    className="flex items-center gap-2 text-sm leading-none select-none text-blue-900 font-medium"
                                    htmlFor="confirm-password"
                                >
                                    Confirm Password
                                </label>
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                    <div className="relative flex gap-3 items-center border-2 border-slate-200 rounded-xl px-4 py-3 bg-white hover:border-cyan-400 focus-within:border-blue-500 transition-colors duration-300">
                                        <HiLockClosed className="text-xl text-accent"/>
                                        <input
                                            type={`${showPassword.confirmPassword ? 'text' : 'password'}`}
                                            data-slot="input"
                                            className="flex-1 h-9 w-full min-w-0 rounded-md bg-transparent text-base outline-none border-none shadow-none focus-visible:ring-0 p-0 placeholder:text-slate-400 text-black"
                                            id="confirm_password"
                                            placeholder="Masukkan konfirmasi password"
                                            value={changeData.confirm_password}
                                            onChange={inputChange}
                                        />
                                        <button
                                            type="button"
                                            className="text-lg text-slate-400 hover:text-cyan-500 transition-colors duration-200 ml-2"
                                            onClick={() => setshowPassword((prev) => ({
                                                ...prev,
                                                confirmPassword : !prev.confirmPassword
                                            }))}
                                        >
                                            {showPassword.confirmPassword ? <HiEyeOff/> : <HiEye/>}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                data-slot="button"
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm h-9 px-4 w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 mt-6 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                                type="submit"
                                disabled={statusSubmit && statusPassword ? false : true}
                            >
                                <span className="flex items-center justify-center gap-2">Create Account</span>
                            </button>
                        </form>

                        {/* Sign In Link */}
                        <div className="text-center mt-6 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl">
                            <p className="text-sm text-slate-600">
                                Sudah memiliki akun?{" "}
                                <Link to='/authentication/login'><span  className="text-accent hover:text-secondary">Log In</span></Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}