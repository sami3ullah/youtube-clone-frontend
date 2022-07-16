import { Item, Hr } from "./styled/MenuIcons.styledcomponent";
import { returnIcon } from "../../utils/returnIcon";

import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import WbTwilightOutlinedIcon from "@mui/icons-material/WbTwilightOutlined";

const BestIcons = [
  {
    name: "Music",
    icon: <LibraryMusicOutlinedIcon />,
    id: "1",
  },
  {
    name: "Sports",
    icon: <SportsBasketballOutlinedIcon />,
    id: "2",
  },
  {
    name: "Gaming",
    icon: <SportsEsportsOutlinedIcon />,
    id: "3",
  },
  {
    name: "Movies",
    icon: <MovieCreationOutlinedIcon />,
    id: "4",
  },
  {
    name: "News",
    icon: <ArticleOutlinedIcon />,
    id: "5",
  },
  {
    name: "Live",
    icon: <LiveTvOutlinedIcon />,
    id: "6",
  },
  {
    name: "hr",
    icon: <Hr />,
    id: "30",
  },
  {
    name: "Settings",
    icon: <SettingsOutlinedIcon />,
    id: "7",
  },
  {
    name: "Report",
    icon: <FlagOutlinedIcon />,
    id: "8",
  },
  {
    name: "Help",
    icon: <HelpOutlineOutlinedIcon />,
    id: "9",
  },
  {
    name: "Light Mode",
    icon: <WbTwilightOutlinedIcon />,
    id: "10",
  },
];

const items = returnIcon(BestIcons);

function BesOfIcons() {
  return <>{items}</>;
}

export default BesOfIcons;
