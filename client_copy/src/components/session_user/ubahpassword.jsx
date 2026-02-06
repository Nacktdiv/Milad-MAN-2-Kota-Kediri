import React, { useState } from 'react';
import { 
  HiShieldCheck, 
  HiKey, 
  HiLockClosed, 
  HiEye, 
  HiEyeOff, 
  HiExclamation, 
  HiCheckCircle 
} from 'react-icons/hi';

const UbahPassword = () => {
  // State untuk manajemen input
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const tips = [
    "Gunakan kombinasi huruf besar, kecil, angka, dan simbol",
    "Hindari menggunakan informasi personal seperti nama atau tanggal lahir",
    "Jangan gunakan password yang sama dengan akun lain",
    "Update password secara berkala setiap 3-6 bulan",
    "Gunakan password manager untuk menyimpan password dengan aman"
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6 px-4 py-8 font-sans">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg">
        <h1 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <HiShieldCheck className="w-7 h-7" />
          Ubah Password
        </h1>
        <p className="text-blue-100">Pastikan akun Anda tetap aman dengan password yang kuat</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Form */}
        <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-100 p-6 shadow-md">
          <div className="flex items-center gap-2 mb-6">
            <HiKey className="w-5 h-5 text-blue-500" />
            <h2 className="text-lg font-bold text-slate-800">Form Ubah Password</h2>
          </div>

          <div className="space-y-5">
            {/* Current Password */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Password Saat Ini *</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                  <HiLockClosed className="w-4 h-4" />
                </span>
                <input 
                  type={showCurrent ? "text" : "password"}
                  placeholder="Masukkan password saat ini"
                  className="w-full pl-10 pr-10 py-2 bg-white border border-slate-200 rounded-md text-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all"
                />
                <button 
                  type="button"
                  onClick={() => setShowCurrent(!showCurrent)}
                  className="absolute inset-y-0 right-0 px-3 flex items-center text-slate-400 hover:text-blue-500 cursor-pointer"
                >
                  {showCurrent ? <HiEyeOff className="w-4 h-4" /> : <HiEye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* New Password */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Password Baru *</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                  <HiLockClosed className="w-4 h-4" />
                </span>
                <input 
                  type={showNew ? "text" : "password"}
                  placeholder="Masukkan password baru"
                  className="w-full pl-10 pr-10 py-2 bg-white border border-slate-200 rounded-md text-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all"
                />
                <button 
                  type="button"
                  onClick={() => setShowNew(!showNew)}
                  className="absolute inset-y-0 right-0 px-3 flex items-center text-slate-400 hover:text-blue-500 cursor-pointer"
                >
                  {showNew ? <HiEyeOff className="w-4 h-4" /> : <HiEye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Konfirmasi Password Baru *</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                  <HiLockClosed className="w-4 h-4" />
                </span>
                <input 
                  type={showConfirm ? "text" : "password"}
                  placeholder="Konfirmasi password baru"
                  className="w-full pl-10 pr-10 py-2 bg-white border border-slate-200 rounded-md text-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all"
                />
                <button 
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute inset-y-0 right-0 px-3 flex items-center text-slate-400 hover:text-blue-500 cursor-pointer"
                >
                  {showConfirm ? <HiEyeOff className="w-4 h-4" /> : <HiEye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <button 
                className="w-full sm:w-fit px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-md text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
              >
                <HiShieldCheck className="w-4 h-4" />
                Ubah Password
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Tips */}
        <div className="space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-slate-100 p-6 shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <HiExclamation className="w-5 h-5 text-yellow-500" />
              <h3 className="text-lg font-bold text-slate-800">Tips Keamanan</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
                <p className="text-xs text-blue-800 leading-relaxed font-medium">
                  Password yang kuat adalah kunci utama keamanan akun Anda!
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-slate-700 text-sm">Rekomendasi:</h4>
                <ul className="space-y-3">
                  {tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs text-slate-600 leading-normal">
                      <HiCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2 mb-1">
                  <HiExclamation className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm font-bold text-yellow-800">Peringatan</span>
                </div>
                <p className="text-[11px] text-yellow-700 leading-relaxed">
                  Setelah mengubah password, Anda akan otomatis logout dari semua perangkat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UbahPassword;