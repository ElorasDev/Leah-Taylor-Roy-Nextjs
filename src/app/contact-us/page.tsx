import Head from 'next/head';
import type { Metadata } from "next";
import Contactus from '@/components/Molecule/Contactus/Contactus';

export const metadata: Metadata = {
  title: "Leah Taylor Roy | Contact Us & Collaborate",
  description:
    "Get in touch with Leah Taylor Roy for inquiries, collaboration opportunities, or to learn more about her public service initiatives. Connect today and make a difference.",
  robots: "index, follow",
  alternates: {
    canonical: "https://leahtaylorroymp-development.vercel.app/contact-us",
  },
  openGraph: {
    type: "website",
    url: "https://leahtaylorroymp-development.vercel.app/contact-us",
    title: "Leah Taylor Roy | Contact & Collaborate",
    description:
      "Get in touch with Leah Taylor Roy for inquiries, collaboration opportunities, or to learn more about her public service initiatives. Connect today and make a difference.",
    siteName: "Leah Taylor Roy",
    images: [
      {
        url: "https://leahtaylorroymp-development.vercel.app/images/contact-us.jpg",
        width: 1200,
        height: 630,
        alt: "Leah Taylor Roy - Contact Us",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@LeahTaylorRoy",
    creator: "@LeahTaylorRoy",
    title: "Leah Taylor Roy | Contact & Collaborate",
    description:
      "Get in touch with Leah Taylor Roy for inquiries, collaboration opportunities, or to learn more about her public service initiatives. Connect today and make a difference.",
    images: [
      "https://leahtaylorroymp-development.vercel.app/images/contact-us.jpg",
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


const ContactusPage = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Contact Us & Collaborate</title>
        <meta name="description" content="Get in touch with Leah Taylor Roy for inquiries, collaboration opportunities, or to learn more about her public service initiatives. Connect today and make a difference." />
        <link
          rel="canonical"
          href="https://leahtaylorroymp-development.vercel.app/contact-us"
        />
      </Head>
      <main className="min-h-screen">
        <h1 className="sr-only">
          Contact Us & Collaborate
        </h1>
        <Contactus />
      </main>
    </>
  );
};

export default ContactusPage;
