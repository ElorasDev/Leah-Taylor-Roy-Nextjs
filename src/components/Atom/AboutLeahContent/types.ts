import { StaticImageData } from "next/image";

export interface ContentAbout {
    id: number
    title: string;
    content: string;
    src: string | StaticImageData;
}