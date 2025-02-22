// types
import { certificateNavigationType } from "./types";

// icons
import {
  FaBirthdayCake, 
  FaRegEnvelope,   
  FaHeart,          
  FaGem           
} from "react-icons/fa";

export const certificateNavigation: certificateNavigationType[] = [
  {
    id: 0,
    title: "Birthday",
    type: "birthday",
    icon: <FaBirthdayCake />,
  },
  {
    id: 1,
    title: "Birthday Cards",
    type: "birthday-card",
    icon: <FaRegEnvelope />,
  },
  {
    id: 2,
    title: "Anniversary",
    type: "anniversary",
    icon: <FaHeart />,
  },
  {
    id: 3,
    title: "Unique",
    type: "unique",
    icon: <FaGem />,
  },
];
