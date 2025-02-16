import { MenuItem } from "./types";

export const Menu: MenuItem[] = [
    {
        id: 0,
        title: "Home",
        pathname: "/"
    },
    {
        id: 1,
        title: "About Leah",
        pathname: "/about-leah"
    },
    {
        id: 2,
        title: "News",
        pathname: "/news"
    },
    {
        id: 3,
        title: "Events",
        pathname: "/events"
    },
    {
        id: 5,
        title: "Services",
        sections: [
            {
                id: 0,
                title: "Constituency Work",
                pathname: "/constituency-work"
            },
            {
                id: 1,
                title: "Parliamentary Work",
                pathname: "https://www.ourcommons.ca/members/en/leah-taylor-roy(105024)#work"
            },
            {
                id: 2,
                title: "Gallery",
                pathname: "/gallery"
            },
            {
                id: 3,
                title: "Get Involved & Feedback Forms",
                pathname: "involved-feedback"
            },
        ]
    },
    {
        id: 4,
        title: "Contact Us",
        pathname: "/contact-us",
    },
]