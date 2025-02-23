import Image from 'next/image';
import { contentAbout } from './data';
import { Fragment } from 'react';

const AboutLeahContent = () => {
    return (
        <article>
            {contentAbout.map((item, index) => (
                <Fragment key={item.id}>
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        <Image
                            src={`/images/Leah/${item.src}`}
                            alt={`Professional Journey of Leah Taylor Roy - ${item.title}`}
                            width={400}
                            height={450}
                            className="rounded-lg shadow-lg"
                            loading="lazy"
                            sizes="(max-width: 768px) 400px, 600px"
                        />
                        <article className="md:w-1/2 text-center md:text-left">
                            <h2 className="text-2xl font-bold text-primary mb-4">
                                {item.title}
                            </h2>
                            <div className="h-64 overflow-y-auto">
                                {item.content
                                    .split('\n')
                                    .filter(sentence => sentence.trim().length > 0)
                                    .map((sentence, index) => (
                                        <p key={index} className="text-lg text-gray-700 mb-4">
                                            {sentence.trim()}
                                        </p>
                                    ))}
                            </div>
                        </article>
                    </div>
                    {index < contentAbout.length - 1 && <hr className="my-6 border-gray-300" />}
                </Fragment>
            ))}
        </article>
    );
};

export default AboutLeahContent;
