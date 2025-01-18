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