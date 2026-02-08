import {useRef, useState} from 'react'
import { HiQuestionMarkCircle, HiOutlineChevronRight } from 'react-icons/hi';

import Snowflakes from "../assets/snowflakes3.webp"
import useIntersectionObserver from "./intersectionObserver"

function FAQ () {
    const observerGaris1 = useRef(null);
    const intersectionGaris1 = useIntersectionObserver(observerGaris1, { threshold: 0.5 }, false);

    const [activeQuestion, setactiveQuestion] = useState(null)

        const listFaq = [
    {
        question: 'Bagaimana cara mendaftar lomba?',
        answer: 'Caranya sangat mudah, cukup kunjungi dan klik website resmi di miladmantsani9.com.'
    },
    {
        question: 'Apakah terdapat Golden Ticket MAN 2 Kota Kediri?',
        answer: 'Ada. Golden Ticket ini diberikan khusus untuk juara 1 di masing-masing kategori lomba.'
    },
    {
        question: 'Apakah boleh mengikuti lomba lebih dari satu?',
        answer: 'Boleh, asalkan waktu pelaksanaan lomba-lomba tersebut tidak berbenturan atau tidak bersamaan.'
    },
    {
        question: 'Apakah ada batas maksimal peserta jika dari sekolah yang sama?',
        answer: 'Tidak ada. Pihak panitia tidak memberikan batasan jumlah peserta untuk setiap sekolah.'
    },
    {
        question: 'Bagaimana jika Kartu Tanda Pelajar hilang?',
        answer: 'Jangan khawatir, kamu bisa menggunakan surat keterangan aktif yang diminta dari sekolah masing-masing sebagai penggantinya.'
    },
    {
        question: 'Apakah sertifikat dapat digunakan untuk mendaftar PPDB di MAN 2 Kota Kediri?',
        answer: 'Bisa. Sertifikat atau piagam finalis lomba HUT ke-9 MAN 2 Kota Kediri dapat digunakan untuk mendaftar jalur Prestasi Akademik dan Non-Akademik dengan cara dicantumkan saat pendaftaran atau dibawa saat seleksi.'
    }
    ];

    return (
        <section
            id='faq'
            className='relative  bg-primary-light overfow-x-hidden'>
            <div className="absolute inset-0 overfow-x-hidden">
                <svg className="opacity-30 absolute inset-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-70 md:w-100 md:h-100" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="#1976d2" strokeWidth="2" strokeLinecap="round">
                        <line x1="20" y1="5" x2="20" y2="35"/>
                        <line x1="5" y1="20" x2="35" y2="20"/>
                        
                        <line x1="10" y1="10" x2="30" y2="30"/>
                        <line x1="30" y1="10" x2="10" y2="30"/>
                        
                        <polyline points="15 5 20 10 25 5" />
                        <polyline points="15 35 20 30 25 35" />
                        <polyline points="5 15 10 20 5 25" />
                        <polyline points="35 15 30 20 35 25" />
                    </g>
                </svg>
                <svg className="hidden md:block opacity-30 absolute inset-0 left-70 top-70  w-50 h-50 " viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="#1976d2" strokeWidth="2" strokeLinecap="round">
                        <line x1="20" y1="5" x2="20" y2="35"/>
                        <line x1="5" y1="20" x2="35" y2="20"/>
                        
                        <line x1="10" y1="10" x2="30" y2="30"/>
                        <line x1="30" y1="10" x2="10" y2="30"/>
                        
                        <polyline points="15 5 20 10 25 5" />
                        <polyline points="15 35 20 30 25 35" />
                        <polyline points="5 15 10 20 5 25" />
                        <polyline points="35 15 30 20 35 25" />
                    </g>
                </svg>
                <div className='absolute bottom-0 h-18 md:h-22 w-full  flex items-end overfow-x-hidden '>
                    <div className='absolute h-1/2 w-fit slow-living '>
                        <div className='rounded-full h-full w-9 md:w-11 bg-blue-500 bounce-complex '> </div>
                    </div>
                    <div className='absolute h-1/2 w-fit slow-living-a translate-y-[-100]'>
                        <div className='rounded-full h-full w-9 md:w-11 bg-blue-500 bounce-complex-a '> </div>
                    </div>
                </div>
                <div className="hidden md:block absolute right-0 top-100 w-45  h-75 overflow-hidden">
                    <div 
                        className="absolute w-2 h-2 bg-accent rounded-full opacity-60 animate-float" 
                        style={{ left: '20%', top: '85%', animationDelay: '0s', animationDuration: '3.0s' }}>
                    </div>
                    <div 
                        className="absolute w-2 h-2 bg-accent rounded-full opacity-60 animate-float" 
                        style={{ left: '30%', top: '60%', animationDelay: '0.2s', animationDuration: '3.2s' }}>
                    </div>
                    <div 
                        className="absolute w-2 h-2 bg-accent rounded-full opacity-60 animate-float" 
                        style={{ left: '40%', top: '35%', animationDelay: '0.4s', animationDuration: '3.4s' }}>
                    </div>
                    <div 
                        className="absolute w-2 h-2 bg-accent rounded-full opacity-60 animate-float" 
                        style={{ left: '50%', top: '10%', animationDelay: '0.6s', animationDuration: '3.6s' }}>
                    </div>
                </div>
                <div className="hidden md:block absolute left-0 top-145 w-45  h-75 overflow-hidden">
                    <div 
                        className="absolute w-2 h-2 bg-accent rounded-full opacity-60 animate-float" 
                        style={{ left: '20%', top: '85%', animationDelay: '0s', animationDuration: '3.0s' }}>
                    </div>
                    <div 
                        className="absolute w-2 h-2 bg-accent rounded-full opacity-60 animate-float" 
                        style={{ left: '30%', top: '60%', animationDelay: '0.2s', animationDuration: '3.2s' }}>
                    </div>
                    <div 
                        className="absolute w-2 h-2 bg-accent rounded-full opacity-60 animate-float" 
                        style={{ left: '40%', top: '35%', animationDelay: '0.4s', animationDuration: '3.4s' }}>
                    </div>
                    <div 
                        className="absolute w-2 h-2 bg-accent rounded-full opacity-60 animate-float" 
                        style={{ left: '50%', top: '10%', animationDelay: '0.6s', animationDuration: '3.6s' }}>
                    </div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/3 w-4/5 md:w-1/2 aspect-square"> 
                    <div 
                        className="absolute w-2 h-2 bg-accent rounded-full opacity-60 animate-float" 
                        style={{ left: '90%', top: '50%', transform: 'translate(-50%, -50%)', animationDelay: '0.0s', animationDuration: '3.0s' }}>
                    </div>

                    <div 
                        className="absolute w-2 h-2 bg-accent rounded-full opacity-60 animate-float" 
                        style={{ left: '84.64%', top: '70%', transform: 'translate(-50%, -50%)', animationDelay: '0.2s', animationDuration: '3.1s' }}>
                    </div>

                    <div 
                        className="absolute w-2 h-2 bg-accent rounded-full opacity-60 animate-float" 
                        style={{ left: '70%', top: '84.64%', transform: 'translate(-50%, -50%)', animationDelay: '0.4s', animationDuration: '3.2s' }}>
                    </div>

                    <div 
                        className="absolute w-2 h-2 bg-accent rounded-full opacity-60 animate-float" 
                        style={{ left: '50%', top: '90%', transform: 'translate(-50%, -50%)', animationDelay: '0.6s', animationDuration: '3.3s' }}>
                    </div>

                    <div 
                        className="absolute w-2 h-2 bg-accent rounded-full opacity-60 animate-float" 
                        style={{ left: '30%', top: '84.64%', transform: 'translate(-50%, -50%)', animationDelay: '0.8s', animationDuration: '3.4s' }}>
                    </div>

                    <div 
                        className="absolute w-2 h-2 bg-accent rounded-full opacity-60 animate-float" 
                        style={{ left: '15.36%', top: '70%', transform: 'translate(-50%, -50%)', animationDelay: '1.0s', animationDuration: '3.5s' }}>
                    </div>

                    <div 
                        className="absolute w-2 h-2 bg-accent rounded-full opacity-60 animate-float" 
                        style={{ left: '10%', top: '50%', transform: 'translate(-50%, -50%)', animationDelay: '1.2s', animationDuration: '3.6s' }}>
                    </div>

                    <div 
                        className="absolute w-2 h-2 bg-accent rounded-full opacity-60 animate-float" 
                        style={{ left: '15.36%', top: '30%', transform: 'translate(-50%, -50%)', animationDelay: '1.4s', animationDuration: '3.5s' }}>
                    </div>

                    <div 
                        className="absolute w-2 h-2 bg-accent rounded-full opacity-60 animate-float" 
                        style={{ left: '30%', top: '15.36%', transform: 'translate(-50%, -50%)', animationDelay: '1.6s', animationDuration: '3.4s' }}>
                    </div>

                    <div 
                        className="absolute w-2 h-2 bg-accent rounded-full opacity-60 animate-float" 
                        style={{ left: '50%', top: '10%', transform: 'translate(-50%, -50%)', animationDelay: '1.8s', animationDuration: '3.3s' }}>
                    </div>

                    <div 
                        className="absolute w-2 h-2 bg-accent rounded-full opacity-60 animate-float" 
                        style={{ left: '70%', top: '15.36%', transform: 'translate(-50%, -50%)', animationDelay: '2.0s', animationDuration: '3.2s' }}>
                    </div>

                    <div 
                        className="absolute w-2 h-2 bg-accent rounded-full opacity-60 animate-float" 
                        style={{ left: '84.64%', top: '30%', transform: 'translate(-50%, -50%)', animationDelay: '2.2s', animationDuration: '3.1s' }}>
                    </div>

                </div>
            </div>
            <div className="relative z-10 py-16 md:py-28 px-6 overflow-x-hidden flex flex-col justify-center items-center ">
                <div className="text-4xl text-center md:text-6xl flex justify-center items-center gap-4 md:gap-8">
                    <img src={Snowflakes} alt="" className="spin-test opacity-50 h-auto w-10 md:w-14" />
                    <h2 className="font-poppins font-bold text-fill-gradient bg-gradient-to-r from-secondary to-accent">Pertanyaan Umum</h2>
                    <img src={Snowflakes} alt="" className="spin-test opacity-50 h-auto w-10 md:w-14" />
                </div>
                <p className="font-poppins font-medium mt-6 md:mt-12 text-lg md:text-3xl px-4 text-primary text-center">Temukan jawaban untuk pertanyaan yang sering diajukan tentang <span className="text-xl md:text-4xl text-shadow-md text-highlight">Aranavia</span></p>
                <div 
                    className="w-30 md:w-70 h-2 mt-4 md:mt-8"
                    ref={observerGaris1}>
                    <svg  
                        preserveAspectRatio="none"
                        className="h-full w-full rounded-full">
                        <line 
                            x1="0" 
                            y1="0" 
                            x2="100%" 
                            y2="100%" 
                            stroke='#1976d2'
                            strokeWidth="100%"
                            className={`drop-shadow-lg ${intersectionGaris1 ? 'scale-x-animation' : ''}`}
                        />
                    </svg>
                </div>
                <div className='mt-18 mx-auto w-full max-w-6xl flex flex-col gap-5'>
                    {listFaq.map((item, index) => {
                        const isActive = activeQuestion === index;
                        return (
                            <div 
                                key={index}
                                onClick={() => setactiveQuestion(isActive ? null : index)} 
                                className={`group w-full flex flex-col relative cursor-pointer transition-all duration-500 border-2 rounded-[2rem] py-6 px-6 md:px-10 
                                    ${isActive 
                                        ? 'border-secondary bg-white shadow-2xl scale-[1.02]' 
                                        : 'border-gray-200 bg-white/30 hover:border-gray-400'}`}
                            >
                                <div className='flex items-center justify-between w-full'>
                                    <div className="flex items-center gap-4">
                                        <div className={`transition-colors duration-500 ${isActive ? 'text-secondary' : 'text-primary'}`}>
                                            <HiQuestionMarkCircle className='text-3xl md:text-4xl'/>
                                        </div>
                                        <h3 className={`flex-1 text-md md:text-xl max-w-4/5 md:max-w-full font-semibold transition-colors duration-500 
                                            ${isActive ? 'text-secondary' : 'text-gray-700'}`}>
                                            {item.question}
                                        </h3>
                                    </div>
                                    
                                    <div className={`transform transition-all duration-500  rounded-full p-2 
                                        ${isActive ? 'bg-secondary text-white rotate-90' : 'bg-accent/50 text-secondary group-hover:bg-accent'}`}>
                                        <HiOutlineChevronRight className='text-md md:text-2xl'/>
                                    </div>
                                </div>
                                
                                <div className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100 mt-5' : 'grid-rows-[0fr] opacity-0'}`}>
                                    <div className="overflow-hidden">
                                        <p className="text-gray-600 leading-relaxed border-l-4 border-secondary/30 pl-4 md:text-lg">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                
            </div>
        </section>
    )
}

export default FAQ