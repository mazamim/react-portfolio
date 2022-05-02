import {
  Container,
  Typography,
  Grid,
  Box,
  Stack,
  useMediaQuery,
  useTheme,
  Button
} from "@mui/material";
import WorkExperience from "../componenents/WorkExperience";
function Resume() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  function Sidebar() {
    return (
      <Grid item md={3}>
        <Box
          sx={{
            width: "100%",

            maxWidth: "100%",
            backgroundColor: "#003859",
          }}
        >
          <div>
            <Stack direction={"row"} justifyContent={"center"}>
              <Typography color={"white"} mt={2}>
                Address :-{" "}
              </Typography>
              <Typography color={"white"} mt={2} ml={1}>
                Cranbourne
              </Typography>
            </Stack>
            <Stack direction={"row"} justifyContent={"center"}>
              <Typography color={"white"} mt={2}>
                Phone :-{" "}
              </Typography>
              <Typography color={"white"} mt={2} ml={1}>
                0458 665 900
              </Typography>
            </Stack>
            <Stack direction={"row"} justifyContent={"center"}>
           
              <Typography color={"white"} mt={2} ml={1}>
                mazamim91@gmail.com
              </Typography>
            </Stack>
          </div>
          <hr />

          <div>
            <Stack direction={"row"} justifyContent={"center"}>
              <Typography variant="h6" color={"white"} mt={2}>
                Skills{" "}
              </Typography>
            </Stack>
            <Stack direction={"column"} alignItems={"center"}>
              <Typography color={"white"} mt={1}>
                ANGULAR/REACT-REDUX{" "}
              </Typography>
              <Typography color={"white"} mt={1}>
                REACT NATIVE
              </Typography>
              <Typography color={"white"} mt={1}>
                ANGULAR/REACT-REDUX{" "}
              </Typography>
              <Typography color={"white"} mt={1}>
                REACT NATIVE
              </Typography>
              <Typography color={"white"} mt={1}>
                ANGULAR/REACT-REDUX{" "}
              </Typography>
              <Typography color={"white"} mt={1}>
                REACT NATIVE
              </Typography>
              <Typography color={"white"} mt={1}>
                ANGULAR/REACT-REDUX{" "}
              </Typography>
              <Typography color={"white"} mt={1}>
                REACT NATIVE
              </Typography>
              <Typography color={"white"} mt={1}>
                ANGULAR/REACT-REDUX{" "}
              </Typography>
              <Typography color={"white"} mt={1}>
                REACT NATIVE
              </Typography>
              <Typography color={"white"} mt={1}>
                ANGULAR/REACT-REDUX{" "}
              </Typography>
              <Typography color={"white"} mt={1}>
                REACT NATIVE
              </Typography>
              <Typography color={"white"} mt={1}>
                REACT NATIVE
              </Typography>
            </Stack>
          </div>
        </Box>
      </Grid>
    );
  }

  return (
    <Container>
      <Typography variant="h3" textAlign="center" sx={{ marginTop: 5 }}>
        Resume
      </Typography>

      <Grid container spacing={2} sx={{ marginTop: 5 }}>
        <Grid item md={9} xs={12}>
          <Box
            sx={{
              width: "100%",

              maxWidth: "100%",
            }}
          >
            <Stack direction={"column"} alignItems={"left"}>
              <Typography
                variant="h4"
                color={"#003859"}
                sx={{ fontWeight: "bold" }}
              >
                Mohammed
              </Typography>
              <Typography
                variant="h4"
                color={"#003859"}
                mb={1}
                sx={{ fontWeight: "bold" }}
              >
                Mazahim
              </Typography>
            </Stack>

            <hr />
            <Typography
              variant="h5"
              color={"#003859"}
              mb={1}
              sx={{ fontWeight: "bold" }}
            >
              Professional Summary
            </Typography>
            <hr />
            <Typography>
              Bringing more than 6 years of experience leading Desktop
              Applications/website design projects, including gathering user
              requirements, producing code, creating mockups and enhancing
              designs. Focused on creating clean, robust code with exceptional
              security. Achieves compatibility targets while meeting and
              exceeding customer demands.
            </Typography>

            <Typography
              variant="h5"
              color={"#003859"}
              mt={2}
              sx={{ fontWeight: "bold" }}
            >
              Work History
            </Typography>
            <hr />

            <Typography sx={{ fontWeight: "bold", color: "#003859" }}>
              Full Stack Developer 04/2020 to current <br />
              Barakat Software Solution, Sri Lanka
            </Typography>
            <Typography sx={{ fontWeight: "bold" }}>Gained Skills:-</Typography>
            <Typography ml={2} sx={{ color: "#003859" }}>
              Front End
            </Typography>
            <Typography ml={3}>
              React-Redux/Next JS,React Native, Angular/Ionic,
              JavaScript/JQuery,
            </Typography>

            <Typography ml={2} sx={{ color: "#003859" }}>
              Backend
            </Typography>
            <Typography ml={3}>
              Node, PHP/Laravel, ASP.Net Core/Entity Framework <br />
              Resful API/GaphQL
            </Typography>

            <Typography ml={2} sx={{ color: "#003859" }}>
              Database
            </Typography>
            <Typography ml={3}>MongoDB,Firebase,Redis,MySQL,MSSQL</Typography>

            <Typography ml={2} sx={{ color: "#003859" }}>
              Version Control
            </Typography>
            <Typography ml={3}>GIT</Typography>

            <Typography ml={2} sx={{ color: "#003859" }}>
              Unit Test
            </Typography>
            <Typography ml={3}>JEST</Typography>

            <Typography
              sx={{ marginTop: 2, fontWeight: "bold", color: "#003859" }}
            >
              Telecommunications Supervisor, 06/2020 to Current <br />
              Catcom Australia Ptd LTD, Glen waverly, VIC
            </Typography>

            <Typography
              sx={{ marginY: 2, fontWeight: "bold", color: "#003859" }}
            >
              Telecommunications Technician, 02/2017 to 06/2020
              <br />
              QK Telco Pty LTD/ Suntel PTY LTD, Melbourne, VIC
            </Typography>

            <WorkExperience
              positionandPeriod={"Software Developer, 04/2012 to 06/2016"}
              company={"Al Ghaliya Computer Sys, Doha, Qatar"}
              skills={"VB6/VS, C#, ASP.net, Relational Database "}
              duty={[
                "Collaborated on all stages of systems development lifecycle, from requirement gathering to production releases.",
                "Administered, supported and monitored databases by proactively resolving database issues and maintaining servers.",
                "Performed regression and system-level testing to verify software quality and function prior to release.",
                "Developed software for both desktop and mobile operating systems, including Windows, MacOS and Linux, as well as Android and iOS.",
              ]}
            />

            <WorkExperience
              positionandPeriod={"Systems Technician, 11/2010 to 01/2012"}
              company={"Gulf Energy, UAE, Dubai"}
              duty={[
                " Performed regular maintenance and testing to service and optimize complex computer systems, applications and environments.",
                "Applied diagnostics and testing tools to systems, quickly identifying issues and implementing completing resolutions.",
              ]}
            />

            <WorkExperience
              positionandPeriod={"Junior Web Developer, 10/2008 to 05/2010"}
              company={"Topworld Holdings, Colombo, Sri Lanka"}
              skills={"HTML,CSS,JavaScript and PHP "}
              duty={[
                "Designed, implemented and monitored web pages, plugins and functionality for continuous improvement.",
                "Designed, developed and implemented software applications for website based on analyzed requirements and understanding of industry technical standards.",
                "Multi-tasked across multiple focuses to generate project results and meet deadlines and organizational expectations.",
                "Pulled from PHP, SQL, JavaScript and other back-end library knowledge to bolster programming resources.",
                "Built website interfaces with HTML and CSS.",
                " Applied knowledge of JavaScript and Object-Oriented Programming to create successful designs.",
              ]}
            />
          </Box>
        </Grid>
        {!isMd && !isXs ? <Sidebar /> : <></>}

        
        

        <Stack sx={{margin:'0 auto'}} direction={'row'}spacing={1}>
          <Button variant="outlined" color="secondary" >Download CV</Button>
      
          <Button variant="outlined" color="success">Send Message</Button>
    
        </Stack>
       
        
      </Grid>
  
    </Container>
  );
}

export default Resume;
