"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { data } from "./data";

const Services = () => {
    const [activeTab, setActiveTab] = useState(data[0].id);

    return (
        <section className="max-w-4xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold text-center mb-6">MP Services</h1>

            {/* Tab List */}
            <div
                role="tablist"
                className="flex overflow-x-auto md:overflow-hidden border-b mb-6 space-x-4 md:space-x-0"
            >
                {data.map((item) => (
                    <h2 key={item.id} className="text-lg font-medium">
                        <button
                            id={`tab-${item.id}`}
                            role="tab"
                            aria-selected={activeTab === item.id}
                            aria-controls={`panel-${item.id}`}
                            className={twMerge(
                                "whitespace-nowrap px-6 py-3 text-lg font-medium border-b-4 transition-all",
                                activeTab === item.id
                                    ? "border-primary text-primary duration-200 transition-colors"
                                    : "border-transparent text-neutral hover:text-primary"
                            )}
                            onClick={() => setActiveTab(item.id)}
                        >
                            {item.title}
                        </button>
                    </h2>
                ))}
            </div>

            {/* Content Panel */}
            <div
                id={`panel-${activeTab}`}
                role="tabpanel"
                aria-labelledby={`tab-${activeTab}`}
                className="p-6 bg-white bg-shadow rounded-lg shadow-md transition-opacity duration-300 ease-in-out"
            >
                    {data.find((item) => item.id === activeTab)?.component}
            </div>
        </section>
    );
};

export default Services;
