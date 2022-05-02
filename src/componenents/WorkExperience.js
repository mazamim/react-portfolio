import { List ,ListItem ,ListItemText , Typography, ListItemIcon,createTheme, ThemeProvider, } from "@mui/material";
import AdjustIcon from '@mui/icons-material/Adjust';

function WorkExperience({positionandPeriod,company,skills,duty}) {

  const theme = createTheme({
    components: {
      MuiListItemText: {
        variants: [
          {
            props: {
              variant: "body2",
            },
            style: {
              padding: 0,
              margin:-10
            },
          },
         
        ],
      },
    },
  });

  return (
 <>  <hr/>
 <ThemeProvider theme={theme}>


 
    <Typography sx={{ fontWeight: "bold",color:"#003859" }}>
    {positionandPeriod} <br />
    {company}
  </Typography>
  <Typography>
              {skills && 'Gained Skills:-'} {skills}
            </Typography>
            {duty.map((singleduty)=>{
                return(
<List>
  <ListItem variant="body2">
    <ListItemText variant="body2" ><ListItemIcon><AdjustIcon/>{singleduty}</ListItemIcon></ListItemText>
  </ListItem>
</List>
                )
            })}
  </ThemeProvider>
  </>
  )
}

export default WorkExperience