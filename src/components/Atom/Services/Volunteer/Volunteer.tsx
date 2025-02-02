import Link from 'next/link';

const Volunteer = () => {
    return (
        <section className="max-w-4xl mx-auto py-12 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
                Volunteer Opportunities
            </h2>
            <article>
                <p className="text-lg text-gray-700 mb-6">
                    Volunteering with our team is a great way to get engaged with the community. We’d love your help!
                </p>
            </article>
            <Link
                href="/volunteer"
                className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition duration-300"
            >
                Become a Volunteer
            </Link>
        </section>
    );
};

export default Volunteer;
