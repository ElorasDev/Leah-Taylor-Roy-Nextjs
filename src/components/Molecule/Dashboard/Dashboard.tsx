"use client";
import { useEffect, useState } from "react";
import { NextPage } from 'next';
import { useRouter } from "next/navigation";
import  Cookies  from "js-cookie";

//Components
import MainNavigation from "@/components/Atom/DashboardContent/MainNavigation/MainNavigation";
import { mainNavigationContent } from "@/components/Atom/DashboardContent/MainNavigation/data";

const Dashboard: NextPage = () => {

    const [select, setSelect] = useState<number>(0);
    const router = useRouter();

    useEffect(() => {
      const checkAuth = async () => {
        const savedToken = Cookies.get('auth_token');
        if (!savedToken) {
            router.push('/');
        }
      };
      checkAuth();
    }, [router]);

    return (
        <div className="h-[100vh] my-32">
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