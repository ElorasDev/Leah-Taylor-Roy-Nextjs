"use client";
import { useState } from "react";
import { NextPage } from 'next';

//Components
import MainNavigation from "@/components/Atom/DashboardContent/MainNavigation/MainNavigation";
import { mainNavigationContent } from "@/components/Atom/DashboardContent/MainNavigation/data";

const Dashboard: NextPage = () => {

    const [select, setSelect] = useState<number>(0);

    return (
        <div className="h-full my-32">
            <div className="flex justify-between mx-10 space-x-5">
                <div className="w-fit">
                    <MainNavigation selectHandller={(selector) => {
                        setSelect(selector)
                    }} />
                </div>
                <>
                    {
                        mainNavigationContent[select].component
                    }
                </>
            </div>
        </div>
    );
};

export default Dashboard;