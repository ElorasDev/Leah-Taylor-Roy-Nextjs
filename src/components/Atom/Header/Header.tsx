"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu } from './data';

// images & logo & icons
import { FaBars, FaChevronDown } from 'react-icons/fa';
import Logo from '/public/logo/leah_taylor_roy_logo.png';
import Image from 'next/image';
import { MenuItem } from './types';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0 && pathname === '/') setIsScrolled(false);
      else setIsScrolled(true);


      if (currentScrollY > lastScrollY) setIsVisible(false)
      else setIsVisible(true);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsScrolled(true);
  }

  return (
    <div className={`
    w-full 
    flex 
    justify-between 
    items-center 
    p-4 
    fixed 
    top-0 
    left-0 
    right-0 
    z-50
    transition-transform 
    duration-300 
    text-white 
    ${lastScrollY !== 0 ? (isScrolled ? 'bg-primary' : 'bg-transparent') : 'bg-primary'}
    ${isVisible ? 'translate-y-0' : '-translate-y-full'}
    `}>
      <div className="flex-shrink-0">
        <Image
          src={Logo}
          alt="Logo"
          width={72}
          height={72}
          className="max-w-full h-auto"
          loading="eager"
        />
      </div>
      <div className="hidden min-[768px]:flex flex-shrink-0">
        {
          Menu.map((item) => {
            return (
              <div key={item.id} className={
                `mx-4 
                ${item.pathname === pathname ?
                  "font-bold border-b-2 border-white" : "hover:font-bold"}
                `}>
                {
                  item.pathname ? (
                    <Link href={`/${item.pathname}`} className="flex">
                      {
                        item.title
                      }
                    </Link>
                  )
                    :
                    <div className="relative group">
                      <div className="flex justify-center items-center cursor-pointer">
                        {item.title} {item.sections && <FaChevronDown className="ml-1 mt-1 size-3" />}
                      </div>
                      {item.sections && (
                        <div className="
                        absolute 
                        left-0 
                        hidden 
                        group-hover:block 
                        bg-white 
                        text-neutral 
                        shadow-md 
                        rounded 
                        mt-[1px] 
                        w-40 
                        z-10"
                        >
                          {item.sections.map((service) => (
                            <Link
                              key={service.id}
                              href={`/${service.pathname}`}
                              className="block px-4 py-2 hover:bg-gray-200"
                            >
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                }
              </div>
            );
          })
        }
      </div>
      <div className="hidden md:flex flex-shrink-0">
        <button className="bg-secendory rounded-full text-white font-bold px-4 py-2 shadow-sm">
          Contact Leah
        </button>
      </div>
      <div className="flex md:hidden flex-shrink-0">
        <FaBars onClick={toggleMenu} className="text-2xl cursor-pointer" />
      </div>
      {isMenuOpen && (
        <div className="
        absolute 
        top-16 
        left-0 
        w-full 
        bg-primary 
        text-white 
        flex 
        flex-col 
        items-center 
        md:hidden
        ">
          <div className="py-2">
            {
              Menu.map((item) => {
                return (
                  <div key={item.id} className="text-center mt-2" onClick={() => setOpenSection(!openSection)}>
                    {
                      item.pathname ? (
                        <Link href={`/${item.pathname}`}>
                          {
                            item.title
                          }
                        </Link>
                      )
                        :
                        <div className="flex justify-center">
                          {item.title} <FaChevronDown className="ml-1 mt-2 size-3" />
                        </div>
                    }
                    {item.sections && openSection && (
                      <div className="flex flex-col items-center space-y-2 py-2">
                        {item.sections.map((section: MenuItem) => (
                          <Link key={section.id} href={`/${section.pathname}`}>
                            {section.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })
            }
          </div>
          <div className="my-4 w-3/4">
            <button
              className="bg-secendory font-bold rounded-full text-white px-4 py-2 w-full"
              onClick={() => router.push("/contact-leah")}
            >
              Contact Leah
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;