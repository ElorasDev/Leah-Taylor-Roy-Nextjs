// types
import SupportManagement from '../SupportManagement/SupportManagement';
import VolunteerManagement from '../VolunteerManagement/VolunteerManagement';
import VoteManagement from '../VoteManagement/VoteManagement';
import { SubNavigationContentType } from './types';

// icons
import {
    FaUserFriends,
    FaVoteYea,
    FaLifeRing,
} from 'react-icons/fa';

export const subNavigationContent: SubNavigationContentType[] = [
    {
        id: 6,
        title: "Volunteers",
        icon: <FaUserFriends />,
        component: <VolunteerManagement />
    },
    {
        id: 7,
        title: "Votes",
        icon: <FaVoteYea />,
        component: <VoteManagement />,
    },
    {
        id: 8,
        title: "Support",
        icon: <FaLifeRing />,
        component: <SupportManagement />,
    },
];
