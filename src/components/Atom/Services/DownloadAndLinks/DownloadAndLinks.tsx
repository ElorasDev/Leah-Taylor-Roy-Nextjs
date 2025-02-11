import Link from 'next/link';
import { resources } from './data';

const DownloadAndLinks = () => {
  return (
    <section className="py-10 px-2">
      <h2 className="text-3xl font-bold text-center mb-6">Downloads & Links</h2>
      <ul className="space-y-4">
        {resources.map((resource, index) => (
          <li key={index} className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
            <p className="text-gray-700 mb-4">{resource.description}</p>
            <Link
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold hover:underline"
            >
              Learn more →
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DownloadAndLinks;
