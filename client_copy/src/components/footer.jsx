import {Map} from '@vis.gl/react-maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import {Link as Scrolllink} from 'react-scroll'
import { HiQuestionMarkCircle, HiPhotograph, HiHome, HiViewGrid, HiInformationCircle  } from 'react-icons/hi';

import Snowflakes from '../assets/snowflakes2.webp'
import Snowflakes2 from '../assets/snowflakes.webp'
import kyupi from '../assets/maskot_tongkat.webp'

function NavItem ({to, nama, icon}) {
    return(<li>
        <Scrolllink 
                    to={to} 
                    href={`#${to}`}
                    className="flex items-center space-x-3 transition-all duration-300 hover:translate-x-2 group"
                    smooth={true} 
                    duration={500} 
                    offset={-70}>
            <span className="text-lg group-hover:scale-110 transition-transform duration-300">{icon}</span>
            <span className="font-medium text-primary-light hover:text-accent">{nama}</span>
        </Scrolllink>
    </li>)
}

function Footer () {
    return (
        <footer className="bg-gradient-to-br from-primary via-secondary to-accent text-white relative overflow-hidden">
            {/* Background gradients and floating elements */}
            <div className="absolute inset-0 opacity-10" aria-hidden="true">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
            </div>
            <div className="absolute inset-0" aria-hidden="true">
                <img src={Snowflakes2} alt="" className="absolute top-20 right-20 w-64 animate-twinkle-image to-highlight/10 rounded-full animate-float"></img>
                <img src={Snowflakes2} alt="" className="absolute top-1/3 left-1/4 w-32 animate-twinkle-image border border-accent/20 rounded-full animate-spin-slow"></img>
                <img src={Snowflakes} alt="" className="absolute bottom-1/3 right-1/4 w-24 animate-twinkle-image rounded-full animate-pulse"></img>
                <img src={Snowflakes} alt="" className="absolute top-1/2 left-1/2 w-16 animate-twinkle-image rotate-45 animate-spin-slow animation-delay-1000"></img> 
                <img src={Snowflakes} alt="" className="absolute bottom-20 left-20 w-48 animate-twinkle-image rounded-full animate-float animation-delay-2000"></img>
                {/* Floating dots */}
                {[
                    { left: "18.1654%", top: "30.7083%", delay: "0.05s", duration: "5.74s" },
                    { left: "69.1239%", top: "70.534%", delay: "1.43s", duration: "4.42s" },
                    { left: "62.2805%", top: "42.7513%", delay: "2.13s", duration: "5.18s" },
                    { left: "18.8578%", top: "58.9794%", delay: "0.21s", duration: "3.94s" },
                    { left: "59.9879%", top: "93.1968%", delay: "0.55s", duration: "5.61s" },
                    { left: "2.16243%", top: "83.6936%", delay: "1.73s", duration: "3.75s" },
                    { left: "36.1864%", top: "20.5081%", delay: "2.74s", duration: "3.96s" },
                    { left: "52.7903%", top: "74.085%", delay: "2.12s", duration: "4.52s" },
                    { left: "82.4073%", top: "95.1055%", delay: "2.31s", duration: "5.86s" },
                    { left: "62.3871%", top: "78.8026%", delay: "2.79s", duration: "5.52s" },
                    { left: "27.1324%", top: "17.8145%", delay: "2.41s", duration: "4.85s" },
                    { left: "78.373%", top: "63.7172%", delay: "2.17s", duration: "5.4s" },
                    { left: "40.1958%", top: "48.7438%", delay: "1.27s", duration: "4.5s" },
                    { left: "78.2373%", top: "96.1787%", delay: "1.5s", duration: "3.74s" },
                    { left: "35.0757%", top: "42.3109%", delay: "0.25s", duration: "3.88s" },
                    { left: "66.6073%", top: "93.0053%", delay: "2.01s", duration: "4.68s" },
                    { left: "89.9613%", top: "50.3445%", delay: "3.05s", duration: "3.18s" },
                    { left: "9.04317%", top: "64.1832%", delay: "2.31s", duration: "3.82s" },
                    { left: "74.9859%", top: "29.8061%", delay: "1.67s", duration: "5.53s" },
                    { left: "87.7175%", top: "64.6651%", delay: "2.61s", duration: "5.88s" },
                    { left: "29.869%", top: "68.7766%", delay: "0.98s", duration: "4.39s" },
                    { left: "71.0272%", top: "29.6395%", delay: "2.32s", duration: "4.07s" },
                    { left: "58.1461%", top: "38.0946%", delay: "2.99s", duration: "3.85s" },
                    { left: "38.4317%", top: "83.4601%", delay: "3.75s", duration: "5.19s" },
                ].map((dot, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-accent rounded-full opacity-30 animate-float"
                        style={{
                            left: dot.left,
                            top: dot.top,
                            animationDelay: dot.delay,
                            animationDuration: dot.duration,
                        }}
                    ></div>
                ))}
            </div>

            {/* Main content */}
            <div className="relative z-10  mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-15">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Logo & Description */}
                        <div className="lg:col-span-2">
                            <div className='flex flex-col mb-8 gap-8'>
                                <h2 className='text-xl font-black bg-gradient-to-r from-accent to-highlight bg-clip-text text-transparent'>Apa itu kyupi?</h2>
                                <div className='w-full flex flex-col md:flex-row gap-6 md:gap-0 items-center'>
                                    <img src={kyupi} alt="" className='object-contain w-1/2 md:w-1/3 -translate-x-1/8'/>
                                    <div className='flex-1 w-full  bg-accent/50 rounded-md p-4'>
                                        <p className=' text-primary-light'>Kyupi adalah pinguin biru yang merepresentasikan ketenangan, kecerdasan, dan langkah maju yang berkesinambungan. Dengan sikap tenang namun penuh keyakinan, Kyupi melambangkan pembaruan yang tumbuh dari pikiran jernih, kemampuan beradaptasi, dan kemauan untuk terus belajar. Ia percaya perubahan bisa hadir tanpa gegap gempita, melainkan melalui konsistensi, kolaborasi, dan kesadaran untuk bergerak maju tanpa kehilangan arah dan jati diri.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Social Links */}
                            <div className="flex space-x-4">
                                {/* Instagram */}
                                <a href="https://www.instagram.com/miladmantsani?igsh=MXRhazk0OWV2OWdydQ==" target="_blank" rel="noopener noreferrer" className="relative group">
                                    <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-2xl transition-all duration-500 hover:bg-accent hover:text-[#031B6B] hover:scale-110 hover:shadow-2xl backdrop-blur-sm hover:text-pink-400">
                                        {/* SVG Instagram */}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                                            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5ZM17.8 6.2a1 1 0 1 1-1.4 1.4 1 1 0 0 1 1.4-1.4Z"></path>
                                        </svg>
                                    </div>
                                    <div className="absolute inset-0 bg-accent rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                                </a>
                                {/* Facebook */}
                                <a href="#" target="_blank" rel="noopener noreferrer" className="relative group">
                                    <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-2xl transition-all duration-500 hover:bg-accent hover:text-[#031B6B] hover:scale-110 hover:shadow-2xl backdrop-blur-sm hover:text-blue-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                                            <path d="M13 3h4a1 1 0 1 1 0 2h-3v3h3a1 1 0 1 1 0 2h-3v9h-3v-9H8V8h3V5.5A2.5 2.5 0 0 1 13.5 3H13Z"></path>
                                        </svg>
                                    </div>
                                    <div className="absolute inset-0 bg-accent rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                                </a>
                                {/* Twitter/X */}
                                <a href="#" target="_blank" rel="noopener noreferrer" className="relative group">
                                    <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-2xl transition-all duration-500 hover:bg-accent hover:text-[#031B6B] hover:scale-110 hover:shadow-2xl backdrop-blur-sm hover:text-blue-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                                            <path d="M22 5.8c-.7.3-1.4.5-2.1.6.8-.5 1.3-1.2 1.6-2.1-.7.4-1.5.7-2.3.9a3.7 3.7 0 0 0-6.4 3.4 10.6 10.6 0 0 1-7.7-3.9 3.7 3.7 0 0 0 1.1 5 3.6 3.6 0 0 1-1.7-.5v.1a3.7 3.7 0 0 0 3 3.7 3.6 3.6 0 0 1-1.7.1 3.7 3.7 0 0 0 3.4 2.6A7.4 7.4 0 0 1 2 18.2 10.4 10.4 0 0 0 7.7 20c6.9 0 10.7-5.8 10.7-10.7v-.5c.7-.5 1.3-1.1 1.6-1.8Z"></path>
                                        </svg>
                                    </div>
                                    <div className="absolute inset-0 bg-accent rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                                </a>
                                {/* LinkedIn */}
                                <a href="#" target="_blank" rel="noopener noreferrer" className="relative group">
                                    <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-2xl transition-all duration-500 hover:bg-accent hover:text-[#031B6B] hover:scale-110 hover:shadow-2xl backdrop-blur-sm hover:text-blue-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                                            <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.7v1.7h.1A4 4 0 0 1 21 14.2V21h-4v-5.4c0-1.3-.02-3-1.9-3s-2.2 1.5-2.2 2.9V21h-4V9Z"></path>
                                        </svg>
                                    </div>
                                    <div className="absolute inset-0 bg-accent rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                                </a>
                                {/* YouTube */}
                                <a href="#" target="_blank" rel="noopener noreferrer" className="relative group">
                                    <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-2xl transition-all duration-500 hover:bg-accent hover:text-[#031B6B] hover:scale-110 hover:shadow-2xl backdrop-blur-sm hover:text-red-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                                            <path d="M23 12c0-2.8-.2-4.2-.4-4.9a3.2 3.2 0 0 0-2.2-2.2C19.7 4.7 12 4.7 12 4.7s-7.7 0-8.4.2a3.2 3.2 0 0 0-2.2 2.2C1.2 7.8 1 9.2 1 12s.2 4.2.4 4.9a3.2 3.2 0 0 0 2.2 2.2c.7.2 8.4.2 8.4.2s7.7 0 8.4-.2a3.2 3.2 0 0 0 2.2-2.2c.2-.7.4-2.1.4-4.9ZM10 8.8l5.7 3.2L10 15.2V8.8Z"></path>
                                        </svg>
                                    </div>
                                    <div className="absolute inset-0 bg-accent rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                                </a>
                            </div>
                        </div>
                        {/* Contact */}
                        <div className='h-full w-full items-center flex flex-col gap-5'>
                            <div className='flex flex-col gap-8 self-start'>
                                <h3 className="text-xl font-black bg-gradient-to-r from-accent to-highlight bg-clip-text text-transparent">Kontak</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-4 text-white/80 group hover:text-accent transition-colors duration-300">
                                        <div className="w-6 h-6 bg-gradient-to-br from-accent to-highlight rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <div className="w-3 h-3 bg-primary rounded-full"></div>
                                        </div>
                                        <span className="font-medium">(0354) 687876</span>
                                    </div>
                                    <div className="flex items-center space-x-4 text-white/80 group hover:text-accent transition-colors duration-300">
                                        <div className="w-6 h-6 bg-gradient-to-br from-accent to-highlight rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <div className="w-3 h-3 bg-primary rounded-full"></div>
                                        </div>
                                        <span className="font-medium">MAN 2 Kota Kediri</span>
                                    </div>
                                </div>
                            </div>
                            <div className='border-2 w-full h-50 md:h-full '>
                                <Map
                                    initialViewState={{
                                    longitude: 112.030273,
                                    latitude: -7.820369,
                                    zoom: 15
                                    }}
                                    style={{width: '100%', height: '100%'}}
                                    mapStyle="https://tiles.openfreemap.org/styles/bright"
                                    mapLib={import('maplibre-gl')}
                                    onLoad={(e) => {
                                        const map = e.target;

                                        map.on('styleimagemissing', (ev) => {
                                        const id = ev.id; // ini adalah "office", "atm", dll.
                                        
                                        // Membuat gambar 1x1 pixel transparan sebagai pengganti agar tidak error
                                        const width = 1;
                                        const height = 1;
                                        const data = new Uint8Array(width * height * 4);
                                        
                                        if (!map.hasImage(id)) {
                                            map.addImage(id, { width, height, data });
                                        }
                                        });
                                    }}
                                />;
                                
                            </div>
                            <div className='w-fit rounded-full bg-secondary/70 h-auto'><a className='h-full py-1 px-2' href="https://maps.app.goo.gl/wojWHCDPJaVjvNG19">Views in Google Maps</a></div>
                        </div>
                        {/* Quick Links */}
                        <div>
                            <h3 className="text-xl font-black mb-8 bg-gradient-to-r from-accent to-highlight bg-clip-text text-transparent">Quick Links</h3>
                            <ul className="space-y-4 bg-secondary/50 rounded-lg p-4">
                                <NavItem to='hero' nama='Beranda' icon={<HiHome/>} />
                                <NavItem to='about' nama='Tentang' icon={<HiInformationCircle/>} />
                                <NavItem to='category' nama='Kategori' icon={<HiViewGrid/>} />
                                <NavItem to='gallery' nama='Gallery' icon={<HiPhotograph/>} />
                                <NavItem to='faq' nama='FAQ' icon={<HiQuestionMarkCircle/>} />
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Footer bottom */}
                <div className="border-t border-white/10 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-white/70 text-base mb-4 md:mb-0 font-light">
                            © 2026 MAN 2 Kota Kediri. All rights reserved.
                        </div>
                        <div className="flex space-x-8 text-base text-white/70">
                            <a href="#" className="hover:text-[#00FFFF] transition-colors duration-300 font-medium hover:scale-105 transform inline-block">Privacy Policy</a>
                            <a href="#" className="hover:text-[#00FFFF] transition-colors duration-300 font-medium hover:scale-105 transform inline-block">Terms of Service</a>
                            <a href="#" className="hover:text-[#00FFFF] transition-colors duration-300 font-medium hover:scale-105 transform inline-block">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Decorative SVGs */}
            <svg className="absolute top-20 right-20 opacity-30 animate-float" width="30" height="30" viewBox="0 0 24 24" fill="#00FFFF" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
            </svg>
            <svg className="absolute bottom-20 left-20 opacity-30 animate-float animation-delay-1000" width="30" height="30" viewBox="0 0 24 24" fill="#00C5D8" aria-hidden="true">
                <rect x="5" y="5" width="14" height="14" rx="2"></rect>
            </svg>
            <svg className="absolute top-1/3 left-8 opacity-20 animate-float animation-delay-2000" width="26" height="26" viewBox="0 0 24 24" fill="#00FFFF" aria-hidden="true">
                <polygon points="12,2 22,22 2,22"></polygon>
            </svg>
            <svg className="absolute bottom-1/3 right-8 opacity-20 animate-float animation-delay-3000" width="26" height="26" viewBox="0 0 24 24" fill="#00C5D8" aria-hidden="true">
                <path d="M12 2l10 10-10 10L2 12Z"></path>
            </svg>
            <svg className="absolute top-1/2 left-1/2 opacity-15 animate-float animation-delay-1500" width="22" height="22" viewBox="0 0 24 24" fill="#00FFFF" aria-hidden="true">
                <circle cx="12" cy="12" r="3"></circle>
            </svg>
        </footer>
    )
}

export default Footer