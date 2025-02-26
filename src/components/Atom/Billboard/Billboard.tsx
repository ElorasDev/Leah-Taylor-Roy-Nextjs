"use client";
import { NextPage } from "next";
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

interface IBillboardProps {
    image: string | StaticImageData;
    contentBox: boolean;
    pageTitle?: string;
}

const Billboard: NextPage<IBillboardProps> = ({ image, contentBox, pageTitle }) => {
    const router = useRouter();

    return (
        <section>
            <div
                className="
          w-full
          relative
          aspect-[16/7]
          sm:aspect-[16/6]
          md:aspect-[16/5]
          lg:aspect-[16/4]
          min-h-[370px]
          sm:min-h-[470px]
          lg:min-h-[550px]
        "
            >

                <div
                    className="absolute rounded-2xl inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(/images/Billboard/${image})` }}
                    role="img"
                    aria-label="Landing billboard image"
                >
                    {contentBox && (
                        <div className="hidden sm:flex h-full items-center justify-end px-2 my-2 sm:p-5">
                            <article
                                className="
                  bg-white/20 
                  text-white 
                  backdrop-blur-[20px]
                  backdrop-filter
                  border 
                  border-white/10
                  p-5
                  rounded-xl
                  shadow-lg
                  w-[391px]
                  max-w-[691px]
                "
                            >
                                <h1 className="font-bold text-xl text-center lg:text-2xl">
                                    Your Voice Matters
                                </h1>
                                <p className="text-md text-center">
                                    Sharing Your Thoughts Helps Me Better Represent You.
                                    By outlining your priorities, I can deliver even more for you, your family, and our community.
                                </p>
                                <button
                                    className="
                    rounded-lg
                    text-white
                    border
                    my-4
                    border-secendory
                    hover:bg-secendory
                    transition-colors
                    duration-300
                    font-bold
                    px-4
                    py-2
                    shadow-sm
                    w-full
                  "
                                    onClick={() =>
                                        router.push(
                                            "https://www.ourcommons.ca/members/en/leah-taylor-roy(105024)#work"
                                        )
                                    }
                                >
                                    Explore Parliamentary Work
                                </button>
                            </article>
                        </div>
                    )}
                </div>
                {
                    pageTitle && (
                        <div className="absolute bottom-0 left-0 p-6 z-10">
                            <h1 className="text-3xl font-bold text-left text-white border-b-4 border-primary mb-6">
                                {
                                    pageTitle
                                }
                            </h1>
                        </div>
                    )}
            </div>

            {contentBox && (
                <div className="block sm:hidden mt-4 w-full">
                    <article
                        className="
            text-black
            border
            border-white/10
            p-5
            rounded-xl
            w-full
          "
                    >
                        <h1 className="font-bold text-xl text-center mb-4">
                            Your Voice Matters
                        </h1>
                        <p className="text-base text-center mb-6">
                            Sharing Your Thoughts Helps Me Better Represent You.
                            By outlining your priorities, I can deliver even more for you, your family, and our community.
                        </p>

                        <div className="space-y-4">
                            <button
                                className="
                rounded-lg
                text-primary
                my-4
                border
                border-secendory
                hover:bg-secendory/20
                hover:text-white
                hover:font-bold
                transition-colors
                px-4
                py-2
                w-full
              "
                            >
                                Explore Parliamentary Work
                            </button>
                        </div>
                    </article>
                </div>
            )}
        </section>
    );
};

export default Billboard;
