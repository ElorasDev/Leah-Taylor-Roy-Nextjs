import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/utils/FormatData";

interface CardNewsProps {
  id: number;
  index_image_url: string;
  title: string;
  updated_at: string;
}

const CardNews: NextPage<CardNewsProps> = ({ index_image_url, title, updated_at, id }) => {

  // JSON-LD structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": title,
    "datePublished": updated_at,
    "image": index_image_url,
    "author": {
      "@type": "Person",
      "name": "Leah Taylor Roy"
    }
  };

  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
      {/* JSON-LD structured data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* News image */}
      <figure>
        <Image
          src={`${index_image_url}`}
          alt={title}
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </figure>

      {/* News details */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-500 mb-3">Published on {formatDate(updated_at)}</p>

        {/* Author and like count */}
        <div className="flex justify-between items-center text-sm text-gray-600">
          <p>Author: Leah Taylor Roy</p>
        </div>

        {/* Read more link with better accessibility */}
        <Link
          href={`/news/${title}/${id}`}
          className="inline-block my-4 bg-secendory hover:scale-105 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
          aria-label={`Read more about: ${title}`}
        >
          Read More
        </Link>
      </div>
    </article>
  );
};

export default CardNews;
