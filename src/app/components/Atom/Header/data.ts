import { MenuItem } from './data.d';

export const Menu: MenuItem[] = [
    {
        id: 0,
        title: "Home",
        pathname: "/"
    },
    {
        id: 1,
        title: "About Me",
        pathname: "/about-me"
    },
    {
        id: 2,
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
                pathname: "/parliamentary-work"
            },
            {
                id: 2,
                title: "News & Media",
                pathname: "/news"
            },
            {
                id: 3,
                title: "Gallery",
                pathname: "/gallery"
            },
            {
                id: 4,
                title: "Get Involved & Feedback Forms",
                pathname: "/involved-feedback"
            },
        ]
    }
]