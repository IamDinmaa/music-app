import React from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import { GiHumanPyramid } from "react-icons/gi";
const Collection = [
  {
    id: 1,
    icon: <MdOutlineFavoriteBorder />,
    name: "Favorite Songs",
  },
  {
    id: 2,
    icon: <GiHumanPyramid />,
    name: "Artists",
  },
  {
    id: 3,
    icon: <AiOutlineStar />,
    name: "Albums",
  },
];

export default Collection;
