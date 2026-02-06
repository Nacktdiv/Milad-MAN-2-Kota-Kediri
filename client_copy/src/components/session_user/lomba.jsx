import {} from 'react';
import { HiTicket, HiStatusOnline, HiInformationCircle } from 'react-icons/hi';
import {HiTrophy} from 'react-icons/hi2'
import {  useAuth } from '../../AuthContext';

const Lomba = () => {
  const {event} =  useAuth()

  const kompetisiData = [
    {
      id: 1,
      title: "Web App Development",
      description: "Bangun solusi web inovatif dengan teknologi modern untuk menyelesaikan masalah nyata.",
      price: 150000,
      isOpen: true,
      category: "Programming",
      gradient: "from-blue-950 to-blue-400",
      icon: "🌐"
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Rancang pengalaman pengguna yang intuitif dan antarmuka yang estetis.",
      price: 100000,
      isOpen: true,
      category: "Design",
      gradient: "from-cyan-950 to-cyan-400",
      icon: "🎨"
    },
    {
      id: 3,
      title: "Capture The Flag",
      description: "Uji kemampuan keamanan siber Anda dalam kompetisi hacking berbasis tantangan.",
      price: 125000,
      isOpen: false,
      category: "Security",
      gradient: "from-indigo-950 to-indigo-400",
      icon: "🚩"
    },
    // Tambahkan item lomba lainnya di sini...
  ];

  // Fungsi format Rupiah
  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  };

  return (
    <div className="p-6 bg-cyan-50 min-h-screen px-4  font-poppins">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-primary mb-4 tracking-tight">
            Katalog Kompetisi
          </h1>
          <p className="text-lg text-primary max-w-3xl mx-auto leading-relaxed">
            Pilih kategori yang sesuai dengan keahlianmu dan jadilah pemenang di Garsafa Aranavia 2026.
          </p>
        </div>

        {/* Competition Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {event.map((item, index) => (
            <div 
              key={index}
              className="bg-white flex flex-col rounded-2xl shadow-sm relative overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Card Header dengan Gradient & Badge */}
              <div className={`h-24 bg-gradient-to-r from-secondary/60 to-accent/60 relative flex items-center px-6`}>
                <span className="text-4xl text-primary-light group-hover:scale-110 transition-transform duration-300">
                  <HiTicket/>
                </span>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    item.status_buka == "Buka"
                    ? "bg-green-400 text-green-950 shadow-sm" 
                    : "bg-red-400 text-red-950 shadow-sm"
                  }`}>
                    {item.status_buka}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="mb-4">
                  <p className="text-xs font-bold text-cyan-600 uppercase mb-1">Nama Event</p>
                  <h3 className="text-2xl font-bold text-blue-950 leading-tight">
                    {item.nama_event}
                  </h3>
                </div>

                <p className="text-gray-600 w-full text-sm mb-6 break-words whitespace-normal">
                  {item.deskripsi}
                </p>

                {/* Price & Info Section */}
                <div className="space-y-3 mb-6 p-2 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex flex-col gap-2 items-center justify-between text-gray-700">
                    <span className="flex items-center gap-2 text-sm">
                      <HiTicket className="text-blue-600 w-5 h-5" /> Biaya Pendaftaran
                    </span>
                    <span className="font-bold text-blue-950">{formatRupiah(item.biaya_pendaftaran)}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button 
                  disabled={!item.status_buka}
                  className={`flex items-center justify-center gap-2 w-full font-bold py-3.5 rounded-xl transition-all duration-200 shadow-sm ${
                    item.status_buka == "Buka" 
                    ? "bg-[#2B2889] hover:bg-blue-800 text-white hover:shadow-blue-200" 
                    : "bg-slate-200 text-slate-500 cursor-not-allowed"
                  }`}
                >
                  <HiInformationCircle className="w-5 h-5" />
                  {item.status_buka}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info / General Requirement */}
        <div className="mt-16 bg-primary rounded-3xl p-8 text-primary-light shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/50 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 flex items-center justify-center md:justify-start gap-3">
                <HiTrophy className="text-yellow-400 w-8 h-8" />
                Siapkan Tim Terbaikmu!
              </h3>
              <p className="text-blue-100 opacity-80">
                Daftar sekarang supaya tidak kehabisan kuota!
              </p>
            </div>
            <div className="flex gap-4">
              <div className="text-center px-6 py-3 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10">
                <p className="text-highlight font-bold text-xl">13+</p>
                <p className="text-xs uppercase tracking-widest">Pilihan Lomba</p>
              </div>
              <div className="text-center px-6 py-3 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10">
                <p className="text-highlight font-bold text-xl">Total Jutaan</p>
                <p className="text-xs uppercase tracking-widest">Hadiah Pemenang</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Lomba;