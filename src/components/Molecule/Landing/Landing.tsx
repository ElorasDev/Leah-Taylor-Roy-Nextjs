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
          <div className="py-20 px-8">
            <Billboard
             image="landing-billboard.webp" 
             contentBox={true}
             />
            <Summary
              src={LeahImage}
              title="About Me"
              content="Leah Taylor Roy has been serving as the Member of Parliament for Aurora—Oak Ridges—Richmond Hill since 2021. With a background in business and community advocacy, Leah brings a wealth of experience and a deep commitment to public service. She is proud to represent her constituency in Parliament and passionately works on key issues that matter to the community."
              href="https://www.ourcommons.ca/members/en/leah-taylor-roy(105024)#work"
              buttonContent="Explore Parliamentary Work"
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
