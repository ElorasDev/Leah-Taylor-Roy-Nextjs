import Image from "next/image";

const AboutLeah = () => {
    return (
        <section className="py-8 px-4 md:px-8">
            <div className="flex flex-col md:flex-row-reverse justify-between items-center md:items-start">

                <div className="mb-6 md:mb-0 flex justify-center">
                    <Image
                        src="/images/Leah/leah-image.webp"
                        alt="Leah Taylor Roy"
                        width={425}
                        height={550}
                        className="rounded-lg shadow-lg"
                        loading="lazy"
                        sizes="(max-width: 768px) 400px, 600px"
                    />
                </div>

                <article className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-2xl font-bold text-neutral mb-4">
                        About Leah Taylor Roy
                    </h1>
                    <p className="text-lg text-gray-700 mb-4">
                        Leah Taylor Roy has been serving as the Member of Parliament for Aurora—Oak Ridges—Richmond Hill since 2021. With a strong background in business and community advocacy, Leah brings a wealth of experience and a deep commitment to public service.
                    </p>
                    <p className="text-lg text-gray-700">
                        Leah is dedicated to representing the [Constituency Name] in Parliament, focusing on key issues such as [key issues]. With her extensive experience in public service and community work, she remains passionate about making a positive impact.
                    </p>
                    <button className="
                                my-5
                                rounded-lg
                                text-white
                                bg-secendory
                                transition-colors
                                px-4
                                py-2
                                w-full
                            ">
                        Explore Parliamentary Work
                    </button>
                </article>

            </div>
        </section>
    );
}

export default AboutLeah;
