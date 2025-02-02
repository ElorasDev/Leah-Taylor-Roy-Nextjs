"use client";
import { useEffect, useState } from "react";
import { NextPage } from 'next';
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

// Components
import MainNavigation from "@/components/Atom/DashboardContent/MainNavigation/MainNavigation";
import { mainNavigationContent } from "@/components/Atom/DashboardContent/MainNavigation/data";

const Dashboard: NextPage = () => {
    const [select, setSelect] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();
    const savedToken = Cookies.get('auth_token');

    useEffect(() => {
        if (!savedToken) {
            router.push('/');
        } else {
            setLoading(false);
        }
    }, [router, savedToken]);

    if (loading) return null;

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
