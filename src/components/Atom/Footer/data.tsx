import { MenuItem, SocialMedia } from "./types";
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
        title: "Events",
        pathname: "/resource"
    },
    {
        id: 2,
        title: "About Me",
        pathname: "/about-me"
    },
    {
        id: 3,
        title: "News",
        pathname: "/news"
    },
    {
        id: 4,
        title: "Contact Us",
        pathname: "/contact-us"
    },
    {
        id: 5,
        title: "Parliamentary Work",
        pathname: "https://www.ourcommons.ca/members/en/leah-taylor-roy(105024)#work"
    },
    {
        id: 6,
        title: "Constituency Work",
        pathname: "/constituency-work"
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