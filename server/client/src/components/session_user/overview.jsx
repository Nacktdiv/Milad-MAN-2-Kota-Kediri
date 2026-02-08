    import { useEffect} from 'react';
    import { 
    HiUser, 
    HiPencilAlt, 
    HiPhone, 
    HiMail, 
    HiUsers 
    } from "react-icons/hi";
    import {HiTrophy} from "react-icons/hi2"
    import { useAuth} from '../../AuthContext';

    const Overview = () => {
    const {user, pendaftaran, event} =  useAuth()


    return (
        <div className="max-w-5xl mx-auto space-y-6 px-4 py-8 font-poppins">
        
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
            <div>
                <h1 className="text-3xl font-bold mb-2">
                Selamat Datang, {user?.nama_lengkap}👋
                </h1>
                <p className="text-blue-100 text-lg">
                Yuk Tunjukkan Kemampuanmu di Garsafa Aranavia 2026!
                </p>
            </div>
            <div className="hidden md:block">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                <HiTrophy className="w-12 h-12 text-yellow-300" />
                </div>
            </div>
            </div>
        </div>

        {/* Profile Detail Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl border-none shadow-md overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <div className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <HiUser className="text-highlight w-6 h-6" />
                Detail User
            </div>
            <a href="/session/dashboard/editprofil">
                <button className="inline-flex items-center gap-2 px-4 py-2 border border-highlight text-highlight rounded-md text-sm font-medium transition-all hover:bg-cyan-400 hover:text-white cursor-pointer">
                <HiPencilAlt className="w-4 h-4" />
                Edit
                </button>
            </a>
            </div>

            <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Left Column */}
                <div className="space-y-4">
                <InfoItem 
                    icon={<HiUser className="text-slate-600 w-5 h-5" />} 
                    label="Nama Lengkap" 
                    value={user?.nama_lengkap} 
                />
                <InfoItem 
                    icon={<HiPhone className="text-slate-600 w-5 h-5" />} 
                    label="No Telepon" 
                    value={user?.nomor_telepon} 
                />
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                <InfoItem 
                    icon={<HiMail className="text-slate-600 w-5 h-5" />} 
                    label="Email" 
                    value={user?.email} 
                />
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg">
                    <HiTrophy className="text-cyan-600 w-5 h-5" />
                    <div>
                    <p className="text-sm text-slate-600">Kategori Lomba</p>
                    <div className='flex gap-2 flex-wrap'>
                        {pendaftaran && event.map ((item, index) => {
                            const eventDaftar = pendaftaran?.id_event
                            if(item?.id_event === eventDaftar){
                                return (
                                    <span
                                        key={item?.id_event}
                                        className="items-center justify-center whitespace-nowrap px-3 py-1 mt-1 rounded-md text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-sm">
                                        {item?.nama_event}
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
                </div>
                </div>

            </div>
            </div>
        </div>
        </div>
    );
    };

    /**
     * Sub-komponen untuk baris informasi agar kode lebih DRY (Don't Repeat Yourself)
     */
    const InfoItem = ({ icon, label, value }) => (
    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100/50">
        {icon}
        <div>
        <p className="text-sm text-slate-600">{label}</p>
        <p className="font-semibold text-slate-800">{value}</p>
        </div>
    </div>
    );

    export default Overview;