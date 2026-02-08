import {useState, useRef} from 'react'
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import bingkaiEs from '../assets/bingkai-es-2.webp'
import ikan from '../assets/kumpulan-ikan.webp'
import seaweed from '../assets/seaweed.webp'
import Uburubur from '../assets/ubur-ubur.webp'
import useIntersectionObserver from './intersectionObserver';


const imageList = [
    "/SPECO.JPG",
    "/ASHWATUNA.jpg",
    "/IQRAMA.jpg",
    "/MANTARA.jpg",
    "/MBC.jpg",
    "/MEDCO.jpg",
    "/MICO.jpg",
    "/MTMC.jpg",
    "/OSSMA.jpg",
    "/VISCO.jpg"
];
function Gallery () {

    const observerGallery = useRef(null)
    const intersectionGallery = useIntersectionObserver(observerGallery,  { threshold: 0.25 }, false)

    const[imageIndex, setimageIndex] = useState(0)
    
    const handleNext = () => {
        if(imageIndex === (imageList.length - 1)) {
            setimageIndex(0)
        } else {
            setimageIndex(imageIndex + 1)
        }
    }

    const handleBefore = () => {
        if(imageIndex === 0) {
            setimageIndex(imageList.length - 1)
        } else {
            setimageIndex(imageIndex - 1)
        }
    }
    return (
        <section
            id='gallery'
            className="relative bg-primary overflow-hidden ">

            <img src={seaweed}  alt="" className='absolute block w-20 md:w-40 left-10 -bottom-2 md:-left-5 md:-bottom-5'/>
            <img src={seaweed}  alt="" className='absolute block w-20 md:w-40 right-10 -bottom-2 md:-bottom-5 md:-right-5'/>
            <img src={seaweed}  alt="" className='absolute hidden md:block w-40 left-40 -bottom-5'/>
            <img src={seaweed}  alt="" className='absolute hidden md:block w-40 -bottom-5 right-40'/>
            <img src={ikan} alt="" className='absolute hidden md:block w-40 bottom-40 left-5'/>
            <img src={ikan} alt="" className='absolute hidden md:block w-40 top-0 left-45'/>
            <img src={ikan} alt="" className='absolute hidden md:block w-40 top-50 right-5 -scale-x-100'/>
            <img src={Uburubur}  alt=""className='absolute w-25 md:w-60 top-6 right-5 md:top-10 md:right-20' />
            <img src={Uburubur} alt="" className='absolute md:hidden w-25 md:w-60 top-6 left-5 ' />

            <svg  viewBox="0 0 60 300" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute md:bottom-40 md:left-50 bottom-0 left-0 w-10 h-40 md:w-15 md:h-75'>
                <circle cx="30" cy="270" r="8" stroke="white" strokeOpacity="0.4" strokeWidth="1.5">
                    <animate attributeName="cy" values="270;250;270" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="25" cy="200" r="5" stroke="white" strokeOpacity="0.3" strokeWidth="1">
                    <animate attributeName="cy" values="200;180;200" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="35" cy="130" r="10" stroke="white" strokeOpacity="0.5" strokeWidth="2" />
                <circle cx="28" cy="50" r="4" stroke="white" strokeOpacity="0.4" strokeWidth="1">
                    <animate attributeName="opacity" values="0.2;0.6;0.2" dur="5s" repeatCount="indefinite" />
                </circle>
            </svg>

            <svg  viewBox="0 0 100 400" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute bottom-0 right-0 w-10 h-40 md:w-25 md:h-100 md:bottom-40 md:right-50'>
                <g opacity="0.6">
                    <circle cx="50" cy="350" r="6" stroke="white" strokeWidth="1" />
                    <circle cx="70" cy="280" r="4" stroke="white" strokeWidth="1" />
                    <circle cx="40" cy="210" r="9" stroke="white" strokeWidth="1.5" />
                    <circle cx="60" cy="140" r="5" stroke="white" strokeWidth="1" />
                    <circle cx="50" cy="70" r="7" stroke="white" strokeWidth="1" />
                </g>
                <animateTransform attributeName="transform" type="translate" values="0 20; 0 -20; 0 20" dur="6s" repeatCount="indefinite" />
            </svg>

            <svg width="80" height="200" viewBox="0 0 80 200" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute hidden md:block top-10 left-5'>
                <circle cx="40" cy="180" r="5" fill="white" fillOpacity="0.2" />
                <circle cx="45" cy="165" r="3" stroke="white" strokeOpacity="0.4" />
                <circle cx="35" cy="155" r="4" stroke="white" strokeOpacity="0.3" />
                <circle cx="42" cy="130" r="8" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" />
                <circle cx="38" cy="90" r="5" stroke="white" strokeOpacity="0.3" />
                <circle cx="45" cy="50" r="10" stroke="white" strokeOpacity="0.2" strokeWidth="2" />
            </svg>

            <svg width="80" height="200" viewBox="0 0 80 200" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute hidden md:block bottom-10 left-1/2'>
                <circle cx="40" cy="180" r="5" fill="white" fillOpacity="0.2" />
                <circle cx="45" cy="165" r="3" stroke="white" strokeOpacity="0.4" />
                <circle cx="35" cy="155" r="4" stroke="white" strokeOpacity="0.3" />
                <circle cx="42" cy="130" r="8" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" />
                <circle cx="38" cy="90" r="5" stroke="white" strokeOpacity="0.3" />
                <circle cx="45" cy="50" r="10" stroke="white" strokeOpacity="0.2" strokeWidth="2" />
            </svg>

            <div className="w-full flex flex-col pt-8 md:pt-12 md:pb-10 pb-5 gap-5 md:gap-10 items-center z-10">
                <h2 className="font-poppins font-bold text-4xl md:text-6xl text-fill-gradient bg-gradient-to-r from-accent to-highlight">Gallery</h2>
                <div
                    ref={observerGallery} 
                    className={`relative w-[80%]  md:w-[80%] lg:w-[90vh] aspect-video ${intersectionGallery ? 'fade-in-up' : ''}`}>
                    <img src={bingkaiEs} alt="" className='w-full h-full' />
                    <div className='absolute inset-0 w-full h-[75%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-[43%] px-[5%]'>
                        <div className='w-full h-full flex overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory'>
                                {imageList.map((img, index) => (
                                    <div key={index} className="flex-shrink-0 w-full snap-center">
                                        <img 
                                        src={img} 
                                        alt={`Galeri Garsafa Aranavia MAN 2 Kota Kediri foto ke-${index + 1}`} 
                                        className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery;