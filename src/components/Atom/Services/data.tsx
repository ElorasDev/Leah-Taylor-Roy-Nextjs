// components
import Certificates from "./Certificates/Certificates";
import DownloadAndLinks from "./DownloadAndLinks/DownloadAndLinks";
import GovermentServices from "./GovermentServices/GovermentServices";
import Volunteer from "./Volunteer/Volunteer";

// types
import { DataType } from "./type";



export const data:DataType[] = [
    {
        id: 0,
        title: "Goverment Services",
        component: <GovermentServices />
    },
    {
        id: 1,
        title: "Download & Links",
        component: <DownloadAndLinks />
    },
    {
        id: 3,
        title: "Volunteer",
        component: <Volunteer />
    },
    {
        id: 4,
        title: "Certificate",
        component: <Certificates />
    },
]