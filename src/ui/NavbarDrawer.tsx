import { ListItemText, Divider } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { pageList } from "../constants/constant";
import AnimatedButton from "./AnimatedButton";
import { useLocation, useNavigate } from "react-router-dom";

const NavbarDrawer = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full flex items-center justify-center py-8">
        <AnimatedButton path="/">EPOS SOFTWARE</AnimatedButton>
      </div>
      <Divider />
      <List>
        {pageList.slice(1).map((text, index) => (
          <ListItem
            className={`${pathname === text.path ? "text-blue-500" : ""}`}
            key={index}
            disablePadding
          >
            <ListItemButton onClick={() => navigate(text.path)}>
              <ListItemText className={``} primary={text.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default NavbarDrawer;
