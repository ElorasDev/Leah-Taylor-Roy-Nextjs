import type { Metadata } from "next";
import Dashboard from '@/components/Molecule/Dashboard/Dashboard'


export const metadata: Metadata = {
    title: "Dashboard",
    robots: {
        index: false,
        follow: true,
    }
}

const DashboardPage = () => {
    return (
        <div className="h-[100%] bg-white py-4">
            <Dashboard />
        </div>
    )
}

export default DashboardPage;