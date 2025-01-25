import { ReactNode } from "react";

export interface MenuItem {
    id: number;
    title: string;
    pathname?: string;
    sections?: {
        id: number;
        title: string;
        pathname: string;
    }[];
}

export interface SocialMedia {
    id:number,
    pathname: string;
    title: string;
    vector: ReactNode;
}