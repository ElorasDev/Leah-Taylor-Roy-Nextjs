import { MenuItem, SocialMedia } from "./types";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import Linkedin from "../Icons/Linkedin";
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
        pathname: "/events"
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
        pathname: "https://www.facebook.com/LeahTaylorRoyMP",
        vector: <Facebook />,
    },
    {
        id: 1,
        title: "Instagram",
        pathname: "https://www.instagram.com/leah_taylor_roy/?hl=en",
        vector: <Instagram />,
    },
    {
        id: 2,
        title: "Linkedin",
        pathname: "https://www.linkedin.com/in/leah-taylor-roy-377b2245",
        vector: <Linkedin />,
    },
    {
        id: 4,
        title: "Youtube",
        pathname: "https://www.youtube.com/@Leah_Taylor_Roy",
        vector: <Youtube />,
    }
];