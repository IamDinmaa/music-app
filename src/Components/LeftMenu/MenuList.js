import { BsFillHouseFill, BsSlashCircle } from "react-icons/bs";
import { BiTrendingUp } from "react-icons/bi";

const MenuList = [
  {
    id: 1,
    icon: <BsFillHouseFill />,
    name: "Home",
  },
  {
    id: 2,
    icon: <BiTrendingUp />,
    name: "Trends",
  },
  {
    id: 3,
    icon: <BsSlashCircle />,
    name: "Feed",
  },
];

export default MenuList;
