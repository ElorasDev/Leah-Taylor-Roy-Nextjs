"use client";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import Image, { StaticImageData } from "next/image";

interface ISummaryProps {
  title: string;
  content: string;
  src: string | StaticImageData;
  href?: string;
  buttonContent?: string;
  reverse?: boolean;
}

const Summary: NextPage<ISummaryProps> = ({
  title,
  content,
  src,
  href,
  buttonContent,
  reverse = false
}) => {
  const router = useRouter();

  return (
    <section className="py-8 px-4 md:px-8">
      <div className={`flex flex-col ${reverse ? "md:flex-row" : "md:flex-row-reverse"} justify-between items-center md:items-start`}>
        
        {/* Container with fixed width and height */}
        <figure className="relative mb-6 md:mb-0 flex justify-center" style={{ width: "350px", height: "350px" }}>
          <Image
            src={src}
            alt="Leah Taylor Roy"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg shadow-lg"
            loading="lazy"
            sizes="(max-width: 768px) 400px, 600px"
          />
        </figure>

        <article className="md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl font-bold text-neutral mb-4">
            {title}
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            {content}
          </p>
          {buttonContent && (
            <button
              className="my-5 rounded-lg text-white bg-secendory transition-colors px-4 py-2 w-full"
              onClick={() => href && router.push(href)}
            >
              {buttonContent}
            </button>
          )}
        </article>

      </div>
    </section>
  );
}

export default Summary;
