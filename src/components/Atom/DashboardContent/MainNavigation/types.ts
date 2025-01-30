import { ReactNode } from "react";

export interface MainNavigationContentType {
    id: number;
    title: string;
    component?: ReactNode;
    icon?: ReactNode;
}