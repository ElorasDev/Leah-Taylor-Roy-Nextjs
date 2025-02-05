// types
import { MainNavigationContentType } from './types';

// Components
import NewsManagement from '../NewsManagement/NewsManagement';
import BlogManagement from '../BlogManagement/BlogManagement';
import GalleryManagement from '../Gallery/GallaryManagement';
import EventManagement from '../EventManagement/EventManagement';

// icons
import {
    FaHome,
    FaNewspaper,
    FaBlog,
    FaImages,
    FaCalendarAlt,
    FaEnvelope
} from 'react-icons/fa';

export const mainNavigationContent: MainNavigationContentType[] = [
    {
        id: 0,
        title: "Home",
        icon: <FaHome />,
    },
    {
        id: 1,
        title: "News",
        icon: <FaNewspaper />,
        component: <NewsManagement />,
    },
    {
        id: 2,
        title: "Blog",
        icon: <FaBlog />,
        component: <BlogManagement />
    },
    {
        id: 3,
        title: "Gallery",
        icon: <FaImages />,
        component: <GalleryManagement />
    },
    {
        id: 4,
        title: "Events",
        icon: <FaCalendarAlt />,
        component: <EventManagement />
    },
    {
        id: 5,
        title: "Messages",
        icon: <FaEnvelope />,
    },
];