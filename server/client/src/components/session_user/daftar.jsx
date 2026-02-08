import { useState, useEffect } from 'react';
import { 
HiUsers, HiPencilAlt, HiOfficeBuilding, HiUser, HiShieldCheck, 
HiClock, HiUpload, HiPlus, HiTrash, HiCreditCard
} from 'react-icons/hi';
import { HiTrophy } from 'react-icons/hi2';
import { useAuth } from '../../AuthContext';
import { membuatPendaftaran } from '../../api/postPeserta';
import { memperbaruiDataPendaftaran } from '../../api/patchPeserta';
import { showConfirm, showError, showSuccess } from '../swallTemplate';
import Pembayaran from './pembayaran';

const Daftar = () => {
    const { pendaftaran, user, event: listEvent, setPendaftaran } = useAuth()

    // State untuk Form (Jika pendaftaran kosong)
    const [formData, setFormData] = useState({
    id_event: '',
    asal_institusi: '',
    nama_pembina: '',
    nama_tim: '',
    nama_peserta: [] // Untuk anggota tambahan jika tim
    });

    const [selectedEvent, setSelectedEvent] = useState(null);
    
    const [isEditing, setIsEditing] = useState(false);

    const handleEditing = async () => {
        if (isEditing) {
            const konfirmasi = await showConfirm(
                "PERUBAHAN DATA", 
                "Apakah anda yakin ingin membatalkan perubahan data?"
            );
            
            if (konfirmasi.isConfirmed) {
                // Gunakan JSON parse & stringify untuk DEEP COPY 
                // agar referensi array dan object di dalamnya benar-benar baru
                setFormData({
                    id_event: pendaftaran.id_event,
                    asal_institusi: pendaftaran.asal_institusi || '',
                    nama_pembina: pendaftaran.nama_pembina || '',
                    nama_tim: pendaftaran.nama_tim || '',
                    nama_peserta: JSON.parse(JSON.stringify(pendaftaran.nama_peserta || []))
                });
                
                setIsEditing(false);
            }
            return; 
        }
        setIsEditing(true);
    }


    useEffect(() => {
        if (pendaftaran) {
            setFormData({
                id_event: pendaftaran.id_event,
                asal_institusi: pendaftaran.asal_institusi || '',
                nama_pembina: pendaftaran.nama_pembina || '',
                nama_tim: pendaftaran.nama_tim || '',
                nama_peserta: pendaftaran.nama_peserta || []
            });
            // Cari event yang sesuai untuk menentukan tipe (Kelompok/Individu)
            const ev = listEvent.find(item => item.id_event === parseInt(pendaftaran.id_event));
            setSelectedEvent(ev);
        }
    }, [pendaftaran, listEvent]);

    // Handle perubahan event untuk cek tipe_event
    const handleEventChange = (e) => {
        const id = e.target.value;
        const ev = listEvent.find(item => item.id_event === parseInt(id));
        setSelectedEvent(ev);
        setFormData({ ...formData, id_event: id, nama_peserta: [] });
    };

    const addAnggota = () => {
        if(formData.nama_peserta.length == 3) {
            return
        }
        setFormData({
            ...formData,
            nama_peserta: [...formData.nama_peserta, { nama: '', nohp: '' }]
        });
    };

    const removeAnggota = (index) => {
        const newAnggota = formData.nama_peserta.filter((_, i) => i !== index);
        setFormData({ ...formData, nama_peserta: newAnggota });
    };

    const handleUpdateAnggota = (index, field, value) => {
        setFormData(prev => ({
            ...prev,
            nama_peserta: prev.nama_peserta.map((peserta, i) => 
                i === index ? { ...peserta, [field]: value } : peserta
            )
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        const dataForm = formData

        membuatPendaftaran(dataForm)
        .then((hasil) => {
            showSuccess("PROSES PENDAFTARAN BERHASIL", hasil.message)
            setPendaftaran(hasil?.payload?.data)
        }).catch((err) => {
            showError("PROSES PENDAFTARAN GAGAL", err.message)
        });
    }

    const handleSubmitUpdate = (e) => {
        e.preventDefault()

        const dataForm = formData

        memperbaruiDataPendaftaran(dataForm)
        .then((hasil) => {
            showSuccess("PROSES MEMPERBARUI PENDAFTARAN BERHASIL", hasil.message)
            setPendaftaran(hasil?.payload?.data)
        }).catch((err) => {
            showError("PROSES MEMPERBARUI PENDAFTARAN GAGAL", err.message)
        });
    }

    // --- VIEW 1: FORM PENDAFTARAN (Jika pendaftaran === null) ---
    if (!pendaftaran) {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 font-poppins">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6 text-white">
                <h1 className="text-2xl font-bold flex items-center gap-2">
                    <HiPencilAlt /> Form Pendaftaran Kompetisi
                </h1>
                <p className="text-cyan-100 text-sm">Lengkapi data berikut untuk mendaftarkan tim/dirimu.</p>
                </div>

                <form 
                    className="p-8 space-y-6"
                    onSubmit={handleSubmit}
                    >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Pilih Event */}
                        <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Pilih Kompetisi</label>
                        <select 
                            className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
                            onChange={handleEventChange}
                        >
                            <option value="">-- Pilih Lomba --</option>
                            {listEvent?.map(ev => (
                                <option 
                                    key={ev.id_event} 
                                    value={ev.id_event} 
                                    disabled={ev.status_buka == 'Buka' ? false : true} // Tidak bisa diklik jika tutup
                                    className={ev.status_buka == 'Buka' ?  "text-black" : "text-gray-400"}
                                >
                                    {ev.nama_event} {ev.status_buka == 'Buka' ? "" : "(Tutup)" }
                                </option>
                            ))}
                        </select>
                        </div>

                        {/* Asal Institusi */}
                        <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Asal Institusi (Sekolah/Univ)</label>
                        <input 
                            type="text" 
                            className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cyan-500 outline-none"
                            placeholder="Contoh: MAN 2 Kota Kediri"
                            onChange={(e) => setFormData({...formData, asal_institusi: e.target.value})}
                        />
                        </div>

                        {/* Nama Pembina */}
                        <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Nama Pembina</label>
                        <input 
                            type="text" 
                            className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cyan-500 outline-none"
                            placeholder="Nama Bapak/Ibu Guru Pembina"
                            onChange={(e) => setFormData({...formData, nama_pembina: e.target.value})}
                        />
                        </div>

                        {/* Nama Tim (Hanya jika tipe_event === 'tim') */}
                        {selectedEvent?.tipe_event === 'Kelompok' && (
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700 text-blue-600">Nama Tim</label>
                            <input 
                            type="text" 
                            className="w-full p-3 rounded-xl border border-blue-200 focus:ring-2 focus:ring-blue-500 outline-none bg-blue-50/30"
                            placeholder="Masukkan nama tim kerenmu"
                            onChange={(e) => setFormData({...formData, nama_tim: e.target.value})}
                            />
                        </div>
                        )}
                    </div>

                    <hr className="border-slate-100" />

                    {/* Bagian Peserta */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-slate-800 flex items-center gap-2">
                        <HiUsers className="text-cyan-500" /> Data Peserta
                        </h3>
                        
                        {/* Ketua (Otomatis dari User) */}
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                        <div>
                            <p className="text-xs font-bold text-cyan-600 uppercase tracking-wider">Ketua / Peserta Utama</p>
                            <p className="font-semibold text-slate-800">{user?.nama_lengkap}</p>
                            <p className="text-sm text-slate-500">{user?.nomor_telepon}</p>
                        </div>
                        <HiShieldCheck className="w-8 h-8 text-green-500" />
                        </div>

                        {/* Anggota Tambahan (Jika Tim) */}
                        {selectedEvent?.tipe_event === 'Kelompok' && (
                        <div className="space-y-3">
                            {formData.nama_peserta.map((anggota, index) => (
                            <div key={index} className="flex gap-3 items-end bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                                <div className="flex-1 space-y-2">
                                    <label className="text-xs font-bold text-slate-600">Nama Anggota {index + 1}</label>
                                    <input 
                                        className="w-full p-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="Nama Lengkap"
                                        value={anggota.nama}
                                        onChange={(e) => {
                                        const newArr = [...formData.nama_peserta];
                                        newArr[index].nama = e.target.value;
                                        setFormData({...formData, nama_peserta: newArr});
                                        }}
                                    />
                                </div>
                                <div className="flex-1 space-y-2">
                                    <label className="text-xs font-bold text-slate-600">No. HP</label>
                                    <input 
                                        className="w-full p-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="0812..."
                                        value={anggota.nohp}
                                        onChange={(e) => {
                                        const newArr = [...formData.nama_peserta];
                                        newArr[index].nohp = e.target.value;
                                        setFormData({...formData, nama_peserta: newArr});
                                        }}
                                    />
                                </div>
                                <button 
                                    type="button"
                                    onClick={() => removeAnggota(index)}
                                    className="p-3 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                                >
                                    <HiTrash />
                                </button>
                            </div>
                            ))}
                            
                            <button 
                            type="button"
                            onClick={addAnggota}
                            className="flex items-center justify-center gap-2 w-full py-3 border-2 border-dashed border-slate-300 rounded-xl text-slate-500 hover:border-cyan-500 hover:text-cyan-500 transition-all"
                            >
                            <HiPlus /> Tambah Anggota Tim
                            </button>
                        </div>
                        )}
                    </div>

                    <button 
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all active:scale-95"
                    >
                        Daftar Sekarang
                    </button>
                </form>
            </div>
        </div>
    );
    }

    // --- VIEW 2: DETAIL/EDIT PENDAFTARAN ---
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 font-poppins">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
                
                {/* Header Section - Dibuat mirip View 1 */}
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6 text-white">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold flex items-center gap-2">
                                <HiTrophy className="text-yellow-300" /> 
                                {isEditing ? "Edit Data Pendaftaran" : "Detail Pendaftaran"}
                            </h1>
                            <p className="text-cyan-100 text-sm">
                                {isEditing ? "Pastikan data yang diubah sudah benar." : "Informasi lengkap pendaftaran tim/dirimu."}
                            </p>
                        </div>
                        <button 
                            onClick={() => handleEditing()}
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all border ${
                                isEditing 
                                ? "bg-red-500 text-white border-red-400 hover:bg-red-600" 
                                : "bg-white/20 text-white border-white/30 hover:bg-white/30"
                            }`}
                        >
                            {isEditing ? <HiClock /> : <HiPencilAlt />}
                            {isEditing ? "Batal" : "Edit Data"}
                        </button>
                    </div>
                </div>

                <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        
                        {/* Kolom Kiri: Form Detail */}
                        <div className="lg:col-span-2 space-y-6">
                            <form onSubmit={handleSubmitUpdate} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Asal Institusi */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Asal Institusi</label>
                                        <input 
                                            disabled={!isEditing}
                                            type="text"
                                            className={`w-full p-3 rounded-xl border outline-none transition-all ${
                                                isEditing 
                                                ? 'border-cyan-200 focus:ring-2 focus:ring-cyan-500 bg-white' 
                                                : 'border-slate-100 bg-slate-50 text-slate-600'
                                            }`}
                                            value={formData.asal_institusi}
                                            onChange={(e) => setFormData({...formData, asal_institusi: e.target.value})}
                                        />
                                    </div>

                                    {/* Nama Pembina */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Nama Pembina</label>
                                        <input 
                                            disabled={!isEditing}
                                            type="text"
                                            className={`w-full p-3 rounded-xl border outline-none transition-all ${
                                                isEditing 
                                                ? 'border-cyan-200 focus:ring-2 focus:ring-cyan-500 bg-white' 
                                                : 'border-slate-100 bg-slate-50 text-slate-600'
                                            }`}
                                            value={formData.nama_pembina}
                                            onChange={(e) => setFormData({...formData, nama_pembina: e.target.value})}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Kode Tiket <span className='text-red-500'>Tidak bisa dirubah</span></label>
                                        <input 
                                            disabled
                                            type="text"
                                            className={`w-full p-3 rounded-xl border outline-none transition-all border-slate-100 bg-slate-50 text-slate-600`}
                                            value={pendaftaran.kode_unik_tiket}
                                        />
                                    </div>

                                    {/* Nama Tim */}
                                    {selectedEvent?.tipe_event === 'Kelompok' && (
                                        <div className="space-y-2 md:col-span-2">
                                            <label className="text-sm font-semibold text-blue-600">Nama Tim</label>
                                            <input 
                                                disabled={!isEditing}
                                                type="text"
                                                className={`w-full p-3 rounded-xl border font-bold outline-none transition-all ${
                                                    isEditing 
                                                    ? 'border-blue-200 focus:ring-2 focus:ring-blue-500 bg-blue-50/30' 
                                                    : 'border-transparent bg-blue-50/50 text-blue-700'
                                                }`}
                                                value={formData.nama_tim}
                                                onChange={(e) => setFormData({...formData, nama_tim: e.target.value})}
                                            />
                                        </div>
                                    )}
                                </div>

                                <hr className="border-slate-100" />

                                {/* Data Peserta */}
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-bold text-slate-800 flex items-center gap-2">
                                            <HiUsers className="text-cyan-500" /> Data Peserta
                                        </h3>
                                        {isEditing && selectedEvent?.tipe_event === 'Kelompok' && (
                                            <button 
                                                type="button"
                                                onClick={addAnggota}
                                                className="text-xs font-bold text-cyan-600 flex items-center gap-1 px-3 py-1 bg-cyan-50 rounded-lg hover:bg-cyan-100 transition-colors"
                                            >
                                                <HiPlus /> Tambah Anggota
                                            </button>
                                        )}
                                    </div>

                                    <div className="space-y-3">
                                        {formData.nama_peserta.map((peserta, index) => (
                                            <div key={index} className={`flex items-end gap-3 p-4 rounded-xl border transition-all ${
                                                isEditing ? 'border-dashed border-cyan-200 bg-cyan-50/30' : 'border-slate-100 bg-slate-50/50'
                                            }`}>
                                                <div className="flex-1 space-y-1">
                                                    <label className="text-[10px] font-bold text-slate-400 uppercase">Nama Anggota {index + 1}</label>
                                                    <input 
                                                        disabled={!isEditing || index === 0}
                                                        className="w-full bg-transparent font-semibold text-slate-800 outline-none border-b border-transparent focus:border-cyan-500"
                                                        value={peserta.nama}
                                                        onChange={(e) => handleUpdateAnggota(index, 'nama', e.target.value)}
                                                    />
                                                </div>
                                                <div className="flex-1 space-y-1">
                                                    <label className="text-[10px] font-bold text-slate-400 uppercase">No. HP</label>
                                                    <input 
                                                        disabled={!isEditing || index === 0}
                                                        className="w-full bg-transparent text-slate-600 outline-none border-b border-transparent focus:border-cyan-500"
                                                        value={peserta.nohp}
                                                        onChange={(e) => handleUpdateAnggota(index, 'nohp', e.target.value)}
                                                    />
                                                </div>
                                                {isEditing && index !== 0 && (
                                                    <button 
                                                        type="button"
                                                        onClick={() => removeAnggota(index)}
                                                        className="p-2 text-red-500 hover:bg-red-100 rounded-lg transition-colors"
                                                    >
                                                        <HiTrash className="w-5 h-5" />
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {isEditing && (
                                    <button 
                                        type="submit"
                                        className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-100 hover:shadow-emerald-200 transition-all active:scale-95"
                                    >
                                        Simpan Perubahan Data AKU
                                    </button>
                                )}
                            </form>
                        </div>

                        {/* Kolom Kanan: Pembayaran */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-8">
                                <Pembayaran />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Daftar;