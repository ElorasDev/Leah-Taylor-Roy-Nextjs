import Head from "next/head";
import ConstituencyWork from "@/components/Molecule/ConstituencyWork/ConstituencyWork";

const ConstituencyWorkPage = () => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <title>Constituency Work | Leah Taylor Roy</title>
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
                <ConstituencyWork />
            </main>
        </>
    );
}

export default ConstituencyWorkPage;
