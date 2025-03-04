import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '/public/logo/leah_taylor_roy_logo.png';
import { menu, socialMedia } from './data';

const Footer = () => {
    return (
        <div className="bg-primary text-white">
            <div className="
            w-full
            flex
            flex-col
            md:flex-row
            justify-between
            items-center"
            >
                <div className="flex-shrink-0 mb-4 md:mb-0 flex justify-center md:justify-start">
                    <Image
                        src={Logo}
                        alt="Logo"
                        width={261}
                        height={157}
                        className="max-w-full h-auto ml-[0px] md:ml-[30px]"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-x-16 m-7">
                    {menu.map((item) => (
                        <Link key={item.id} href={`${item.pathname}` || "/"} className="hover:font-bold text-center md:text-left">
                            {item.title}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="mt-4 border-t border-white"></div>
            <div className="
            flex 
            justify-center
            md:justify-end
            gap-x-7
            px-4
            md:px-16
            py-5"
            >
                {socialMedia.map((item) => (
                    <div key={item.id}>
                        <Link href={item.pathname}>
                            {item.vector}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Footer;