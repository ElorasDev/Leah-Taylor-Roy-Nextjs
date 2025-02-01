import AboutLeah from '@/components/Atom/AboutLeah/AboutLeah';
import Billboard from '@/components/Atom/Billboard/Billboard';
import ContactSection from '@/components/Atom/ContactSection/ContactSection';
import KeyInitiativesAndStatements from '@/components/Atom/KeyInitiativesAndStatements/KeyInitiativesAndStatements';

const Landing = () => {
    return (
        <>
            <section>
                <div className="py-20 px-8">
                <Billboard
                    image="landing-billboard.webp"
                />
                <AboutLeah />
                </div>
                <div className="!p-0 !m-0">
                <KeyInitiativesAndStatements />
                </div>
                <ContactSection />
            </section>
        </>
    )
}

export default Landing;