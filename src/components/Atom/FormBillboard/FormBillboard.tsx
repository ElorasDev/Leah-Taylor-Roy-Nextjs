"use client";
import { NextPage } from "next";
import { ReactNode } from "react";

interface IBillboardProps {
  image: string;
  contentBox: boolean;
  pageTitle?: string;
  subPageTitle?: string;
  component: ReactNode;
}

const FormBillboard: NextPage<IBillboardProps> = ({ image, contentBox, pageTitle, subPageTitle, component }) => {


  return (
    <section>
      <div className="
          w-full
          relative
          aspect-[16/7]
          sm:aspect-[16/6]
          md:aspect-[16/5]
          lg:aspect-[16/4]
          min-h-[390px]
          sm:min-h-[490px]
          lg:min-h-[570px]">
        <div
          className="absolute rounded-2xl inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/images/Billboard/${image})` }}
          role="img"
          aria-label="Support form background image"
        >
          {contentBox && (
            <div className="hidden sm:flex h-full items-center justify-start px-2 my-2 sm:p-8">
              <div className="                  
                bg-black/60 
                  text-white 
                  backdrop-blur-[0px]
                  backdrop-filter
                  border 
                  border-white/10
                  p-5
                  rounded-xl
                  shadow-lg
                  w-[391px]
                  max-w-[691px]">
                {pageTitle && (
                  <>
                    <h1 className="text-xl font-bold text-left text-white">{pageTitle}</h1>
                    <h1 className="text-3xl font-bold text-left text-white mb-6">{subPageTitle}</h1>
                  </>
                )}
                {component}
              </div>
            </div>
          )}
        </div>
      </div>
      {contentBox && (
        <div className="block sm:hidden mt-4 w-full bg-white p-4 rounded-md">
          {component}
        </div>
      )}
    </section>
  );
};

export default FormBillboard;
