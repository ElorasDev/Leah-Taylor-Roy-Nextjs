import Summary from "@/components/Atom/Summary/Summary";
import AboutLeahContent from "@/components/Atom/AboutLeahContent/AboutLeahContent";

// images
import LeahImage from "../../../../public/images/Leah/leah-image.webp";
import Link from "next/link";

const AboutLeah = () => {
    return (
        <section>
            <div className="py-36 px-8">
                <Summary
                    src={LeahImage}
                    title="Meet Leah Taylor Roy – A Proud Canadian Working for the Community and Country"
                    content={`Born and raised in York Region, I now proudly call Aurora home, where I live with my husband, Peter Roy. Together, we’ve raised six children and are proud grandparents to two granddaughters. With a strong family foundation in public service, I’ve always felt a deep responsibility to represent the people of Aurora—Oak Ridges—Richmond Hill in Parliament.
I hold a Bachelor of Commerce from the University of Toronto and a Master’s in Public Policy from Harvard University. My career spans the World Bank, McKinsey & Company, and the sustainable energy sector, where I have worked in leadership roles that combine business strategy with a commitment to community and sustainability.
Beyond politics, I am dedicated to improving life here in York Region through my support for numerous local initiatives. My professional journey has allowed me to approach every challenge with both business acumen and a heart for public service, and I’m committed to creating a brighter, more equitable future for everyone in our community.`}
                    href="https://www.ourcommons.ca/members/en/leah-taylor-roy(105024)#work"
                    buttonContent="Parliamentary Work"
                    reverse={true}
                />
            </div>
            <div className="bg-white px-8 py-4">
                <AboutLeahContent />
            </div>
            <article className="my-12 px-6 md:px-12 lg:px-24">
                <h2 className="text-3xl font-bold text-center text-neutral mb-6">
                    Message from <span className="text-primary">Leah</span>
                </h2>
                <div className="bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg max-w-3xl mx-auto">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        As your Member of Parliament, I’m deeply grateful for the trust you’ve placed in me.
                        My mission is simple: to be your voice in Ottawa and work on the issues that matter
                        most to you. Whether it’s improving housing affordability, advocating for gender
                        equality, or ensuring we have a sustainable environment, I am committed to working
                        tirelessly for the betterment of our community and our country.
                    </p>
                    <p className="text-lg text-gray-700 mt-4">
                        Together, we can continue to create a Canada where fairness, equality, and
                        opportunity are the foundation for everyone. Thank you for your continued support,
                        and I look forward to working with you in the years to come.
                    </p>
                    <Link className="w-full" href="https://www.ourcommons.ca/members/en/leah-taylor-roy(105024)#work">
                        <button
                            className="mt-6 rounded-lg text-white bg-secendory
            transition-all px-4 py-2 w-full hover:bg-secendory
            hover:scale-105 
            "
                        >
                            Parliamentary Work
                        </button>
                    </Link>
                </div>
            </article>
        </section>
    )
}

export default AboutLeah;