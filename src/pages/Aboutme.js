import { Box, Container, Typography, Avatar, Grid } from "@mui/material";
import Stack from "@mui/material/Stack";

import "../App.css";
import profilePic from "../assets/profile.jpeg";
import SkillBar from "../componenents/SkillBar";

function Aboutme() {
  return (
    <Container>
      <div className="about-header">
        <Typography variant="h3" textAlign="center" sx={{ marginTop: 5 }}>
          About
        </Typography>
        <Stack
          justifyContent="center"
          alignItems="center"
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 2, sm: 5, md: 10 }}
        >
          <div>
            <Avatar
              alt="Remy Sharp"
              src={profilePic}
              sx={{
                width: 250,
                height: 250,
                border: "2px solid #ef664d",
                borderRadius: 103,
                verticalAlign: "middle",
              }}
            />
          </div>
          <div>
            <Typography>
              I'm a web developer who's passionate about finding quick solutions
              to problems. I work well in team settings, and have a history of
              being able to troubleshoot programming challenges easily in
              collaborative work. Using programs like HTML, CSS, Javascript and
              Node, I have build projects that app services and desktop sites
              still use today, after more than six years. I meet continuous high
              standards for web design and development, and hope to continue
              doing so in a full stack developer position.
            </Typography>
           
          </div>
        </Stack>
      </div>

      <Box mt={10}>
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12}>
            <SkillBar name={"HTML/CSS"} skill={"95%"} color={"green"} />
          </Grid>
          <Grid item sm={6} xs={12}>
            <SkillBar name={"JAVASCRIPT/JQUERY"} skill={"85%"} color={"red"} />
          </Grid>
          <Grid item sm={6} xs={12}>
            <SkillBar name={"ANGULAR/IONIC"} skill={"70%"} color={"green"} />
          </Grid>
          <Grid item sm={6} xs={12}>
            <SkillBar
              name={"REACT-REDUX/REACT-NATIVE"}
              skill={"85%"}
              color={"red"}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <SkillBar name={"PHP/LARAVEL"} skill={"60%"} color={"green"} />
          </Grid>
          <Grid item sm={6} xs={12}>
            <SkillBar
              name={"ASP.NET CORE/ENTITY FRAMEWORK"}
              skill={"75%"}
              color={"red"}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <SkillBar
              name={"MONGODB,FIREBASE,REDIS,MYSQL,MSSQL"}
              skill={"75%"}
              color={"green"}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Aboutme;
