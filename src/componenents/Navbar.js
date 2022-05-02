import { NavLink } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  useMediaQuery,
  useTheme,
  Tab,
  Tabs,

} from "@mui/material";
import {green } from '@mui/material/colors';
import DrawerCom from "./DrawerCom";
import { useState } from "react";

import profilePic from "../assets/profile.jpeg";



const linkStyle = {
  margin: "0.5rem",
  textDecoration: "none",
  color: 'white'
};


function Navbar() {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const pages = ["About me", "Portfolio", "Contact", "Resume"];

  return (
    <AppBar position="static" 
    sx={{backgroundColor: 'secondary.dark', 
    // '&:hover': {
    //   backgroundColor: 'secondary.main',
    //   opacity: [0.9, 0.8, 0.7],
    // },
  
  }}
    >
      <Toolbar>

{
 isXs?(
  <>
 
 <Avatar sx={{ bgcolor: green[500] }}>MM</Avatar>
    <DrawerCom pages={pages} />
  </>
): isMd ? (
  <>
  <Avatar alt="Travis Howard" src={profilePic} />
    <Typography sx={{ marginLeft: 1 }}>M Mazahim</Typography>
    <DrawerCom pages={pages} />
  </>
) : (
  <>
    <Avatar alt="Travis Howard" src={profilePic} />
    <Typography sx={{ marginLeft: 1 }}>Mohammed Mazahim</Typography>

    <Tabs
      value={value}
      sx={{ marginLeft: "auto" }}
      indicatorColor="secondary"
     
      onChange={(e, value) => {
        setValue(value);
      }}
    >
{pages.map((page)=>{
return(
<NavLink style={linkStyle} to={`/${page.replace(/\s/g, '')}`}><Tab label={page} /></NavLink>
)
})}

     
  
    </Tabs>
  </>
)
}



      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
