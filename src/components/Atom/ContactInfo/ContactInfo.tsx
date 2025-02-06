"use client";
import Link from 'next/link';
import { FaEnvelope, FaMapMarkerAlt, FaFax } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';

const ContactInfo = () => {

    return (
        <section className="contact-info bg-gradient-to-br bg-secendory py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                    Contact Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Email Card */}
                    <div className="contact-item bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-30"></div>

                        <div className="flex flex-col items-center text-center relative z-10">
                            <div className="icon bg-gradient-to-br from-green-100 to-emerald-100 p-5 rounded-full mb-4 shadow-md">
                                <FaEnvelope className="text-green-700 text-3xl transform -rotate-6" />
                            </div>

                            <div className="mb-4">
                                <h3 className="text-xl font-bold text-gray-800 mb-1">Email</h3>
                                <p className="text-sm text-gray-500 font-medium">Direct Communication Channel</p>
                            </div>

                            <div className="group relative">
                                <Link
                                    onClick={() => navigator.clipboard.writeText('leah.taylorroy@parl.gc.ca')}
                                    href="mailto:leah.taylorroy@parl.gc.ca"
                                    className="inline-block px-6 py-2 bg-green-50 rounded-full border-2 border-green-100 
                 text-green-700 hover:text-green-900 hover:border-green-200 
                 hover:bg-green-100 transition-all duration-300 
                 font-semibold text-lg tracking-wide"
                                >
                                    leah.taylorroy@parl.gc.ca
                                </Link>
                                <div className="absolute -bottom-1 left-0 w-full h-1 bg-green-100 opacity-30 
                    group-hover:opacity-50 transition-opacity duration-300"></div>
                            </div>

                            <div className="mt-4 flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-sm text-gray-500">Typically responds within 24h</span>
                            </div>
                        </div>

                        {/* Decorative Corner Element */}
                        <div className="absolute top-0 right-0 w-16 h-16 bg-green-50 opacity-20 
                transform -translate-y-1/2 translate-x-1/2 rotate-45 rounded-lg">
                        </div>
                    </div>

                    {/* Hill Office */}
                    <div className="contact-item bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                        <div className="flex flex-col items-center text-center">
                            <div className="icon bg-purple-100 p-4 rounded-full mb-4">
                                <FaMapMarkerAlt className="text-purple-600 text-2xl" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Hill Office</h3>
                            <address className="not-italic text-gray-600 leading-relaxed mb-4">
                                House of Commons<br />
                                Ottawa, Ontario<br />
                                Canada<br />
                                K1A 0A6
                            </address>
                            <div className="contact-details w-full">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <FiPhone size={18} aria-hidden="true" className="text-gray-600" />
                                    <Link href="tel:+16139920700" className="text-gray-600">
                                        613-992-0700
                                    </Link>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <FaFax className="text-primary" />
                                    <span className="text-gray-600">613-992-0716</span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 mt-4">
                                * Mail may be sent postage-free to any member of Parliament.
                            </p>
                        </div>
                    </div>

                    {/* Constituency Office */}
                    <div className="contact-item bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                        <div className="flex flex-col items-center text-center">
                            <div className="icon bg-orange-100 p-4 rounded-full mb-4">
                                <FaMapMarkerAlt className="text-orange-600 text-2xl" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Constituency Office</h3>
                            <address className="not-italic text-gray-600 leading-relaxed mb-4">
                                102-12820 Yonge Street<br />
                                Richmond Hill, Ontario<br />
                                L4E 4H1
                            </address>
                            <div className="contact-details w-full">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <FiPhone size={18} aria-hidden="true" className="text-gray-600" />
                                    <Link href="tel:+19057738358" className="text-gray-600">
                                        905-773-8358
                                    </Link>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <FaFax className="text-primary" />
                                    <span className="text-gray-600">905-773-8374</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Schema Microdata */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Leah Taylor Roy",
                            "jobTitle": "Member of Parliament",
                            "worksFor": {
                                "@type": "Organization",
                                "name": "House of Commons of Canada"
                            },
                            "email": "leah.taylorroy@parl.gc.ca",
                            "contactPoint": [
                                {
                                    "@type": "ContactPoint",
                                    "telephone": "+1-613-992-0700",
                                    "faxNumber": "+1-613-992-0716",
                                    "contactType": "Hill Office",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "streetAddress": "House of Commons",
                                        "addressLocality": "Ottawa",
                                        "addressRegion": "ON",
                                        "postalCode": "K1A 0A6",
                                        "addressCountry": "CA"
                                    }
                                },
                                {
                                    "@type": "ContactPoint",
                                    "telephone": "+1-905-773-8358",
                                    "faxNumber": "+1-905-773-8374",
                                    "contactType": "Constituency Office",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "streetAddress": "102-12820 Yonge Street",
                                        "addressLocality": "Richmond Hill",
                                        "addressRegion": "ON",
                                        "postalCode": "L4E 4H1",
                                        "addressCountry": "CA"
                                    }
                                }
                            ]
                        })
                    }}
                />
            </div>
        </section>
    );
};

export default ContactInfo;