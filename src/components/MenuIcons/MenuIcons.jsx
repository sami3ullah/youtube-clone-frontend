import React from "react";
import BestOfIcons from "./BestOfIcons";
import { returnIcon } from "../../utils/returnIcon";
import SignUp from "../SignUp/SignUp";
import { Hr } from "./styled/MenuIcons.styledcomponent";

import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";

const menuItems = [
  { name: "Home", icon: <HomeIcon />, id: "11" },
  {
    name: "Explore",
    icon: <ExploreIcon />,
    id: "12",
  },
  {
    name: "Subscriptions",
    icon: <SubscriptionsIcon />,
    id: "13",
  },
  {
    name: "hr",
    icon: <Hr />,
    id: "29",
  },
  {
    name: "Library",
    icon: <VideoLibraryIcon />,
    id: "14",
  },
  {
    name: "History",
    icon: <HistoryIcon />,
    id: "15",
  },
  {
    name: "hr",
    icon: <Hr />,
    id: "31",
  },
];

// making the Item component out of array, with name and Icons
const items = returnIcon(menuItems);

// styles
// const Item = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 20px;
//   cursor: pointer;
//   padding: 7.5px 0px;
// `;

function MenuIcons() {
  return (
    <>
      {items}
      <SignUp />
      <Hr />
      <BestOfIcons />
    </>
  );
}

export default MenuIcons;
