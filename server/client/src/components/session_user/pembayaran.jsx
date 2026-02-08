import {  useState, useEffect } from 'react';
import {  HiShieldCheck,  HiUpload, HiCreditCard } from 'react-icons/hi';
import {  useAuth } from '../../AuthContext';
import { showError, showSuccess } from '../swallTemplate';
import { membuatPembayaran } from '../../api/postPeserta';
import { memperbaruiDataPembayaran } from '../../api/patchPeserta';

const Pembayaran = () => {
    const { pendaftaran, pembayaran, setPembayaran } =  useAuth()

    const [formPembayaran, setformPembayaran] = useState({
        id_pendaftaran: pendaftaran.id_pendaftaran,
        metode_pembayaran: pembayaran?.metode_pembayaran,
        bukti_pembayaran: ''
    })

    const [previewUrl, setpreviewUrl] = useState(null)

    useEffect(() => {
        return () => {
            if (previewUrl) URL.revokeObjectURL(previewUrl);
        };
    }, [previewUrl]);

    const inputChange = (e) => {
        const { id, type, files, value } = e.target;
        
        if (type === 'file') {
            const file = files[0]; 
            
            if (file) {
                const maxSize = 2 * 1024 * 1024; // 2.097.152 bytes
                
                if (file.size > maxSize) {
                    showError("GAGAL UPLOAD BUKTI PEMBAYARAN","File terlalu besar! Maksimal ukuran adalah 2MB.");
                    e.target.value = ""; 
                    return;
                }

                setformPembayaran(prevData => ({ ...prevData, [id]: file }));

                if (previewUrl) URL.revokeObjectURL(previewUrl);
                
                const objectUrl = URL.createObjectURL(file);
                setpreviewUrl(objectUrl);
            }
        } else {
            setformPembayaran(prevData => ({ ...prevData, [id]: value }));
        }
    };

    const setMetodePembayaran = (value, undifinedFile) => {
        setformPembayaran(prevData => ({...prevData, metode_pembayaran: value}))
        setformPembayaran(prevData => ({...prevData, bukti_pembayaran: undifinedFile}))
    }

    const handleSubmit = () => {

        const dataForm = formPembayaran

        membuatPembayaran(dataForm)
        .then((hasil) => {
            showSuccess("PROSES PEMBAYARAN BERHASIL", hasil.message)
            setPembayaran(hasil?.payload?.data)
            window.location.reload();
        }).catch((err) => {
            showError("PROSES PEMBAYARAN GAGAL", err.message)
        });
    }

    const handleSubmitUpdate = () => {

        const dataForm = formPembayaran
        dataForm.id_pembayaran = pembayaran.id_pembayaran

        memperbaruiDataPembayaran(dataForm)
        .then((hasil) => {
            showSuccess("PROSES MEMPERBARUI PEMBAYARAN BERHASIL", hasil.message)
            setPembayaran(hasil?.payload?.data)
        }).catch((err) => {
            showError("PROSES MEMPERBARUI PEMBAYARAN GAGAL", err.message)
        });
    }

    return(
        <div className="space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                {pembayaran?.status_konfirmasi === "Berhasil" ? (
                    <div className="space-y-4 animate-in zoom-in-95 duration-500">
                        <div className="bg-emerald-600 p-4 rounded-xl text-white shadow-lg shadow-emerald-100 flex justify-between items-center">
                            <div>
                                <p className="text-[10px] uppercase font-bold opacity-80 mb-1">Status Pembayaran</p>
                                <h4 className="text-xl font-black">TERKONFIRMASI</h4>
                            </div>
                            <HiShieldCheck className="w-10 h-10 text-emerald-200" />
                        </div>
                        
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <HiShieldCheck className="w-10 h-10" />
                            </div>
                            <h5 className="font-bold text-slate-800">Pembayaran Diterima</h5>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                Pembayaran Anda telah divalidasi. Anda sudah resmi terdaftar dalam kompetisi.
                            </p>
                        </div>
                    </div>
                ) : (
                    /* SKENARIO 2 & 3: PEMBAYARAN NULL ATAU STATUS MASIH MENUNGGU (Tampilkan Form) */
                    <div className="space-y-6">
                        <div className="mb-4">
                            <div className="flex items-center gap-2 mb-1 text-cyan-600">
                                <HiCreditCard className="w-5 h-5" />
                                <h3 className="text-lg font-bold text-slate-800">Pembayaran</h3>
                            </div>
                            
                            {/* Badge Status dinamis: Jika null tampilkan "Belum Bayar", jika menunggu tampilkan "Menunggu konfirmasi" */}
                            <span className={`inline-block px-2 py-1 text-[10px] font-bold rounded uppercase ${
                                pembayaran?.status_konfirmasi === "Menunggu" 
                                ? "bg-amber-100 text-amber-700 animate-pulse" 
                                : "bg-slate-100 text-slate-500"
                            }`}>
                                {pembayaran?.status_konfirmasi === "Menunggu" 
                                    ? "🕒 Menunggu konfirmasi Admin" 
                                    : "❌ Belum Melakukan Pembayaran"}
                            </span>
                        </div>

                        {/* Form Pilihan Metode */}
                        <div className="grid grid-cols-2 gap-3">
                            <button 
                                type="button"
                                id='metode_pembayaran'
                                onClick={() => setMetodePembayaran("Transfer")}
                                className={`py-3 rounded-xl border-2 font-bold text-sm transition-all ${
                                    formPembayaran.metode_pembayaran === 'Transfer' 
                                    ? 'border-cyan-500 bg-cyan-50 text-cyan-700' 
                                    : 'border-slate-100 bg-slate-50 text-slate-500'
                                }`}
                            >
                                Transfer
                            </button>
                            <button 
                                type="button"
                                id='metode_pembayaran'
                                onClick={() => setMetodePembayaran("Cash", undefined)}
                                className={`py-3 rounded-xl border-2 font-bold text-sm transition-all ${
                                    formPembayaran.metode_pembayaran === 'Cash'
                                    ? 'border-green-500 bg-green-50 text-green-700' 
                                    : 'border-slate-100 bg-slate-50 text-slate-500'
                                }`}
                            >
                                Cash / Tunai
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-blue-600 p-4 rounded-xl text-white">
                                <p className="text-[10px] uppercase font-bold opacity-80 mb-1">Total Tagihan</p>
                                <h4 className="text-2xl font-black">
                                    Rp {new Intl.NumberFormat('id-ID').format(pendaftaran?.jumlah_bayar || 0)}
                                </h4>
                            </div>

                            {/* Logika Tampilan Berdasarkan Pilihan (Cash/Transfer) */}
                            {formPembayaran.metode_pembayaran === 'Transfer' ? (
                                <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-[10px] text-amber-800 font-medium">
                                        ⚠️ Transfer ke **BNI 123456789** a.n Panitia.
                                    </div>
                                    
                                    <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center bg-slate-50 hover:bg-slate-100 cursor-pointer group relative overflow-hidden">
                                        <input 
                                            type="file" 
                                            className="hidden" 
                                            id="bukti_pembayaran" 
                                            accept="image/*" 
                                            onChange={inputChange}
                                        />
                                        
                                        <label htmlFor="bukti_pembayaran" className="cursor-pointer block">
                                            {/* KONDISI PREVIEW */}
                                            {previewUrl || pembayaran?.bukti_pembayaran ? (
                                                <div className="space-y-2">
                                                    <div className="relative mx-auto w-32 h-32 border rounded-lg overflow-hidden bg-white">
                                                        <img 
                                                            src={previewUrl || `http://localhost:3000/${pembayaran.bukti_pembayaran}`} 
                                                            alt="Preview Bukti" 
                                                            className="w-full h-full object-cover"
                                                        />
                                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                                            <p className="text-white text-[10px]">Klik untuk Ganti</p>
                                                        </div>
                                                    </div>
                                                    <p className="text-xs font-medium text-cyan-600">Gambar Terpilih</p>
                                                </div>
                                            ) : (
                                                /* TAMPILAN AWAL (KOSONG) */
                                                <>
                                                    <HiUpload className="w-8 h-8 text-slate-400 mx-auto mb-2 group-hover:text-cyan-500" />
                                                    <p className="text-sm font-bold text-slate-600">
                                                        Upload Bukti Pembayaran
                                                    </p>
                                                    <p className="text-[10px] text-slate-400 mt-1 uppercase">JPG atau PNG (Max 2MB)</p>
                                                </>
                                            )}
                                        </label>
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-green-50 border border-green-200 rounded-lg p-4 animate-in fade-in slide-in-from-top-2">
                                    <p className="text-xs text-green-800 leading-relaxed font-medium">
                                        ✅ Anda memilih **Cash**. Silakan selesaikan pembayaran langsung di Sekretariat MAN 2 Kota Kediri.
                                    </p>
                                </div>
                            )}

                            <button 
                                onClick={() => {pembayaran ? handleSubmitUpdate() : handleSubmit()}}
                                className="w-full py-3 bg-slate-800 text-white rounded-xl font-bold text-sm hover:bg-slate-900 transition-all shadow-lg">
                                {pembayaran?.status_konfirmasi === "Menunggu" ? "Perbarui Konfirmasi" : "Konfirmasi Sekarang"}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
};

export default Pembayaran;