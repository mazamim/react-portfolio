import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link} from "react-router-dom";

const linkStyle = {
  margin: "0.5rem",
  textDecoration: "none",
  color: 'blue'
};

function DrawerCom({ pages }) {
  const [openDrawer, setOpenDrawer] = useState(false);


  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        {pages.map((page, index) => {
          return (
            <List key={index}>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemText><Link  onClick={() => setOpenDrawer(!openDrawer)} style={linkStyle} to={`/${page.replace(/\s/g, '')}`}>{page}</Link></ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </List>

           
          );
        })}
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default DrawerCom;
