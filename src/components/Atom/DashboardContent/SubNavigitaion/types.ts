import { ReactNode } from "react";

export interface SubNavigationContentType {
        id: number;
        title: string;
        component?: ReactNode;
        icon?: ReactNode;
}