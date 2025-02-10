import type { Metadata } from "next";
import Login from '@/components/Molecule/Login/Login';



export const metadata: Metadata = {
    title: "Login",
    robots: {
        index: false,
        follow: true,
    }
}

const LoginPage = () => {
    return (
        <div className="h-[100vh] flex justify-center items-center">
            <Login />
        </div>
    )
}

export default LoginPage;