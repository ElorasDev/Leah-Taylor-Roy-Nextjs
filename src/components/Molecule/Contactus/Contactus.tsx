import ContactInfo from "@/components/Atom/ContactInfo/ContactInfo";
import ContactSection from "@/components/Atom/ContactSection/ContactSection";


const Contactus = () => {
    return (
        <section>
            <div className="pt-20 px-8">
                <ContactSection
                    title="Get in Touch"
                />
            </div>
            <div className="mb-4">
            <ContactInfo />
            </div>
        </section>
    )
}

export default Contactus;