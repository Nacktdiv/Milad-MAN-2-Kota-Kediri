import React, { useState} from 'react';
import { 
HiArrowLeft, 
HiUser, 
HiMail, 
HiPhone, 
HiSave, 
HiRefresh 
} from "react-icons/hi";
import { HiTrophy } from "react-icons/hi2"
import { Link } from "react-router";
import {  useAuth } from '../../AuthContext';
import { memperbaruiDataUser } from '../../api/patchPeserta';
import { showError, showSuccess } from '../swallTemplate';

const EditProfile = () => {
    const {user, setUser, event, pendaftaran} =  useAuth()

    const [formData, setFormData] = useState({
        nama_lengkap: user.nama_lengkap,
        nomor_telepon: user.nomor_telepon,
        email: user.email,
        category: ["MECO", "GOBAK SODOR", "COMPFEST", "TECHCOMPFEST"]
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault()
    
        const dataForm = formData

        if(!dataForm.nama_lengkap && !dataForm.nomor_telepon){
            showError("DATA PERUBAHAN BELUM ADA YANG MASUK", "Tolong masukkan data yang ingin dirubah jangan kosongi data")
            return
        }

        memperbaruiDataUser(dataForm)
            .then((hasil) => {
                showSuccess("PROSES MEMPERBARUI DATA USER BERHASIL", hasil.message)
                setUser(hasil?.payload?.data)
            }).catch((err) => {
                showError("PROSES MEMPERBARUI DATA USER GAGAL", err.message)
            });
    };

    const handleReset = () => {
        setFormData(prev => ({...prev, nama_lengkap : user.nama_lengkap, nomor_telepon : user.nomor_telepon}))        
    }

    return (
    <div className="max-w-5xl mx-auto space-y-6 px-4 py-6 font-poppins">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg">
        <h1 className="text-2xl font-bold mb-2">Edit Profil</h1>
        <p className="text-blue-100">Perbarui informasi profil Anda dengan data yang valid</p>
        </div>

        {/* Form Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border-none overflow-hidden">
        
        {/* Card Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
            <div className="text-lg font-bold text-slate-800">Informasi Personal</div>
            <Link to="/session/dashboard/overview">
            <button className="hidden sm:flex items-center gap-2 px-3 py-1.5 border border-cyan-400 text-cyan-500 rounded-md text-sm font-medium transition-all hover:bg-cyan-400 hover:text-white">
                <HiArrowLeft className="w-4 h-4" />
                Kembali
            </button>
            </Link>
        </div>

        {/* Card Content */}
        <div className="p-6 space-y-6">
            <form 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                onSubmit={handleSubmit}>
                    {/* Input Nama */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700" htmlFor="name">Nama Lengkap *</label>
                        <div className="relative">
                        <HiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <input 
                            id="nama_lengkap"
                            type="text" 
                            value={formData.nama_lengkap}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-md text-sm focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition-all"
                            placeholder="Nama Lengkap"
                        />
                        </div>
                    </div>

                    {/* Input Email (Disabled) */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700" htmlFor="email">Email *</label>
                        <div className="relative">
                        <HiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <input 
                            id="email"
                            type="email" 
                            value={formData.email}
                            disabled
                            className="w-full pl-10 pr-4 py-2 bg-slate-100 border border-slate-200 rounded-md text-sm text-slate-500 cursor-not-allowed"
                        />
                        </div>
                        <p className="text-xs text-slate-500">Email tidak dapat diubah</p>
                    </div>

                    {/* Input Phone */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700" htmlFor="phone">Nomor Telepon *</label>
                        <div className="relative">
                        <HiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <input 
                            id="nomor_telepon"
                            type="text" 
                            value={formData.nomor_telepon}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-md text-sm focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition-all"
                            placeholder="No Telepon"
                        />
                        </div>
                    </div>

                    {/* Kategori Lomba (Read Only) */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Kategori Lomba</label>
                        <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-lg flex items-center">
                        <div className='flex gap-2 flex-wrap'>
                                    {pendaftaran && event.map ((item, index) => {
                                        const eventDaftar = pendaftaran.id_event
                                        if(item.id_event === eventDaftar){
                                            return (
                                                <span
                                                    key={item.id_event}
                                                    id={index}
                                                    className="items-center justify-center whitespace-nowrap px-3 py-1 mt-1 rounded-md text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-sm">
                                                    {item.nama_event}
                                                </span>
                                            )
                                        } else {
                                            <span
                                                key="0"
                                                className="items-center justify-center whitespace-nowrap px-3 py-1 mt-1 rounded-md text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-sm">
                                                nothing
                                            </span>
                                        }
                                    })}
                                </div>
                        </div>
                        <p className="text-xs text-slate-500">Kategori tidak dapat diubah</p>
                    </div>
                    <button 
                        type="submit"
                        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-2.5 rounded-md font-semibold text-sm transition-all shadow-md active:scale-[0.98]"
                    >
                        <HiSave className="w-5 h-5" />
                        Simpan Perubahan
                    </button>
                    <button 
                        type="button"
                        className="flex-1 flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-600 py-2.5 rounded-md font-semibold text-sm transition-all hover:bg-slate-50 active:scale-[0.98]"
                        onClick={() => handleReset()}
                    >
                        <HiRefresh className="w-5 h-5" />
                        Reset
                    </button>
            </form>
        </div>

        </div>
    </div>
    );
};

export default EditProfile;