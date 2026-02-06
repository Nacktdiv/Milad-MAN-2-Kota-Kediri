    import {use, useState, useEffect} from 'react';
    import { 
    HiUser, 
    HiSearch,
    HiPlus,
    HiX
    } from "react-icons/hi";
    // import {HiTrophy} from "react-icons/hi2"
    import {useAuth} from '../../AuthContext';
    import mencariEvent from '../../api/queryAdmin';
    import mengupdateEvent from '../../api/patchAdmin';
    import menghapusEvent from '../../api/deleteAdmin';
    import membuatEvent from '../../api/postAdmin';
    import { showError, showSuccess } from '../swallTemplate';

const Admin = () => {
    const {user, pendaftaran} =  useAuth()

    const [search, setSearch] = useState()
    const [event, setEvent] = useState(null)
    const [status, setStatus] = useState([])

    useEffect(() => {
        if (event && event.length > 0) {
            setStatus(new Array(event.length).fill(false))
        }
    }, [event?.length])

    const handleChange = (indexActual, e) => {
        if (e.target.name === "biaya_pendaftaran") {
            const value = e.target.value.replace(/[^0-9]/g, ''); 
            setEvent(prevEvent => {
                const updatedEvents = [...prevEvent]
                updatedEvents[indexActual] = {
                    ...updatedEvents[indexActual],
                    "biaya_pendaftaran" : value
                }
                return updatedEvents
            })
        } else {
            setEvent(prevEvent => {
                const updatedEvents = [...prevEvent]
                updatedEvents[indexActual] = {
                    ...updatedEvents[indexActual],
                    [e.target.name] : e.target.value
                }
                return updatedEvents
            })
        }
    }

    const handleStatusChange = (index) => {
        setStatus(prevStatus => {
            const updatedStatus = [...prevStatus];
            updatedStatus[index] = true;
            return updatedStatus;
        });
    }

    const handleSubmit = async (e, index) => {
        e.preventDefault()
        try {
            // console.log(event[index])
            const res = await mengupdateEvent(event[index])
            setEvent(prevEvent => {
                const updatedEvents = [...prevEvent]
                updatedEvents[index] = res.payload.data
                return updatedEvents
            })
            showSuccess("DATA EVENT BERHASIL DIPERBARUI", res.message)
        } catch (error){
            showError("GAGAL MEMPERBARUI DATA EVENT", error.message)
        }
    }

    const handleDelete = async (e, index) => {
        e.preventDefault()
        try {
            const res = await menghapusEvent(event[index])
            setEvent(prevEvent => prevEvent.filter((_, i) => i !== index))
            showSuccess("DATA EVENT BERHASIL DIHAPUS", res.message)
        } catch (error) {
            showError("GAGAL MENGHAPUS DATA EVENT", error.message)
        }
    }

    const handleSearch = async () => {
        try {
            const res = await mencariEvent(search || "")
            setEvent(res.payload.data)
            showSuccess("PENCARIAN EVENT BERHASIL", `Ditemukan ${res.payload.data.length} data pendaftaran yang sesuai dengan kata kunci "${search}"`)
        } catch (error) {
            showError("PENCARIAN EVENT GAGAL", error.message)
        }
    }

    return (
        <div className="max-w-screen md:max-w-[calc(100vw-288px)] mx-auto space-y-6 px-4 py-8 font-poppins">
            
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl p-6 text-white shadow-lg">
                <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold mb-2">
                    {user}👋
                    </h1>
                </div>
                <div className="hidden md:block">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                    <HiUser className="w-12 h-12 text-yellow-300" />
                    </div>
                </div>
                </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl border-none shadow-md overflow-hidden p-6">
                <div className='w-full rounded-full bg-gradient-to-r from-secondary to-accent p-1'>
                    <div className='w-full rounded-full bg-white flex p-2 gap-2'>
                        <input 
                            type="text" 
                            placeholder='Silahkan cari event' 
                            className='appearance-none bg-transparent focus:ring-0 focus:outline-none w-full'
                            onChange={(e) => setSearch(e.target.value)}/>
                        <button
                            onClick={() => handleSearch()}>
                            <HiSearch className='text-2xl'/>
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto mt-6 flex flex-col gap-4 mt-6">
                    <h2 className='text-xl font-bold '>Daftar Event</h2>
                    <table className='border-collapse divide-y-2 divide-primary/80 border-2 border-primary/80 min-w-600px'>
                        <thead >
                            <tr className='text-center font-bold divide-x-2 divide-primary/80 '>
                                <th className='px-4 w-[5%]'>NO.</th>
                                <th className='px-4 w-[15%]'>Nama Event</th>
                                <th className='px-4 w-[25%]'>Deskripsi</th>
                                <th className='px-4 w-[20%]'>Biaya Pendaftaran</th>
                                <th className='px-4 w-[15%]'>Status Buka</th>
                                <th className='px-4 w-[15%]'>Tipe Event</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {event && event.length > 0 ? event.map((item, index) => {
                                return tableItem(index + 1, item.nama_event, item.deskripsi, item.biaya_pendaftaran, item.status_buka, item.tipe_event, handleChange, handleSubmit, handleDelete, handleStatusChange, status)
                            }) : (
                                <tr>
                                    <td colSpan="6" className="text-center py-4">Tidak ada data</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <AddEventForm onEventAdded={handleSearch}  />
            </div>
            
        </div>
    );
    };

    const tableItem = (index, nama_event, deskripsi, biaya_pendaftaran, status_buka, tipe_event, handleChange, handleSubmit, handleDelete, handleStatusChange, status) => {
        const formatRupiah = (angka) => {
            return new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0, // Menghilangkan ,00 di belakang
            }).format(angka);
        };

        const indexActual = index - 1
        return (
            <tr className='text-center text-sm divide-x-2 divide-primary/80 border-b hover:bg-gray-50/50 transition-colors'>
                <td className="p-3 w-12">{index}</td>
                <td className='p-2 '><span className='text-red-500'>{nama_event}</span></td>
                <td className='p-2 relative'>
                    <textarea 
                        name='deskripsi'
                        defaultValue={deskripsi}
                        rows={1}
                        className='h-full w-full p-2 appearance-none bg-transparent focus:bg-white focus:ring-2 focus:ring-accent/60 focus:outline-none focus:absolute focus:z-50 focus:top-0 focus:left-0 focus:h-auto focus:min-h-[100px] focus:shadow-xl focus:p-3 transition-all duration-200 resize-none rounded overflow-hidden'
                        placeholder="Deskripsi..."
                        onChange={(e) => {
                            handleChange(indexActual, e)
                            handleStatusChange(indexActual)
                        }}
                    />
                </td>
                <td className='p-2'>
                    <input 
                        type="text" 
                        name='biaya_pendaftaran'
                        defaultValue={formatRupiah(biaya_pendaftaran)}
                        className='w-full p-2 text-right appearance-none bg-transparent focus:ring-1 focus:ring-accent/60 focus:outline-none rounded'
                        onChange={(e) => {
                            handleChange(indexActual, e)
                            handleStatusChange(indexActual)
                        }}
                    />
                </td>
                <td className='p-2'>
                    <select 
                        defaultValue={status_buka} 
                        id="status_buka" 
                        name='status_buka'
                        onChange={(e) => {
                            handleChange(indexActual, e)
                            handleStatusChange(indexActual)
                        }}>
                        <option value="Tutup">Tutup</option>
                        <option value="Buka">Buka</option>
                    </select>
                </td>
                <td className='p-2'>
                    <select 
                        defaultValue={tipe_event} 
                        name="tipe_event" 
                        id="tipe_event"
                        onChange={(e) => {
                            handleChange(indexActual, e)
                            handleStatusChange(indexActual)
                        }}>
                        <option value="Kelompok">Kelompok</option>
                        <option value="Individual">Individual</option>
                    </select>
                </td>
                <td className='p-2'>
                    <button 
                        className='px-4 py-2 disabled:bg-slate-400 bg-highlight text-black rounded-md hover:bg-highlight/80 transition-colors'
                        disabled={!status[indexActual]}
                        onClick={(e) => handleSubmit(e, indexActual)}
                    >
                        Change
                    </button>
                </td>
                <td className='p-2'>
                    <button 
                        className='px-4 py-2 bg-red-500 text-black rounded-md hover:bg-highlight/80 transition-colors'
                        onClick={(e) => handleDelete(e, indexActual)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        )
    }

    const AddEventForm = ({ onEventAdded }) => {
        const [isOpen, setIsOpen] = useState(false);
        const [formData, setFormData] = useState({
            nama_event: '',
            deskripsi: '',
            biaya_pendaftaran: '',
            status_buka: 'Buka',
            tipe_event: 'Individual'
        });

        const handleChange = (e) => {
            const { name, value } = e.target;
            if (name === "biaya_pendaftaran") {
                setFormData(prev => ({ ...prev, [name]: value.replace(/[^0-9]/g, '') }));
            } else {
                setFormData(prev => ({ ...prev, [name]: value }));
            }
        };

        const onSubmit = async (e) => {
            e.preventDefault();
            try {
                // Logic to send data to your backend
                const res = await membuatEvent(formData);
                showSuccess("BERHASIL", "Event baru telah ditambahkan");
                setIsOpen(false);
                setFormData({ nama_event: '', deskripsi: '', biaya_pendaftaran: '', status_buka: 'Buka', tipe_event: 'Individual' });
                if (onEventAdded) onEventAdded(); // Refresh the table list
            } catch (error) {
                showError("GAGAL", error.message);
            }
        };

        return (
            <div className="mt-6">
                {!isOpen ? (
                    <button 
                        onClick={() => setIsOpen(true)}
                        className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl shadow-md hover:opacity-90 transition-all"
                    >
                        <HiPlus className="text-xl" /> Tambah Event Baru
                    </button>
                ) : (
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 animate-in fade-in slide-in-from-top-4 duration-300">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-primary">Form Tambah Event</h2>
                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-red-500">
                                <HiX className="text-2xl" />
                            </button>
                        </div>

                        <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-600">Nama Event</label>
                                <input 
                                    name="nama_event"
                                    value={formData.nama_event}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-secondary outline-none"
                                    placeholder="Contoh: Lomba Coding 2026"
                                    required
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-600">Biaya (IDR)</label>
                                <input 
                                    name="biaya_pendaftaran"
                                    value={formData.biaya_pendaftaran}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-secondary outline-none"
                                    placeholder="Hanya angka (Contoh: 50000)"
                                    required
                                />
                            </div>

                            <div className="space-y-1 md:col-span-2">
                                <label className="text-sm font-semibold text-gray-600">Deskripsi</label>
                                <textarea 
                                    name="deskripsi"
                                    value={formData.deskripsi}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-secondary outline-none resize-none"
                                    placeholder="Jelaskan detail event..."
                                    required
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-600">Status</label>
                                <select 
                                    name="status_buka"
                                    value={formData.status_buka}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-secondary outline-none"
                                >
                                    <option value="Buka">Buka</option>
                                    <option value="Tutup">Tutup</option>
                                </select>
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-600">Tipe Event</label>
                                <select 
                                    name="tipe_event"
                                    value={formData.tipe_event}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-secondary outline-none"
                                >
                                    <option value="Individual">Individual</option>
                                    <option value="Kelompok">Kelompok</option>
                                </select>
                            </div>

                            <div className="md:col-span-2 flex justify-end gap-3 mt-4">
                                <button 
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                                >
                                    Batal
                                </button>
                                <button 
                                    type="submit"
                                    className="px-6 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 shadow-sm"
                                >
                                    Simpan Event
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        );
    };


    export default Admin
