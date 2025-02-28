import type { Metadata } from "next";
import ConstituencyWork from "@/components/Molecule/ConstituencyWork/ConstituencyWork";


export const metadata: Metadata = {
    title: "Leah Taylor Roy | Constituency Work & Community Services",
    description:
        "Discover the initiatives and services Leah Taylor Roy provides for the community. Learn how her constituency work benefits local residents and contributes to positive change.",

    robots: "index, follow",
    alternates: {
        canonical: "https://www.leahtaylorroymp.ca/constituency-work",
    },
    openGraph: {
        type: "website",
        url: "https://www.leahtaylorroymp.ca/constituency-work",
        title: "Leah Taylor Roy | Constituency Work & Community Services",
        description:
            "Discover the initiatives and services Leah Taylor Roy provides for the community. Learn how her constituency work benefits local residents and contributes to positive change.",
        siteName: "Leah Taylor Roy",
        images: [
            {
                url: "https://www.leahtaylorroymp.ca/images/constituency-work.jpg",
                width: 1200,
                height: 630,
                alt: "Leah Taylor Roy - Constituency Work & Community Initiatives",
            },
        ],
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        site: "@LeahTaylorRoy",
        creator: "@LeahTaylorRoy",
        title: "Leah Taylor Roy | Constituency Work & Community Services",
        description:
            "Discover the initiatives and services Leah Taylor Roy provides for the community. Learn how her constituency work benefits local residents and contributes to positive change.",
        images: [
            "https://www.leahtaylorroymp.ca/images/constituency-work.jpg",
        ],
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
};

const ConstituencyWorkPage = () => {
    return (
        <>
            <main className="h-full">
                <h1 className="sr-only">
                    Constituency Work
                </h1>
                <p className="sr-only">
                    Learn more about our efforts and initiatives within the constituency.
                </p>

                <ConstituencyWork />
            </main>
        </>
    );
}

export default ConstituencyWorkPage;
