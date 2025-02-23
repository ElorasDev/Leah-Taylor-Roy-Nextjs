import Link from 'next/link';
import { FiUsers, FiBell, FiArrowRight } from 'react-icons/fi';

const Volunteer = () => {
    return (
        <section className="relative bg-gradient-to-b py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-20 -left-20 w-64 h-64 md:w-96 md:h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
                <div className="absolute top-40 -right-20 w-64 h-64 md:w-96 md:h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto relative">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-4 transition-all duration-500 hover:scale-105 inline-block px-2">
                        Get Involved – Help Make a Difference
                    </h2>
                    <p className="text-base md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto px-4">
                        Your involvement is key to making our community and country better. Here is how you can get involved:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16 px-2">
                    {/* Volunteer Card */}
                    <div className="group bg-white p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 min-h-[280px] flex flex-col overflow-hidden">
                        <div className="flex items-start mb-4 md:mb-6">
                            <div className="bg-blue-100 p-3 md:p-4 rounded-xl md:rounded-2xl mr-3 md:mr-4 group-hover:bg-blue-200 transition-colors shrink-0">
                                <FiUsers className="text-blue-600 text-2xl md:text-3xl" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 break-words">Volunteer</h3>
                        </div>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-auto break-words">
                            Join our team and help spread the word about the issues that matter to our community.
                        </p>
                    </div>

                    {/* Newsletter Card */}
                    <div className="group bg-white p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 min-h-[280px] flex flex-col overflow-hidden">
                        <div className="flex items-start mb-4 md:mb-6">
                            <div className="bg-orange-100 p-3 md:p-4 rounded-xl md:rounded-2xl mr-3 md:mr-4 group-hover:bg-orange-200 transition-colors shrink-0">
                                <FiBell className="text-orange-600 text-2xl md:text-3xl" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 break-words">Stay Updated</h3>
                        </div>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-auto break-words">
                            Sign up for our newsletter to stay informed about important issues, upcoming events, and ways to make a difference.
                        </p>
                    </div>
                </div>

                <div className="text-center px-4">
                    <Link
                        href="/volunteer"
                        className="inline-flex items-center bg-gradient-to-r bg-primary text-white px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-xl md:rounded-2xl text-base md:text-lg font-bold hover:shadow-xl md:hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
                    >
                        Become a Volunteer
                        <FiArrowRight className="ml-2 md:ml-3 transform group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Volunteer;