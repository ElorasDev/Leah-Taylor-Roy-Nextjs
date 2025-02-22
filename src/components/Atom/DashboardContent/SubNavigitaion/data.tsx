// types
import CertificateManagement from '../CertificateManagement/CertificateManagement';
import SupportManagement from '../SupportManagement/SupportManagement';
import VolunteerManagement from '../VolunteerManagement/VolunteerManagement';
import VoteManagement from '../VoteManagement/VoteManagement';
import { SubNavigationContentType } from './types';

// icons
import {
  FaHandsHelping,
  FaPollH,   
  FaHeadset,   
  FaCertificate,
} from 'react-icons/fa';

export const subNavigationContent: SubNavigationContentType[] = [
  {
    id: 6,
    title: "Volunteers",
    icon: <FaHandsHelping />,
    component: <VolunteerManagement />
  },
  {
    id: 7,
    title: "Votes",
    icon: <FaPollH />,
    component: <VoteManagement />,
  },
  {
    id: 8,
    title: "Support",
    icon: <FaHeadset />,
    component: <SupportManagement />,
  },
  {
    id: 9,
    title: "Certificates",
    icon: <FaCertificate />,
    component: <CertificateManagement />,
  },
];
