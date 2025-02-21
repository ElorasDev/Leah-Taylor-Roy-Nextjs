"use client";
import { NextPage } from "next";
import { subNavigationContent } from "./data";


interface ISubNavigationProps {
  selectHandller: (selector: number) => void;
}

const SubNavigation: NextPage<ISubNavigationProps> = ({ selectHandller }) => {

  return (
    <div className="w-full mx-auto py-8 px-4">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {subNavigationContent.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center hover:shadow-lg transition-all cursor-pointer"
            onClick={() => selectHandller(item.id)}
          >
            <div className="text-4xl text-primary">
              {item.icon}
            </div>
            <h3 className="mt-4 text-xl font-semibold">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubNavigation;
