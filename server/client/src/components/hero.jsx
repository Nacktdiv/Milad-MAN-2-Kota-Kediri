import { useState, useEffect, useRef } from "react"

import { Link as Scrolllink } from "react-scroll"
import Snowfall from "./snowfall"
import icedSpike3 from '../assets/iced-bottom3.webp'
import icedSpike2 from '../assets/iced-bottom2.webp'
import icedSpike from '../assets/iced-bottom.webp'
import snowflakes from '../assets/snowflakes.webp'
import aranavia from '../assets/aranavia.webp'
import maskotTongkat from '../assets/maskot_tongkat.webp'
import useIntersectionObserver from "./intersectionObserver"


const calculateTimeLeft = () => {
    const now = new Date();
    let year = now.getFullYear();
    
    // Tentukan target: 2 Februari jam 00:00:00
    let targetDate = new Date(`${year}-02-02T00:00:00`);

    // Jika hari ini sudah melewati 2 Februari, set target ke tahun depan
    if (now > targetDate) {
        targetDate = new Date(`${year + 1}-02-02T00:00:00`);
    }

    const difference = targetDate - now;

    let timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    };

    if (difference > 0) {
        timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        };
    }

    return timeLeft;
};

const TimeUnit = ({ value, label }) => (
    <div className="text-center">
        <div className="text-3xl md:text-7xl font-black text-[#1e40af]">
        {String(value).padStart(2, '0')}
        </div>
        <div className="text-sm font-bold text-[#1e40af] uppercase">{label}</div>
    </div>
);

const NavItem = ({ to, children }) => {
    const navClass = "flex-1 bg-primary-light border-4 border-secondary py-2 rounded-xl text-secondary font-black text-xs md:text-sm shadow-[0_4px_0_0_#1e40af] active:translate-y-1 active:shadow-none transition-all";
    
    return (
        <button className={navClass}>
        <Scrolllink 
            to={to} 
            smooth={true} 
            duration={500} 
            offset={-70}
            className="block w-full h-full"
        >
            {children}
        </Scrolllink>
        </button>
    );
    };

function Hero () {

        const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

        useEffect(() => {
            const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
            }, 1000);

            return () => clearInterval(timer);
        }, []);

        const observerTime = useRef(null)
        const intersectionTime = useIntersectionObserver(observerTime,  { threshold: 0.25 }, false)
        const observerButton = useRef(null)
        const intersectionButton = useIntersectionObserver(observerButton,  { threshold: 0.25 }, false)
        const observerTittle = useRef(null)
        const intersectionTittle = useIntersectionObserver(observerTittle,  { threshold: 0.25 }, false)

    return (
        <section
            id="hero"
            className="relative w-screen min-h-screen md:min-h-0 overflow-hidden">
                <div className="absolute inset-0 bg-primary"></div>
                <div className="absolute inset-0 blueprint-snowflake opacity-2"></div> 
                <Snowfall snowflakeCount={80}/>
                <div className="absolute -bottom-25 -left-25 bg-white/25 blur-2xl rounded-full w-100 h-100"></div>
                <div className="absolute -top-0 right-0 bg-white/25 blur-2xl rounded-full w-50 h-50"></div>
                <img src={snowflakes} alt="" className="absolute top-[10%] md:top-[20%] left-[5%] md:left-[10%] opacity-60 w-15 h-15 animate-twinkle-image" />
                <img src={snowflakes} alt="" className="absolute top-[20%] md:top-1/3 left-1/2 opacity-60 w-12 h-12 animate-twinkle-image" />
                <img src={snowflakes} alt="" className="absolute top-[8%] md:top-[13%] right-[20%] md:right-[22%] opacity-60 w-14 h-14 animate-twinkle-image" />
                <img src={snowflakes} alt="" className="absolute bottom-[8%] right-[20%] md:right-[15%] opacity-60 w-15 h-15 md:w-12 md:h-12 animate-twinkle-image" />
                <img src={snowflakes} alt="" className="absolute bottom-[8%] left-[20%] md:left-[30%] opacity-60 w-15 h-15 animate-twinkle-image" />
                <img src={snowflakes} alt="" className="absolute bottom-[45%] md:bottom-[30%] left-[5%] md:left-[2%] opacity-60 w-16 h-16 md:w-14 md:h-14 animate-twinkle-image" />
                <img src={snowflakes} alt="" className="absolute md:hidden top-[30%] right-[5%] opacity-60 w-14 h-14 animate-twinkle-image" />
                {/** p */}
                <div className="flex-1 pt-16 pb-28 md:pb-0 flex flex-col">
                    <h1 
                        ref={observerTittle}
                        className={`flex items-center justify-center w-full mt-8 md:mt-4 ${intersectionTittle ? 'scale-animation' : ""}`}
                        >
                        <span className="sr-only">Milad MAN 2 Kota Kediri ke-9</span>
                        <img src={aranavia} alt="" className="w-4/5 md:w-1/2 "/>
                    </h1>
                    <div className="h-full flex-1 mt-8 md:mt-4 md:mb-14 md:mx-4 flex md:flex-row flex-col items-center gap-12 md:gap-6 overflow-hidden">
                        <div className="w-[70%] md:w-[45%] z-20 flex justify-center -translate-x-1/8 md:translate-x-0">
                            <img 
                                src={maskotTongkat} 
                                alt="Kyupi Maskot Milad MAN 2 Kediri melambangkan juara lomba Garsafa Aranavia" 
                                className="w-full h-auto max-h-[40vh] md:max-h-[55vh] object-contain"
                            />
                        </div>
                        <div className="w-full flex flex-col items-center justify-center gap-4">
                            <div 
                                ref={observerTime}
                                className={`bg-primary-light border-4 border-secondary rounded-2xl py-4 w-full max-w-xl shadow-[0_4px_0_0_#1e40af] 
                                            ${intersectionTime ? 'fade-in-up' : ''}`}>
                                <h2 className="text-secondary/80 text-center font-bold text-xl mb-2">Pendaftaran Terakhir</h2>
                                
                                <div className="flex justify-between items-center px-12">
                                    <TimeUnit value={timeLeft.days} label="Hari" />
                                    <TimeUnit value={timeLeft.hours} label="Jam" />
                                    <TimeUnit value={timeLeft.minutes} label="Menit" />
                                    <TimeUnit value={timeLeft.seconds} label="Detik" />
                                </div>
                            </div>

                            <div 
                                ref={observerButton}
                                className={`flex w-full max-w-lg gap-3 ${intersectionButton ? 'fade-in-up' : ''}`}>
                                    <NavItem to="category" href="category">PILIH KOMPETISI YANG KAMU INGIN DAFTAR</NavItem>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-fit h-auto flex items-end translate-y-0 z-10">
                    <img src={icedSpike} alt="" className="w-32 h-auto"/>
                    <div className="flex-1 flex items-end overflow-hidden">
                        <img src={icedSpike3} alt="" className="w-32 h-auto -ml-5" />
                        <img src={icedSpike2} alt="" className="w-32 h-auto -ml-3" />
                        <img src={icedSpike2} alt="" className="w-32 h-auto -ml-3" />
                        <img src={icedSpike2} alt="" className="w-32 h-auto -ml-3" />
                        <img src={icedSpike2} alt="" className="w-32 h-auto -ml-3" />
                        <img src={icedSpike2} alt="" className="w-32 h-auto -ml-3" />
                        <img src={icedSpike2} alt="" className="w-32 h-auto -ml-3" />
                        <img src={icedSpike2} alt="" className="w-32 h-auto -ml-3" />
                        <img src={icedSpike2} alt="" className="w-32 h-auto -ml-3" />
                        <img src={icedSpike2} alt="" className="w-32 h-auto -ml-3" />
                        <img src={icedSpike2} alt="" className="w-32 h-auto -ml-3" />
                        <img src={icedSpike2} alt="" className="w-32 h-auto -ml-3" />
                        <img src={icedSpike2} alt="" className="w-32 h-auto -ml-3" />
                        <img src={icedSpike2} alt="" className="w-32 h-auto -ml-3" />
                        {/* Bisa nambah lagi atau repeat */}
                    </div>
                    <img src={icedSpike} alt="" className="w-32 h-auto scale-x-[-1]"/>
                </div>
            </section>
    )
}

export default Hero

