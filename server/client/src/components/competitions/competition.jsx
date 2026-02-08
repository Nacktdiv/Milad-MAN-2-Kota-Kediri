import React from "react";
import { Helmet } from 'react-helmet-async'
import { HiHome, HiArrowRight, HiUsers, HiBookOpen, HiUser } from "react-icons/hi";
import { useParams, Link } from "react-router";
import { DATA_LOMBA } from "./lombaData"; 
import Navbar from "../navbar";
import Footer from "../footer";

const Competition = () => {
    const { idLomba } = useParams();
    const data = DATA_LOMBA[idLomba];

    if (!data) {
        return (
            <div className="h-screen bg-primary flex flex-col items-center justify-center text-white font-poppins">
                <h1 className="text-2xl font-bold mb-4">Lomba Tidak Ditemukan</h1>
                <Link to="/" className="px-6 py-2 bg-secondary rounded-full hover:bg-highlight transition">
                    Kembali ke Home
                </Link>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>{data.nama} - Kompetisi Bergengsi SMP/MTs se-Jawa Timur</title>
                <meta name="description" content={data.metadesc} />
            </Helmet>
            <Navbar />
            <div className="min-h-screen font-poppins bg-white">
                <div className="h-16 w-screen"></div>

                <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white shadow-sm">
                    <div className="max-w-6xl mx-auto">
                        <nav className="text-primary flex items-center justify-end space-x-3 text-sm">
                            
                            <span className="text-primary font-bold text-base">{data?.nama}</span>

                            <HiArrowRight className="text-xl"/>

                            <Link className="flex items-center space-x-2 text-primary hover:text-secondary transition duration-300" to="/">
                                <HiHome className="text-xl"/>
                                <span className="font-medium">Home</span>
                            </Link>
                        </nav>
                    </div>
                </section>

                <section className="pt-8 pb-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 lg:gap-12 gap-8 items-start">
                            
                            {/* Image Column */}
                            <div className="order-1 lg:order-1">
                                <div className="relative overflow-hidden transition-all duration-300 max-w-sm mx-auto lg:max-w-full">
                                    <img 
                                        alt={data?.nama} 
                                        loading="lazy" 
                                        className="w-full h-auto object-cover rounded-xl shadow-2xl" 
                                        src={data?.flyer} 
                                    />
                                </div>
                            </div>
                            
                            {/* Details Column */}
                            <div className="order-2 lg:order-2 space-y-8">
                                <div>
                                    <h1 className="text-4xl font-extrabold text-primary mb-2 leading-tight">
                                        {data?.nama}
                                    </h1>
                                    <div className="w-24 h-1 bg-gradient-to-r from-highlight via-accent to-secondary rounded-full"></div>
                                </div>
                                
                                <div className="space-y-4">
                                    {data?.registrasi.map((item, index) => {
                                        const dateNow = new Date()
                                        const deadline = new Date(item.deadline)
                                        if (deadline >= dateNow) {
                                            return (item.gelombang === '' ? 
                                            <div 
                                                key={item + 1}
                                                className="flex items-center gap-3">
                                                <div className="w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                                                    <span className="text-white font-bold text-sm">{index + 1}</span>
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-sm font-semibold text-primary"> Pendaftaran </p>
                                                    <p className="text-base font-extrabold text-primary">Rp. {item.price}</p>
                                                    <p className="text-xs text-primary/70">{item.tanggal} Dibuka</p>
                                                </div>
                                            </div>
                                            : 
                                            <div 
                                                key={item + 1}
                                                className="flex items-center gap-3">
                                                <div className="w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                                                    <span className="text-white font-bold text-sm">{item.gelombang}</span>
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-sm font-semibold text-primary">Gelombang {item.gelombang}</p>
                                                    <p className="text-base font-extrabold text-primary">Rp. {item.price}</p>
                                                    <p className="text-xs text-primary/70">{item.tanggal} Dibuka</p>
                                                </div>
                                            </div>)
                                        } else {
                                            return (item.gelombang === '' ? 
                                            <div 
                                                key={item + 1}
                                                className="flex items-center gap-3 opacity-70">
                                                <div className="w-8 h-8 bg-gray-300 rounded-lg flex items-center justify-center">
                                                    <span className="text-gray-700 font-bold text-sm">{index + 1}</span>
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-sm font-semibold text-gray-700">
                                                        Pendaftaran
                                                        <span className="align-middle ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-gray-300 text-gray-700">Selesai</span>
                                                    </p>
                                                    <p className="text-base font-extrabold text-gray-700">Rp. {item.price}</p>
                                                    <p className="text-xs text-gray-500">{item.tanggal} Ditutup</p>
                                                </div>
                                            </div>
                                            :
                                            <div 
                                                key={item + 1}
                                                className="flex items-center gap-3 opacity-70">
                                                <div className="w-8 h-8 bg-gray-300 rounded-lg flex items-center justify-center">
                                                    <span className="text-gray-700 font-bold text-sm">{item.gelombang}</span>
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-sm font-semibold text-gray-700">
                                                        Gelombang {item.gelombang}
                                                        <span className="align-middle ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-gray-300 text-gray-700">Selesai</span>
                                                    </p>
                                                    <p className="text-base font-extrabold text-gray-700">Rp. {item.price}</p>
                                                    <p className="text-xs text-gray-500">{item.tanggal} Ditutup</p>
                                                </div>
                                            </div>)
                                        }
                                        })}

                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                                            <HiUsers className="text-xl text-white"/>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-primary">Tim</p>
                                            <p className="text-base font-extrabold text-primary">{data?.tim === '' ? "Individual" : data?.tim}</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <p className="text-base text-primary leading-relaxed">
                                        {data?.deskripsi}
                                    </p>
                                </div>
                                
                                <div className="flex flex-col flex-wrap sm:flex-row gap-4 pt-2">
                                    <a target="_blank" rel="noreferrer" className="flex flex-1 items-center justify-center gap-1 px-3 py-4 rounded-full bg-gradient-to-r from-secondary to-accent text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition duration-300" href={data?.guidebook}>
                                        <HiBookOpen className="text-white text-lg"/>
                                        <span className="text-white text-sm">Guidebook</span>
                                    </a>
                                    {data?.kontak.map((item, index) => (
                                        <a key={index} target="_blank" rel="noreferrer" className="flex flex-1 justify-center items-center gap-1 px-3 py-4 rounded-full bg-gradient-to-r from-secondary to-accent text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition duration-300" href={item.link}>
                                            <HiUser className="text-white text-lg"/>
                                            <span className="block text-white text-sm font-semibold">CP. {item.nama}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-light via-primary to-primary">
                    <div className="max-w-6xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-2 mb-4 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-highlight/30 text-white">
                            <div className="w-2 h-2 bg-highlight rounded-full animate-pulse"></div>
                            <span className="text-sm font-semibold tracking-wide uppercase">Ready to Compete?</span>
                            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                        </div>
                        <h2 className="text-4xl font-extrabold text-white mb-3">
                            Bergabunglah dengan Kompetisi
                        </h2>

                        <p className="text-primary-light text-lg mb-6 text-white/70">
                            Daftar sekarang dan tunjukkan kemampuan terbaikmu
                        </p>
                        <div className="w-20 h-1 mb-8 bg-gradient-to-r from-highlight to-accent mx-auto rounded-full"></div>
                        <div className="flex flex-col sm:flex-row md:justify-center gap-5 ">
                            {data?.daftar.map((item, index) => (
                                <a 
                                key={index}
                                target="_blank" 
                                rel="noreferrer"
                                className="flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-secondary to-accent text-white font-semibold shadow-2xl hover:scale-105 transition duration-500 border border-highlight/50" 
                                href={item.link}
                                >
                                    <span className="text-white">{item.nama}</span>
                                </a>
                            ))}
                            
                        </div>
                    </div>
                </section>

                <Footer/>
            </div>
        </>
    );
}

// Komponen Pembantu tetap sama agar tidak berulang
const TimeSegment = ({ value, label }) => (
    <div className="p-3 bg-gray-50 rounded-lg shadow-inner min-w-[70px]">
        <p className="text-3xl font-extrabold text-primary leading-none">{value}</p>
        <p className="text-xs font-medium text-gray-500 mt-1">{label}</p>
    </div>
);

export default Competition;

