"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

// data item
import { kisContent } from "./data";

const KeyInitiativesAndStatements = () => {
    const router = useRouter();

    return (
        <section className="w-full" aria-labelledby="key-initiatives-title">
            <h1 id="key-initiatives-title" className="text-2xl text-center font-bold text-primary">
                Key Initiatives & Statements
            </h1>

            {kisContent.map((item, index) => {
                const isOdd = index % 2 !== 0;

                return (
                    <article
                        key={item.id}
                        className={`flex flex-col md:flex-row 
                            ${isOdd ? "md:flex-row" : "md:flex-row-reverse"}
                            justify-between items-stretch my-10
                            w-full max-w-7xl mx-auto
                        `}
                    >
            
                        <figure className="w-full md:w-1/2 h-auto flex">
                            <div className="relative w-full h-full">
                                <Image
                                    src={`/images/Leah/${item.src}`}
                                    alt={`Leah Taylor Roy - ${item.title}`}
                                    layout="fill"
                                    objectFit="cover"
                                    loading="lazy"
                                />
                            </div>
                        </figure>

                        <div className="md:w-1/2 bg-white text-center md:text-left p-6 sm:p-8 flex flex-col justify-center relative h-full">
                          
                            <div
                                className={`absolute top-1/2 -translate-y-1/2 
                                    w-0 h-0
                                    border-t-[50px] border-t-transparent
                                    border-b-[50px] border-b-transparent
                                    hidden md:block
                                    ${isOdd ? "right-[100%] border-r-[50px] border-r-white" : "left-[100%] border-l-[50px] border-l-white"}`}
                            ></div>

                            <h2 className="text-xl font-bold text-neutral mt-4">
                                {item.title}
                            </h2>

                            {item.content.split(". ").map((sentence, i) => (
                                <p key={i} className="text-md text-gray-700 mt-4">
                                    {sentence}
                                </p>
                            ))}

                            <button
                                className="mt-6 rounded-lg text-white bg-secondary
                                    transition-colors px-4 py-2 w-full md:w-auto hover:bg-secondary-dark"
                                onClick={() => router.push(`${item.href}`)}
                                aria-label={`Explore ${item.title} Parliamentary Work`}
                            >
                                Explore Parliamentary Work
                            </button>
                        </div>
                    </article>
                );
            })}
        </section>
    );
};

export default KeyInitiativesAndStatements;
