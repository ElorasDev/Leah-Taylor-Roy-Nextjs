import Billboard from '@/components/Atom/Billboard/Billboard';
import ContactSection from '@/components/Atom/ContactSection/ContactSection';
import KeyInitiativesAndStatements from '@/components/Atom/KeyInitiativesAndStatements/KeyInitiativesAndStatements';
import Summary from '@/components/Atom/Summary/Summary';

// images
import LeahImage from "../../../../public/images/Leah/leah-image.webp";

const Landing = () => {
    return (
        <>
            <section>
                <div className="py-20 px-8">
                    <Billboard
                        image="landing-billboard.webp"
                    />
                    <Summary
                        src={LeahImage}
                        title="About Me"
                        content="Leah Taylor Roy has been serving as the Member of Parliament for Aurora—Oak Ridges—Richmond Hill since 2021. With a background in business and community advocacy, Leah brings a wealth of experience and a deep commitment to public service.Leah Taylor Roy is proud to represent [Constituency Name] in Parliament. With a passion for [key issues], Leah brings years of experience in public service and community advocacy."
                        href="https://www.ourcommons.ca/members/en/leah-taylor-roy(105024)#work"
                        buttonContent="Explore Parliamentary Work"
                    />
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