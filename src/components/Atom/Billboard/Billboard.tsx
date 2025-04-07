"use client";
import { NextPage } from "next";
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

interface IBillboardProps {
    image: string | StaticImageData;
    contentBox: boolean;
    pageTitle?: string;
}

const Billboard: NextPage<IBillboardProps> = ({ image, contentBox, pageTitle }) => {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const titleRef = useRef<HTMLDivElement>(null);
    const dividerRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (titleRef.current && dividerRef.current) {
            const resizeObserver = new ResizeObserver(() => {
                const titleWidth = titleRef.current?.clientWidth || 0;
                if (dividerRef.current) {
                    dividerRef.current.style.width = `${titleWidth}px`;
                }
            });
            
            resizeObserver.observe(titleRef.current);
            
            const titleWidth = titleRef.current.clientWidth;
            dividerRef.current.style.width = `${titleWidth}px`;
            
            return () => {
                if (titleRef.current) {
                    resizeObserver.unobserve(titleRef.current);
                }
            };
        }
    }, [isVisible]);

    return (
        <section className="w-full mb-16">
            {/* Modern minimalist hero design */}
            <div className="relative w-full">
                {/* Main container with clean lines */}
                <div 
                    className={`
                        relative 
                        w-full 
                        aspect-[16/8] sm:aspect-[16/7] md:aspect-[16/12] lg:aspect-[16/8]
                        overflow-hidden
                        rounded-none
                        transition-all duration-700 ease-out
                        ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}
                        border-t-4 border-primary
                        border-b-4
                    `}
                    style={{ 
                        backgroundImage: `url(/images/Billboard/${image})`,
                        backgroundPosition: 'center 40%',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        minHeight: '360px',
                    }}
                >
                    {/* Clean, modern overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30"></div>
                    
                    {/* Side bar accent */}
                    <div className="absolute top-0 bottom-0 left-0 w-1 bg-primary"></div>
                    <div className="absolute top-0 bottom-0 right-0 w-1 bg-primary"></div>
                    
                    {/* Content container */}
                    <div className="relative h-full z-10">
                        <div className="container mx-auto px-8 h-full flex items-center">
                            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-12">
                                {/* Left side - clean modern title */}
                                {pageTitle && (
                                    <div className={`mb-8 md:mb-0 md:max-w-xl lg:max-w-2xl transition-all duration-700 delay-200 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                                        <div className="inline-block bg-primary text-white px-4 py-2 mb-4 text-sm uppercase tracking-widest font-medium">
                                            Parliamentary Updates
                                        </div>
                                        
                                        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none">
                                            <span ref={titleRef} className="inline-block">
                                                {pageTitle}
                                            </span>
                                            <div 
                                                ref={dividerRef} 
                                                className="h-1 bg-primary mt-1 w-full"
                                            ></div>
                                        </div>
                                    </div>
                                )}
                                
                                {/* Right side - content box with clean design */}
                                {contentBox && (
                                    <div className={`hidden md:block md:w-[420px] lg:w-[500px] transition-all duration-700 delay-400 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                                        <div className="bg-white shadow-xl overflow-hidden transform transition duration-500 
                                            hover:shadow-2xl hover:-translate-y-1">
                                            
                                            <div className="h-2 bg-primary"></div>
                                            
                                            <div className="p-10">
                                                <h2 className="font-bold text-3xl text-gray-800 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-primary mr-4 inline-block"></span>
                                                    Your voice matters
                                                </h2>
                                                
                                                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                                                    Sharing Your Thoughts Helps Me Better Represent You.
                                                    By outlining your priorities, I can deliver even more for you, your family, and our community.
                                                </p>
                                                
                                                <button
                                                    className="w-full py-5 px-6 bg-primary text-white text-lg font-semibold
                                                    transition-all duration-300 hover:bg-black 
                                                    flex items-center justify-center group"
                                                    onClick={() => router.push("https://www.ourcommons.ca/members/en/leah-taylor-roy(105024)#work")}
                                                >
                                                    <span>Explore Parliamentary Work</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7M5 12h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile content card with minimal design */}
            {contentBox && (
                <div className={`block md:hidden mt-8 mx-4 transition-all duration-700 delay-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="bg-white shadow-lg overflow-hidden">
                        <div className="h-1 bg-primary"></div>
                        <div className="p-6">
                            <h2 className="font-bold text-2xl text-gray-800 mb-4 flex items-center">
                                <span className="w-1 h-6 bg-primary mr-3 inline-block"></span>
                                Your voice matters
                            </h2>
                            
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Sharing Your Thoughts Helps Me Better Represent You.
                                By outlining your priorities, I can deliver even more for you and our community.
                            </p>
                            
                            <button
                                className="w-full py-4 px-4 bg-primary text-white font-semibold
                                transition-all duration-300 hover:bg-black 
                                flex items-center justify-center group"
                                onClick={() => router.push("https://www.ourcommons.ca/members/en/leah-taylor-roy(105024)#work")}
                            >
                                <span>Explore Parliamentary Work</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7M5 12h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Billboard;