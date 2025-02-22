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
                    title="Meet Leah Taylor Roy – A Proud Canadian Working for the Community and Country"
                    content= "Born and raised in York Region, I now proudly call Aurora home, where I live with my husband, Peter Roy. Together, we’ve raised six children and are proud grandparents to two granddaughters. With a strong family foundation in public service, I’ve always felt a deep responsibility to represent the people of Aurora—Oak Ridges—Richmond Hill in Parliament.
I hold a Bachelor of Commerce from the University of Toronto and a Master’s in Public Policy from Harvard University. My career spans the World Bank, McKinsey & Company, and the sustainable energy sector, where I have worked in leadership roles that combine business strategy with a commitment to community and sustainability.
Beyond politics, I am dedicated to improving life here in York Region through my support for numerous local initiatives. My professional journey has allowed me to approach every challenge with both business acumen and a heart for public service, and I’m committed to creating a brighter, more equitable future for everyone in our community.
"
                    href="/about-me"
                    buttonContent="Discover More About Leah"
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