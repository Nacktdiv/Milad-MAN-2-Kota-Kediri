import {useRef} from 'react';

import KepalaBaja from '../assets/kepala-baja.webp'
import kepalaExcited from '../assets/kepala-excited.webp'

import useIntersectionObserver from './intersectionObserver';

const logoFiles = import.meta.glob('../assets/Logo/*', {eager : true})
const listLogoData = Object.entries(logoFiles).map(([path, module]) => {
    const fileName = path.split('/').pop(); 
    const cleanName = fileName.replace('LOGO-', '').replace('.png', '').replace('.webp', '');
    
    return {
        src: module.default,
        name: cleanName, 
        link: cleanName 
    };
});
const listLogoTop = listLogoData.slice(0, 6)
const listLogoBottom = listLogoData.slice(6)

const link = ['ASWATUNA',
'IMPACT',
'IQRAMA',
'MAFCO',
'MANTARA',
'MANTASA',
'MBC',
'MEDCO',
'MICO',
'MTTC',
'OSSMA',
'SPECCO',
'VISCO']

const StarSVG = ({ size = "w-2 h-2", color = "text-white/80" }) => (
    <svg 
        className={`${size} ${color} fill-current`} 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        {/* Polygon 5-titik standar */}
        <polygon 
            points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9"
        />
    </svg>
);

export default function Category() {

    const observerLogo = useRef(null)
    const intersectionLogo = useIntersectionObserver(observerLogo,  { threshold: 0.25 }, false)

    const starPositions = [
        // Bintang di sisi KIRI ATAS
        { left: '5%', top: '50%', size: 'w-10 h-10', delay: '0s', duration: '2.5s' },
        { left: '20%', top: '25%', size: 'w-10 h-10', delay: '0.4s', duration: '3.0s' },
        { left: '2%', top: '35%', size: 'w-8 h-8', delay: '1s', duration: '2.8s' },
        
        // Bintang di sisi KANAN ATAS
        { left: '85%', top: '40%', size: 'w-8 h-8', delay: '0.8s', duration: '2.2s' },
        { left: '90%', top: '18%', size: 'w-8 h-8', delay: '0.2s', duration: '3.5s' },
        
        // Bintang di sisi KIRI BAWAH
        { left: '10%', bottom: '5%', size: 'w-6 h-6', delay: '1.2s', duration: '2.7s' },
        { left: '80%', bottom: '35%', size: 'w-10 h-10', delay: '0.6s', duration: '3.1s' },
        
        // Bintang di sisi KANAN BAWAH
        { left: '85%', bottom: '10%', size: 'w-10 h-10', delay: '1.5s', duration: '3.3s' },
        { left: '20%', bottom: '20%', size: 'w-6 h-6', delay: '0.1s', duration: '2.6s' },

        // Tambahkan lebih banyak posisi jika ruang kosong besar
        { left: '45%', top: '40%', size: 'w-6 h-6', delay: '1.7s', duration: '3.8s' },
    ];

return (
    <section
        id='category'
        className="relative w-full bg-primary font-poppins overflow-hidden flex flex-col items-center md:justify-between gap-40 md:gap-10 py-6 md:py-10 px-2 md:px-4 cv-auto">

        <div className="absolute inset-0 w-full md:h-20 h-10 bg-gradient-to-b from-secondary to-primary "> </div>
        <div className="absolute inset-0 -top-2 md:-top-5 w-50 left-5 md:h-12 h-6 bg-white/25 blur-2xl"></div>
        <div className='absolute inset-0 w-100 h-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-radial from-white/50 from-5% to-transparent rounded-full blur-3xl'></div>
        <div className='absolute inset-0 top-20 left-5 md:top-20 md:left-20 h-95 w-5 md:h-75 md:w-7 bg-gradient-to-b from-transparent via-[#3DBC9D] to-transparent blur-sm animasi-aurora'></div>
        <div className='absolute inset-0 top-30 left-15 md:top-25 md:left-40 h-95 w-5 md:h-75 md:w-7 bg-gradient-to-b from-transparent via-[#39D2E7] to-transparent blur-sm animasi-aurora'></div>
        <div className='absolute inset-0 top-40 left-25 md:top-30 md:left-60 h-95 w-5 md:h-75 md:w-7 bg-gradient-to-b from-transparent via-[#7C71CF] to-transparent blur-sm animasi-aurora'></div>
        <div className='absolute bottom-20 right-5 md:top-20 md:right-20 h-95 w-5 md:h-75 md:w-7 bg-gradient-to-b from-transparent via-[#3DBC9D] to-transparent blur-sm animasi-aurora'></div>
        <div className='absolute bottom-30 right-15 md:top-25 md:right-40 h-95 w-5 md:h-75 md:w-7 bg-gradient-to-b from-transparent via-[#39D2E7] to-transparent blur-sm animasi-aurora'></div>
        <div className='absolute bottom-40 right-25 md:top-30 md:right-60 h-95 w-5 md:h-75 md:w-7 bg-gradient-to-b from-transparent via-[#7C71CF] to-transparent blur-sm animasi-aurora'></div>
        
        {starPositions.map((star, index) => (
            <div
                key={index}
                className={`absolute animate-twinkle`}
                style={{
                    left: star.left,
                    top: star.top,
                    bottom: star.bottom,
                    animationDelay: star.delay,
                    animationDuration: star.duration,
                }}
            >
                <StarSVG size={star.size} color="text-accent" /> 
            </div>
        ))}

        <div className="z-10 relative w-full max-w-5xl max-h-30 flex items-center justify-center mt-10 md:mt-15">

            <div className="h-15 md:h-26  absolute top-16 md:top-0 left-10 md:left-0 ">
                <img src={KepalaBaja} alt="" className="w-full h-full object-contain" />
            </div>

            <h2 className=" h-full flex items-center justify-center">
                <span className="font-bold text-4xl md:text-6xl text-fill-gradient bg-gradient-to-r from-accent to-highlight">Kategori</span>
            </h2>

            <div className="h-15 md:h-26 absolute top-16 md:top-0 right-10 md:right-0">
                <img src={kepalaExcited} alt="" className="w-full h-full object-contain" />
            </div>
        </div>

        <div className="z-10 w-full max-w-6xl flex flex-col items-center">
            {/* HP */}
            <div 
                className={`flex flex-wrap justify-center gap-y-6 gap-x-4 md:hidden w-full px-2`}>
                {listLogoData.map((item, index) => {
                return (
                    <div 
                    key={`mob-${index}`} 
                    className="flex flex-col items-center w-[28%] min-w-[85px]"
                    >
                        <div 
                            className={`w-[85px] h-[85px] overflow-hidden rounded-full border-2 border-highlight bg-white/10 backdrop-blur-sm 
                            flex items-center justify-center overflow-hidden active:scale-95 transition-transform shadow-[0_0_10px_highlight]`}>
                            <img src={item.src} alt={`Logo resmi lomba ${item.name} dalam rangkaian Garsafa Aranavia MAN 2 Kota Kediri.`} className='object-cover w-full h-full' />
                            <a 
                                href={`competition/${item.link}`} 
                                target="_blank" 
                                rel="noreferrer"
                                className="absolute inset-0 z-10"
                                aria-label={item.name}
                            >
                                <span className="sr-only">{item.name}</span>
                            </a>
                        </div>
                        <h4 className="mt-3 overflow-hidden outline-highlight font-semibold text-highlight">{item.name}</h4>
                    </div>
                )})}
            </div>
            {/* DESKTOP */}
            <div className={`hidden md:flex flex-col gap-12 w-full`}>
                {/*  Atas (7) */}
                <div className="flex justify-center gap-8">
                    {listLogoTop.map((item, index) => {
                        return(
                            <div key={`dt-top-${index}`} className="flex flex-col items-center">
                                <div 
                                    className={`w-24 h-24 lg:w-[18vh] fade-in-up lg:h-[18vh] overflow-hidden rounded-full border-[3px] border-highlight backdrop-blur-md 
                                    flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-[0_0_20px_highlight]`}>
                                    <img src={item.src} alt={`Logo resmi lomba ${item.name} dalam rangkaian Garsafa Aranavia MAN 2 Kota Kediri.`} className='object-cover w-full h-full' />
                                    <a 
                                        href={`competition/${item.link}`} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="absolute inset-0 z-10"
                                        aria-label={item.name}
                                    >
                                        <span className="sr-only">{item.name}</span>
                                    </a>
                                </div>
                                <h4 className="mt-3 overflow-hidden outline-highlight font-semibold text-highlight">{item.name}</h4>
                            </div>
                        )    
                    })}
                </div>
                {/* Bawah (6) */}
                <div className="flex justify-center gap-8">
                    {listLogoBottom.map((item, index) => {
                        return(
                            <div key={`dt-top-${index}`} className="flex flex-col items-center">
                                <div 
                                    className={`w-24 h-24 lg:w-[18vh] fade-in-up lg:h-[18vh] overflow-hidden rounded-full border-[3px] border-highlight backdrop-blur-md 
                                    flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-[0_0_20px_highlight]`}>
                                    <img src={item.src} alt={`Logo resmi lomba ${item.name} dalam rangkaian Garsafa Aranavia MAN 2 Kota Kediri.`} className='object-cover w-full h-full' />
                                    <a 
                                        href={`competition/${item.link}`} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="absolute inset-0 z-10"
                                        aria-label={item.name}
                                    >
                                        <span className="sr-only">{item.name}</span>
                                    </a>
                                </div>
                                <h4 className="mt-3 overflow-hidden outline-highlight font-semibold text-highlight">{item.name}</h4>
                            </div>
                        )    
                    })}
                </div>
            </div>
        </div>
        </section>
);
}