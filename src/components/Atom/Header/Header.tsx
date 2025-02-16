"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

import Logo from '/public/logo/leah_taylor_roy_logo.png';
import { Menu } from './data';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleDropdown = (title: string) =>
    setOpenDropdown(openDropdown === title ? null : title);

  return (
    <header className="w-full fixed top-0 left-0 z-50 shadow-md animate-slideDown" role="banner">
      {/* Top Header Section */}
      <div className="py-3 bg-primary">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="w-1/6 md:w-1/12">
            <Link href="/">
              <Image
                src={Logo}
                alt="Logo"
                width={120}
                height={120}
                className="transition-all duration-300"
              />
            </Link>
          </div>
          {/* Desktop Button */}
          <div className="hidden md:block">
            <Link
              href="/contact-us"
              className="bg-secendory hover:bg-red-900 text-white px-6 py-2 rounded-full transition-colors duration-300 text-sm font-semibold"
            >
              Tell Me Your Opinion
            </Link>
          </div>
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white hover:text-primary"
            onClick={toggleMenu}
          >
            {isMobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <ul className="space-y-4">
              {Menu.map((item) => (
                <li key={item.id} className="px-4 py-2">
                  {item.pathname ? (
                    <Link
                      href={item.pathname}
                      className="block text-gray-700 hover:text-primary transition-all duration-300 font-medium py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <div>
                      <button
                        onClick={() => handleDropdown(item.title)}
                        className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-primary transition-all duration-300"
                      >
                        {item.title}
                        <FiChevronDown
                          className={`ml-2 w-3 h-3 transform ${openDropdown === item.title ? 'rotate-180' : ''
                            }`}
                        />
                      </button>
                      {item.sections && openDropdown === item.title && (
                        <div className="pl-4">
                          {item.sections.map((section) => (
                            <Link
                              key={section.id}
                              href={section.pathname}
                              className="block py-2 text-gray-600 hover:text-primary"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {section.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </li>
              ))}
              <li>
                <Link
                  href="/contact-us"
                  className="block bg-secendory hover:bg-red-900 text-white px-6 py-2 rounded-full text-center mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tell Me Your Opinion
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Bottom Navigation Section */}
      <nav role="navigation">
        <div className="py-4 px-12 hidden md:block bg-white/90 text-black backdrop-blur-md shadow-lg">
          <ul className="flex justify-end space-x-8">
            {Menu.map((item) => (
              <li key={item.id} className="relative group">
                {item.sections ? (
                  <>
                    <button
                      onClick={() => handleDropdown(item.title)}
                      className="flex items-center py-[2.5px] text-sm font-semibold hover:text-primary transition-all duration-300"
                    >
                      {item.title}
                      <FiChevronDown className="ml-1 w-3 h-3" />
                    </button>
                    <div className="absolute left-0 w-48 text-gray-700 bg-white shadow-md rounded-md py-2 hidden group-hover:block">
                      {item.sections.map((section) => (
                        <Link
                          key={section.id}
                          href={section.pathname}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                        >
                          {section.title}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.pathname || '#'}
                    className="px-3 py-2 text-sm font-semibold hover:text-primary transition-all duration-300"
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
