import Billboard from '@/components/Atom/Billboard/Billboard';
import ContactSection from '@/components/Atom/ContactSection/ContactSection';
import KeyInitiativesAndStatements from '@/components/Atom/KeyInitiativesAndStatements/KeyInitiativesAndStatements';
import Summary from '@/components/Atom/Summary/Summary';
import ParallaxComponent from '../ParallaxComponent/ParallaxComponent';


// images
import LeahImage from "../../../../public/images/Leah/leah-image.webp";

const Landing = () => {
  return (
    <section>
      <div className="py-24 px-8">
        <div className='my-14'>
          <Billboard
            image="landing-billboard.webp"
            contentBox={true}
          />
        </div>
        <Summary
          src={LeahImage}
          title="About me"
          content={`
          Leah Taylor Roy - Your Voice for Aurora—Oak Ridges—Richmond Hill
Since 2021, Leah Taylor Roy has been a proud and dedicated Member of Parliament for Aurora—Oak Ridges—Richmond Hill, where she serves as a voice for the community she knows and loves. Raised in York Region, Leah carries with her a deep commitment to the values of collaboration, compassion, and integrity that define this vibrant part of Canada.
Leah’s career, spanning business, public policy, and grassroots advocacy, has equipped her with the insight and experience to tackle the challenges facing her constituents. In Parliament, she works tirelessly on the issues that matter most to the people of Aurora—Oak Ridges—Richmond Hill: from supporting youth mental health to advocating for environmental stewardship, affordable housing, and a thriving local economy. With a special focus on building inclusive, sustainable communities, Leah’s vision for a prosperous future extends beyond just today — it’s about creating a legacy of support and opportunity for all Canadians.
Leah believes that a community is at its best when it lifts each other up, and her work in Parliament is a direct reflection of that belief. Whether it’s securing funding for small businesses, advancing policies for a cleaner environment, or championing the wellbeing of the next generation, Leah is proud to be part of the team that builds the future Canadians deserve.
          `}
                    href="/about-me"
                    buttonContent="Discover More About Leah"
        />
      </div>
      <div className="!p-0 !m-0">
        <KeyInitiativesAndStatements />
      </div>
      <div className="!p-0 my-16">
        <ParallaxComponent />
      </div>
      <ContactSection title="Get in Touch" />
    </section>
  );
};

export default Landing;
