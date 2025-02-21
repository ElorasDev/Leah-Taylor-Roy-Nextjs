"use client";
import { useEffect, useState } from "react";
import { NextPage } from 'next';
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

// Components
import MainNavigation from "@/components/Atom/DashboardContent/MainNavigation/MainNavigation";
import { mainNavigationContent } from "@/components/Atom/DashboardContent/MainNavigation/data";
import SubNavigation from "@/components/Atom/DashboardContent/SubNavigitaion/SubNavigation";
import { subNavigationContent } from "@/components/Atom/DashboardContent/SubNavigitaion/data";

const Dashboard: NextPage = () => {
    const [select, setSelect] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();
    const savedToken = Cookies.get('auth_token');
    const subNavigationContentItem = subNavigationContent.find((item) => item.id === select);


    useEffect(() => {
        if (!savedToken) {
            router.push('/');
        } else {
            setLoading(false);
        }
    }, [router, savedToken]);

    if (loading) return null;

    return (
        <div className="min-h-screen my-32">
            <div className="flex justify-between mx-10 space-x-5">
                <div className="w-fit">
                    <MainNavigation selectHandller={(selector) => {
                        setSelect(selector)
                    }} />
                </div>
                {
                    select ?
                        <>
                            {
                                mainNavigationContent[select] ?
                                    mainNavigationContent[select].component
                                    :
                                    subNavigationContentItem ?
                                        subNavigationContentItem.component
                                        :
                                        ""
                            }
                        </>
                        :
                        <SubNavigation
                            selectHandller={(selector) => {
                                setSelect(selector)
                            }}
                        />
                }
            </div>
        </div>
    );
};

export default Dashboard;
