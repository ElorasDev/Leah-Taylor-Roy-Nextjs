import Head from "next/head";
import type { Metadata } from "next";
import ConstituencyWork from "@/components/Molecule/ConstituencyWork/ConstituencyWork";


export const metadata: Metadata = {
    title: "Leah Taylor Roy | Constituency Work & Community Services",
    description:
        "Discover the initiatives and services Leah Taylor Roy provides for the community. Learn how her constituency work benefits local residents and contributes to positive change.",

    robots: "index, follow",
    alternates: {
        canonical: "https://leahtaylorroymp-development.vercel.app/constituency-work",
    },
    openGraph: {
        type: "website",
        url: "https://leahtaylorroymp-development.vercel.app/constituency-work",
        title: "Leah Taylor Roy | Constituency Work & Community Services",
        description:
            "Discover the initiatives and services Leah Taylor Roy provides for the community. Learn how her constituency work benefits local residents and contributes to positive change.",
        siteName: "Leah Taylor Roy",
        images: [
            {
                url: "https://leahtaylorroymp-development.vercel.app/images/constituency-work.jpg",
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
            "https://leahtaylorroymp-development.vercel.app/images/constituency-work.jpg",
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
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <title>Leah Taylor Roy | Constituency Work</title>
                <meta name="description" content="Explore the services and initiatives provided by Leah Taylor Roy for the community. Learn more about the constituency work and how it benefits the residents." />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="canonical" href="https://leahtaylorroymp-development.vercel.app/constituency-work" />

                <meta property="og:title" content="Constituency Work | Leah Taylor Roy" />
                <meta property="og:description" content="Explore the services and initiatives provided by Leah Taylor Roy for the community." />
                <meta property="og:url" content="https://leahtaylorroymp-development.vercel.app/constituency-work" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Constituency Work | Leah Taylor Roy" />
                <meta name="twitter:description" content="Explore the services and initiatives provided by Leah Taylor Roy for the community." />

                <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' https: data:;" />
            </Head>
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
