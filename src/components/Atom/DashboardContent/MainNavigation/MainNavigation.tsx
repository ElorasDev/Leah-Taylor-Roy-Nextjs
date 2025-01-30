import { Fragment } from 'react';
import Image from 'next/image';
import { NextPage } from 'next';
import myImage from '/public/images/profile/1636640150012.jpg';
import { mainNavigationContent } from './data';


interface IMainNavigation {
    selectHandller: (selector: number) => void;
}

const MainNavigation: NextPage<IMainNavigation> = ({ selectHandller }) => {
    return (
        <>
            <div className="
            border
            border-primary
            max-w-md
            w-[200px]
            rounded-md
            hidden
            md:block
            text-center
            h-fit
            ">
                <div className="m-4">
                    <Image
                        src={myImage}
                        alt="sadraProfile"
                        width={100}
                        height={100}
                        className="rounded-full mx-auto"
                        loading="lazy"
                    />
                </div>
                <div className="my-4">
                    <h2 className="font-bold">Welcome Mrs <span className="text-primary font-bold">Roy</span></h2>
                </div>
                <hr className="my-2 border-primary" />
                {mainNavigationContent.map((item, index) => (
                    <Fragment key={item.id}>
                        <div className="my-2 m-4 flex items-center justify-start">
                            <button
                                onClick={() => selectHandller(item.id)}
                                className="
                                font-bold
                                text-lg
                                flex
                                items-center
                                transition-colors
                                duration-300
                                hover:text-primary
                                ">
                                {item.icon}
                                <span className="ml-2">{item.title}</span>
                            </button>
                        </div>
                        {index < mainNavigationContent.length - 1 && <hr className="my-2 border-primary" />}
                    </Fragment>
                ))}
            </div>
            <div className="
            md:hidden
            fixed
            justify-center
            bottom-0
            left-0
            right-0
            w-full
            z-50
            bg-white
            border-t-2
            border-primary
            shadow-lg
            ">
                <div className="flex justify-around py-2">
                    {mainNavigationContent.map((item, index) => (
                        <Fragment key={item.id}>
                            <button className="transition-colors duration-300 hover:text-primary"
                                    onClick={() => selectHandller(item.id)}>
                                {item.icon}
                            </button>
                            {index < mainNavigationContent.length - 1 && (
                                <div className="border-l border-primary h-6"></div>
                            )}
                        </Fragment>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MainNavigation;