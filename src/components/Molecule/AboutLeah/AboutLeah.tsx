import Summary from "@/components/Atom/Summary/Summary";
import AboutLeahContent from "@/components/Atom/AboutLeahContent/AboutLeahContent";

// images
import LeahImage from "../../../../public/images/Leah/leah-image.webp";

const AboutLeah = () => {
    return (
        <section>
            <div className="py-36 px-8">
                <Summary
                    src={LeahImage}
                    title="Meet Leah Taylor Roy"
                    content="Born and raised in York Region, I now live in Aurora with my husband, Peter Roy. With a strong family background in public service and community leadership, I am committed to being a strong voice for Aurora—Oak Ridges—Richmond Hill in Parliament. I hold degrees from the University of Toronto, Harvard and have worked at McKinsey & Company, and in the energy sector. Beyond politics, I am dedicated to community service, supporting various charities and initiatives to improve our region."
                    href="https://www.ourcommons.ca/members/en/leah-taylor-roy(105024)#work"
                    buttonContent="Explore Parliamentary Work"
                    reverse={true}
                />
            </div>
            <div className="bg-white px-8 py-4">
                <AboutLeahContent />
            </div>
        </section>
    )
}

export default AboutLeah;