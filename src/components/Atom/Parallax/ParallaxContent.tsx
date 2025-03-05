import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

const ParallaxContent = () => {
    return (
        <section
            className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4"
            aria-labelledby="parallax-heading"
        >
            <h1 id="parallax-heading" className="text-4xl font-bold drop-shadow-lg">
                Follow us
            </h1>
            <p className="mt-4 text-lg drop-shadow-lg">
                Stay connected through our social media channels
            </p>
            <div className="mt-6 flex gap-6 text-3xl">
                <Link
                    href="https://www.facebook.com/LeahTaylorRoyMP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                >
                    <FaFacebook />
                </Link>
                <Link
                    href="https://www.youtube.com/@Leah_Taylor_Roy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                >
                    <FaYoutube />
                </Link>
                <Link
                    href="https://www.instagram.com/leah_taylor_roy/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                >
                    <FaInstagram />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/leah-taylor-roy-377b2245"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                >
                    <FaLinkedinIn />
                </Link>
            </div>
        </section>
    )
}

export default ParallaxContent