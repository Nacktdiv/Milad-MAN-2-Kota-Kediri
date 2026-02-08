import { Helmet } from "react-helmet-async"
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import About from "./components/about"
import Category from "./components/category"
import FAQ from "./components/faq"
import Gallery from "./components/gallery"
import Footer from './components/footer'

function Home () {
    return (
        <>
            <Helmet>
                <meta name="description" content="Rayakan Milad ke-9 MAN 2 Kota Kediri: GARSAFA ARANAVIA. Kompetisi 13 lomba bergengsi tingkat SMP/MTs sederajat se-Jawa Timur. Ajang kebanggaan dan kreativitas siswa menuju masa depan yang visioner." />
                <meta name="keywords" content="Milad MAN 2 Kota Kediri, Garsafa Aranavia, Lomba SMP MTs Jawa Timur, Pendaftaran Lomba Kediri 2025, Kompetisi Siswa Jatim" />

                {/* Open Graph - Agar tampilan share lebih elegan */}
                <meta property="og:title" content="GARSAFA ARANAVIA - Milad ke-9 MAN 2 Kota Kediri" />
                <meta property="og:description" content="Portal pendaftaran 13 lomba tingkat SMP/MTs sederajat se-Jawa Timur. Mari bergabung dalam perayaan kreativitas dan prestasi Garsafa Aranavia." />
                <meta property="og:image" content="https://miladmantsani9.com/logo_milad.png" /> {/* Gunakan Logo Milad, bukan Maskot */}
                
                {/* Twitter Card */}
                <meta name="twitter:title" content="GARSAFA ARANAVIA | Milad ke-9 MAN 2 Kota Kediri" />
            </Helmet>
            <Navbar/>
            <Hero/>
            <About/>
            <Category/>
            <Gallery/>
            <FAQ/>
            <Footer/>
        </>
    )
}

export default Home