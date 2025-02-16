import Link from 'next/link';
import { resources } from './data';

const DownloadAndLinks = () => {
  return (
    <section className="py-10 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">All you need for your immigration</h2>

      {/* Government Services Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Government Services</h3>
        <ul className="space-y-6">
          {resources
            .filter(resource => resource.category === 'government')
            .map((resource, index) => (
              <li
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {resource.title}
                </h3>
                <p className="text-gray-700 mb-4">{resource.description}</p>
                {resource.note && (
                  <div className="bg-yellow-50 p-3 rounded-md mb-4 text-sm text-yellow-800">
                    {resource.note}
                  </div>
                )}
                <Link
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline"
                >
                  {resource.linkText || 'Learn more'} →
                </Link>
              </li>
            ))}
        </ul>
      </div>

      {/* Federal Government Supports */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Federal Government Supports</h3>
        <ul className="space-y-6">
          {resources
            .filter(resource => resource.category === 'federal')
            .map((resource, index) => (
              <li
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {resource.title}
                </h3>
                <p className="text-gray-700 mb-4">{resource.description}</p>
                <Link
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline"
                >
                  {resource.linkText || 'Learn more'} →
                </Link>
              </li>
            ))}
        </ul>
      </div>

      {/* Crisis Support Section */}
      <div className="bg-red-50 p-6 rounded-lg mb-12">
        <h3 className="text-xl font-bold mb-4 text-red-800">Immediate Support</h3>
        <p className="text-gray-700 mb-2">
          <strong>988 Crisis Line:</strong> Available 24/7, Call or text 988
        </p>
        <p className="text-sm text-red-700 mb-4">
          If your safety is at risk, call 911 immediately
        </p>
        <Link
          href="https://988.ca"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-semibold hover:underline"
        >
          Read More →
        </Link>
      </div>
    </section>
  );
};

export default DownloadAndLinks;