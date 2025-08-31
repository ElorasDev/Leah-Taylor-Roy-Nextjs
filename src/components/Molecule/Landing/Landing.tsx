"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import Billboard from "@/components/Atom/Billboard/Billboard";
import Summary from "@/components/Atom/Summary/Summary";
import useModal from "@/hooks/useModal/useModal";

const Download = dynamic(() => import("@/components/Atom/Download/Download"), {
  ssr: false,
  loading: () => <p className="text-center">Loading...</p>,
});

const KeyInitiativesAndStatements = dynamic(
  () =>
    import(
      "@/components/Atom/KeyInitiativesAndStatements/KeyInitiativesAndStatements"
    ),
  {
    ssr: false,
    loading: () => <p className="text-center">Loading...</p>,
  }
);

const ParallaxComponent = dynamic(
  () => import("../ParallaxComponent/ParallaxComponent"),
  {
    ssr: false,
    loading: () => <p className="text-center">Loading...</p>,
  }
);

const ContactSection = dynamic(
  () => import("@/components/Atom/ContactSection/ContactSection"),
  {
    ssr: false,
    loading: () => <p className="text-center">Loading...</p>,
  }
);

// images
import LeahImage from "../../../../public/images/Leah/leah-image.webp";



const Landing = () => {
  const { showModal, closeModal, resetModal } = useModal();

  // Reset modal state on page reload
  useEffect(() => {
    const handleBeforeUnload = () => {
      resetModal();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [resetModal]);

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm transition-all duration-300 p-4 md:p-6">
          <div
            className="bg-white rounded-xl max-w-lg w-full relative shadow-2xl border border-gray-100 transform transition-all duration-300 ease-out max-h-[90vh] md:max-h-[80vh] overflow-auto"
            style={{
              boxShadow:
                "0 10px 50px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.05)",
            }}
          >
            <button
              onClick={closeModal}
              className="sticky top-4 float-right right-4 text-gray-400 hover:text-gray-800 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100 z-10"
              aria-label="Close Modal"
            >
              <FiX size={20} />
            </button>

            <div className="p-6 md:p-10 space-y-6 text-center">
              <div className="inline-block p-2 rounded-full bg-yellow-100 text-yellow-700 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight">
                ⚠️ You’ve Reached Leah Taylor Roy’s Official MP Website
              </h3>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Leah Taylor Roy is currently running for re-election as the
                Liberal candidate in Aurora–Oak Ridges–Richmond Hill.
              </p>


              <div className="py-2">
                <p className="text-base md:text-lg text-gray-600 font-medium">
                  👉 To learn more about her campaign, upcoming events, or to
                  get involved, please visit:
                </p>
                <a
                  href="https://supportleah.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center text-lg md:text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  🔗 supportleah.ca
                </a>
              </div>

              <div className="py-2">
                <p className="text-base md:text-lg text-gray-600 font-medium">
                  📥 Official Letter of Support for Leah Taylor Roy
                </p>
                <Link
                  href="https://tysgmcveyifgbduukmqj.supabase.co/storage/v1/object/sign/documents/Open%20Letter.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkb2N1bWVudHMvT3BlbiBMZXR0ZXIucGRmIiwiaWF0IjoxNzQ1NzkwNjM0LCJleHAiOjE3NzczMjY2MzR9.aMmAtV572NUys0IjzlXkhBXTYQNOggA03ej6zjYSeuo"
                  download
                  className="mt-2 inline-flex items-center text-lg md:text-xl font-bold text-green-600 hover:text-green-800 transition-colors duration-200"
                >
                  🔗 Download PDF
                </Link>
              </div>

              {/* آدرس دفتر */}
              <div className="border-t border-gray-100 pt-6 mt-4">
                <p className="text-gray-600">
                  📍 Campaign Office Address (for election-related inquiries):
                </p>
                <div className="mt-3 p-3 md:p-4 bg-gray-50 rounded-lg inline-flex items-center text-sm md:text-base flex-wrap justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="font-semibold text-gray-800">
                    141 King Rd, Unit 4, Richmond Hill, ON
                  </span>
                </div>
              </div>

              <p className="text-gray-600 italic mt-4">
                Thank you for your support!
              </p>
            </div>
          </div>
        </div>
      )}

      <section>
        <div className="py-24 px-8">
          <div className="my-14">
            <Billboard image="landing-billboard.webp" contentBox={true} />
          </div>
          <Summary
            src={LeahImage}
            title="About me"
            content={`
              Leah Taylor Roy - Your Voice for Aurora—Oak Ridges—Richmond Hill
              Since 2021, Leah Taylor Roy has been a proud and dedicated Member of Parliament for Aurora—Oak Ridges—Richmond Hill, where she serves as a voice for the community she knows and loves. Raised in York Region, Leah carries with her a deep commitment to the values of collaboration, compassion, and integrity that define this vibrant part of Canada.
              Leah's career, spanning business, public policy, and grassroots advocacy, has equipped her with the insight and experience to tackle the challenges facing her constituents. In Parliament, she works tirelessly on the issues that matter most to the people of Aurora—Oak Ridges—Richmond Hill: from supporting youth mental health to advocating for environmental stewardship, affordable housing, and a thriving local economy. With a special focus on building inclusive, sustainable communities, Leah's vision for a prosperous future extends beyond just today — it's about creating a legacy of support and opportunity for all Canadians.
              Leah believes that a community is at its best when it lifts each other up, and her work in Parliament is a direct reflection of that belief. Whether it's securing funding for small businesses, advancing policies for a cleaner environment, or championing the wellbeing of the next generation, Leah is proud to be part of the team that builds the future Canadians deserve.
            `}
            href="/about-me"
            buttonContent="Discover More About Leah"
          />
        </div>
        <Download />
        <div className="!p-0 !m-0">
          <KeyInitiativesAndStatements />
        </div>
        <div className="!p-0 my-16">
          <ParallaxComponent />
        </div>
        <ContactSection title="Get in Touch" />
      </section>
    </>
  );
};

export default Landing;