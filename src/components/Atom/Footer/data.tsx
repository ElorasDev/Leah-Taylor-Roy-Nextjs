import { MenuItem, SocialMedia } from "./data";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import Linkedin from "../Icons/Linkedin";
import X from "../Icons/X";
import Youtube from "../Icons/Youtube";

export const menu: MenuItem[] = [
    {
        id: 0,
        title: "Home",
        pathname: "/"
    },
    {
        id: 1,
        title: "Resource",
        pathname: "/resource"
    },
    {
        id: 2,
        title: "About Me",
        pathname: "/about-me"
    },
    {
        id: 3,
        title: "News & Media",
        pathname: "/news"
    },
    {
        id: 4,
        title: "Contact",
        pathname: "/contact"
    },
    {
        id: 5,
        title: "Parliamentary Work",
        pathname: "/parliamentary-work"
    },
    {
        id: 6,
        title: "Constituency Work",
        pathname: "/constituency-work"
    },
    {
        id: 7,
        title: "Privacy Policy & Accessibility",
        pathname: "/policy"
    },
]

export const socialMedia: SocialMedia[] = [
    {
        id: 0,
        title: "Facebook",
        pathname: "/",
        vector: <Facebook />,
    },
    {
        id: 1,
        title: "Instagram",
        pathname: "/",
        vector: <Instagram />,
    },
    {
        id: 2,
        title: "Linkedin",
        pathname: "/",
        vector: <Linkedin />,
    },
    {
        id: 3,
        title: "X",
        pathname: "/",
        vector: <X />,
    },
    {
        id: 4,
        title: "Youtube",
        pathname: "/",
        vector: <Youtube />,
    }
];