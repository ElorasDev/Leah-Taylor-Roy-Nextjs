import Head from "next/head";
import type { Metadata } from "next";
import AboutLeah from "@/components/Molecule/AboutLeah/AboutLeah";


export const metadata: Metadata = {
    title: "Leah Taylor Roy | About Leah Taylor Roy",
    description:
        "Learn more about Leah Taylor Roy, her background, political views, and contributions to the community.",
    robots: "index, follow",
    alternates: {
        canonical: "https://leahtaylorroymp-development.vercel.app/about-leah",
    },

    openGraph: {
        type: "profile",
        url: "https://leahtaylorroymp-development.vercel.app/about",
        title: "Leah Taylor Roy | About Leah Taylor Roy",
        description:
            "Learn more about Leah Taylor Roy, her background, political views, and contributions to the community.",
        siteName: "Leah Taylor Roy",
        images: [
            {
                url: "https://leahtaylorroymp-development.vercel.app/images/leah-profile.jpg",
                width: 1200,
                height: 630,
                alt: "Leah Taylor Roy - About Page",
            },
        ],
        locale: "en_US",
    },

    // 🔹 Twitter Card برای بهینه‌سازی نمایش در توییتر
    twitter: {
        card: "summary_large_image",
        site: "@LeahTaylorRoy",
        creator: "@LeahTaylorRoy",
        title: "Leah Taylor Roy | About Leah Taylor Roy",
        description:
            "Learn more about Leah Taylor Roy, her background, political views, and contributions to the community.",
        images: [
            "https://leahtaylorroymp-development.vercel.app/images/leah/leah-profile.jpg",
        ],
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
};



const AboutLeahPage = () => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <title>Leah Taylor Roy | About Leah Taylor Roy</title>

                <meta
                    name="description"
                    content="Learn more about Leah Taylor Roy, her background, political views, and contributions to the community."
                />

                <meta name="robots" content="index, follow" />

                {/* Open Graph (OG) Meta Tags */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="About Leah Taylor Roy | Official Website" />
                <meta property="og:description" content="Learn more about Leah Taylor Roy, her background, political views, and contributions to the community." />
                <meta property="og:image" content="https://leahtaylorroymp-development.vercel.app/images/about-leah.jpg" />
                <meta property="og:url" content="https://leahtaylorroymp-development.vercel.app/about-leah" />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Leah Taylor Roy | Official Website" />
                <meta name="twitter:description" content="Learn more about Leah Taylor Roy, her background, political views, and contributions to the community." />
                <meta name="twitter:image" content="https://leahtaylorroymp-development.vercel.app/images/about-leah.jpg" />

                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="canonical" href="https://leahtaylorroymp-development.vercel.app/about-leah" />

                <meta
                    httpEquiv="Content-Security-Policy"
                    content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' https: data:;"
                />
            </Head>

            <main className="h-full">
                <AboutLeah />
            </main>
        </>
    );
}

export default AboutLeahPage;
