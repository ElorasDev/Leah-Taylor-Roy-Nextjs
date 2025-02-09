import Head from 'next/head';
import Contactus from '@/components/Molecule/Contactus/Contactus';

export const metadata = {
  title: "Leah Taylor Roy | Contact Us",
  description:
    "Get in touch with Leah Taylor Roy. Reach out for inquiries, collaboration opportunities, or to learn more about her initiatives in public service.",
};

const ContactusPage = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link
          rel="canonical"
          href="https://leahtaylorroymp-development.vercel.app/contact-us"
        />
      </Head>
      <main className="min-h-screen">
        <Contactus />
      </main>
    </>
  );
};

export default ContactusPage;
