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
        <div className="min-h-screen my-8 md:my-16 lg:my-32">
        <div className="flex flex-col lg:flex-row justify-between mx-4 lg:mx-8 space-y-4 lg:space-y-0 lg:space-x-5">
          
          {/* Main Navigation */}
          <div className="w-full lg:w-fit">
            <MainNavigation 
              selectHandller={(selector) => setSelect(selector)} 
            />
          </div>
  
          {/* Content Area */}
          <div className="flex-1 min-w-0">
            {select ? (
              mainNavigationContent[select]?.component || 
              (subNavigationContentItem?.component ?? null)
            ) : (
              <SubNavigation
                selectHandller={(selector) => setSelect(selector)}
              />
            )}
          </div>
          
        </div>
      </div>
    );
};

export default Dashboard;
