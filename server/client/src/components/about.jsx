import { useRef } from "react"

import Snowflakes from "../assets/snowflakes2.webp"
import Aranavia_Garsafa from "../assets/garsafa_aranavia.webp"

import useIntersectionObserver from "./intersectionObserver"

function About () {
    const observerContentSideLeft = useRef(null)
    const intersectionContentSideLeft = useIntersectionObserver(observerContentSideLeft,  { threshold: 0.25 }, false)
    const observerContentSideRight = useRef(null)
    const intersectionContentSideRight = useIntersectionObserver(observerContentSideRight,  { threshold: 0.25 }, false)
    const observerLogo = useRef(null)
    const intersectionLogo = useIntersectionObserver(observerLogo, {threshold: 0.25}, false)

    const ImageSnowflakes = ({alt, className}) => {
        return (
            <img src={Snowflakes} loading='lazy' alt={alt} className={className}/>
        )
    }

    const GarsafaAranavia = ({alt, className}) => {
        return (
            <img src={Aranavia_Garsafa} loading='lazy' alt={alt} className={className}/>
        )
    }

    return (
        <>
            <div 
                id="about"
                className=" w-screen bg-secondary overflow-x-hidden cv-auto">
                <div className="absolute inset-0 h-28 bg-linear-to-b from-white to-transparent "></div>
                <div className="absolute -bottom-0 left-5 bg-white/25 blur-2xl w-50 h-75"></div>
                <div className="absolute top-0 right-5 bg-white/25 blur-2xl w-45 h-70"></div>
                
                {/* FOR MOBILE */}
                <div className="block md:hidden absolute  w-30 h-30 bottom-60 left-15">
                    <div className="absolute bg-white/25 blur-2xl inset-0 flex items-center justify-center"></div>
                    {/* <img src={Snowflakes} alt="" className="spin-test opacity-50" /> */}
                    <ImageSnowflakes alt="" className="spin-test opacity-50"/>
                </div>
                <div className="block md:hidden  absolute  w-30 h-30 top-40 right-15">
                    <div className="absolute bg-white/25 blur-2xl inset-0 flex items-center justify-center"></div>
                    <ImageSnowflakes alt="" className="spin-test opacity-50"/>
                </div>

                {/* FOR DESKTOP */}
                <div className="hidden md:block absolute  w-30 h-30 bottom-60 left-5">
                    <div className="absolute bg-white/25 blur-2xl inset-0 flex items-center justify-center"></div>
                    <ImageSnowflakes alt="" className="spin-test opacity-50"/>
                </div>
                <div className="hidden md:block  absolute  w-30 h-30 top-40 right-5">
                    <div className="absolute bg-white/25 blur-2xl inset-0 flex items-center justify-center"></div>
                    <ImageSnowflakes alt="" className="spin-test opacity-50"/>
                </div>
                <div className=" hidden md:block absolute  w-30 h-30 bottom-12 left-140">
                    <div className="absolute bg-white/25 blur-2xl inset-0 flex items-center justify-center"></div>
                    <ImageSnowflakes alt="" className="spin-test opacity-50"/>
                </div>
                <div className=" hidden md:block absolute  w-30 h-30 top-12 left-50">
                    <div className="absolute bg-white/25 blur-2xl inset-0 flex items-center justify-center"></div>
                    <ImageSnowflakes alt="" className="spin-test opacity-50"/>
                </div>
                
                <svg className="block  absolute top-35 left-0 opacity-50 rotate-90" width="150" height="100" viewBox="0 0 600 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 75 Q 100 0 200 75 Q 300 150 400 75 Q 500 0 600 75" stroke="#e0f7fa" strokeWidth="6" fill="none"/>
                </svg>

                <svg className="block  absolute bottom-10 -right-0 opacity-50 rotate-90" width="150" height="100" viewBox="0 0 600 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 75 Q 100 0 200 75 Q 300 150 400 75 Q 500 0 600 75" stroke="#e0f7fa" strokeWidth="6" fill="none"/>
                </svg>

                <svg className="block  absolute top-30 left-1/2 animate-bounce opacity-50" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="30 5, 55 20, 55 40, 30 55, 5 40, 5 20" 
                            stroke="#00C5D8" strokeWidth="2" fill="none"/>
                    
                    <polyline points="30 5 30 55" stroke="#00C5D8" strokeWidth="2"/>
                    <polyline points="5 20 55 40" stroke="#00C5D8" strokeWidth="2"/>
                    <polyline points="5 40 55 20" stroke="#00C5D8" strokeWidth="2"/>
                </svg>

                <svg className="hidden md:block  absolute bottom-100 left-90 opacity-30 spin-test2" width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="#E0F7FA" strokeWidth="2" strokeLinecap="round">
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

                <svg className="hidden md:block absolute bottom-20 left-250 opacity-30 spin-test2" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="#E0F7FA" strokeWidth="2" strokeLinecap="round">
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

                <svg className="hidden md:block  absolute bottom-30 left-50 opacity-30 spin-test2" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="#E0F7FA" strokeWidth="2" strokeLinecap="round">
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
                <div className="flex flex-col py-25 md:py-15 gap-15 px-5 md:px-0 justify-between md:justify-center">
                    <h2
                        ref={observerLogo}
                        className={`flex justify-center items-center md:w-1/2 md:self-center
                                    ${intersectionLogo ? 'fade-in-up' : 'opacity-0 pointer-event-none'}`}>
                        <span className="sr-only">Tentang Garsafa Aranavia</span>
                        <GarsafaAranavia alt="Judul Garsava Aranavia di acara milad MAN 2 Kota Kediri yang ke-9" className="object-contain h-full w-full"/>
                    </h2>
                    <div 
                        ref={observerContentSideLeft}
                        className={`flex flex-col md:flex-row gap-10 items-center md:p-5 text-primary w-full md:w-[90%]  md:bg-primary-light md:rounded-r-2xl md:bg-opacity-30  md:backdrop-blur-lg md:border md:border-white md:border-opacity-60 md:shadow-xl md:shadow-blue-200/50 ${
                            intersectionContentSideLeft ? 'md:arise-from-side-left fade-in-up' : 'opacity-0 pointer-event-none'
                        }`}>
                            <div className={`flex flex-col justify-center items-center gap-10 ${
                                intersectionContentSideLeft ? 'md:child-fade-in-up' : ''
                            }`}>
                                <h3 className="font-poppins text-4xl md:text-6xl font-bold text-fill-gradient bg-white md:bg-gradient-to-r from-secondary to-accent">What Is GARSAFA?</h3>
                                <p className="font-poppins">GARSAFA adalah akronim dari Garvi, Mantsani, dan Art of Fame. Garvi berasal dari bahasa Sansekerta yang berarti kebanggaan, Mantsani berasal dari bahasa Arab yang merupakan identitas madrasah kami, Art of Fame memiliki arti kami menampilkan penampilan karya seni dari siswa MAN 2 Kota Kediri. Dari semua makna di atas, GARSAFA akan menjadi ajang kebanggaan dari MAN 2 Kota Kediri.</p>
                            </div>
                    </div>
                    <div 
                        ref={observerContentSideRight}
                        className={`flex flex-col md:flex-row gap-10 justify-center items-center md:p-5 gap-10 text-primary w-full  md:w-[90%]  md:bg-primary-light md:rounded-l-2xl md:self-end md:bg-opacity-30  md:backdrop-blur-lg md:border md:border-white md:border-opacity-60 md:shadow-xl md:shadow-blue-200/50 ${
                            intersectionContentSideRight ? 'md:arise-from-side-right fade-in-up' : 'opacity-0 pointer-event-none'
                        }`}>
                            <div className={`flex flex-col justify-center items-center gap-10 ${
                                intersectionContentSideRight ? 'md:child-fade-in-up' : ''
                            }`}>
                                <h3 className="font-poppins text-4xl md:text-6xl font-bold text-fill-gradient bg-white md:bg-gradient-to-r from-secondary to-accent">What Is Aranavia?</h3>
                                <p>Pada HUT tahun ini, kami menghadirkan tema “ARANAVIA”, terinspirasi dari makna aliran transisi, arus lembut yang membawa perubahan tanpa memutus akar tempatnya tumbuh. Aranavia menggambarkan bagaimana suasana baru perlahan tercipta, seperti air yang mengalir tenang namun mampu menghidupkan ruang yang dilewatinya. Dalam nama ini, HUT menjadi momen untuk merayakan perubahan yang datang dengan cara paling halus: tidak tergesa, tidak riuh, tetapi tetap meninggalkan kesan yang mendewasakan langkah-langkah kecil menuju masa depan.</p>
                            </div>
                    </div>
                </div>                
            </div>
        </>
    )
}

export default About