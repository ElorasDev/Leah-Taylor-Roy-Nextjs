import type { Metadata } from "next";
import AboutLeah from "@/components/Molecule/AboutLeah/AboutLeah";


export const metadata: Metadata = {
    title: "MP Leah Taylor Roy | About Leah Taylor Roy",
    description:
        "Learn more about Leah Taylor Roy, her background, political views, and contributions to the community.",
    robots: "index, follow",
    alternates: {
        canonical: "https://leahtaylorroymp-development.vercel.app/about-leah",
    },

    openGraph: {
        type: "profile",
        url: "https://leahtaylorroymp-development.vercel.app/about",
        title: "MP Leah Taylor Roy | About Leah Taylor Roy",
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

    twitter: {
        card: "summary_large_image",
        site: "@LeahTaylorRoy",
        creator: "@LeahTaylorRoy",
        title: "MP Leah Taylor Roy | About Leah Taylor Roy",
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
            <main className="h-full">
                <h1 className="sr-only">
                    About Leah Taylor Roy
                </h1>
                <p className="sr-only">
                    Discover Leah Taylor Roy’s background, vision, and commitment to public service.
                </p>

                <AboutLeah />
            </main>
        </>
    );
}

export default AboutLeahPage;
