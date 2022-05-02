import { Container, Typography, Grid, Box, Stack } from "@mui/material";
import WorkExperience from '../componenents/WorkExperience'
function resume() {
  return (
    <Container>
      <Typography variant="h3" textAlign="center" sx={{ marginTop: 5 }}>
        Resume
      </Typography>

      <Grid container spacing={2} sx={{ marginTop: 5 }}>
        <Grid item sm={9} xs={12}>
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

            <Typography sx={{ fontWeight: "bold",color:"#003859" }}>
              Full Stack Developer 04/2020 to current <br />
              Barakat Software Solution, Sri Lanka
            </Typography>
            <Typography sx={{ fontWeight: "bold" }}>
              Gained Skills:- 
            </Typography>
            <Typography ml={2} sx={{color:'#003859'}}>
            Front End
            </Typography>
            <Typography ml={3}>
               React-Redux/Next JS,React Native, Angular/Ionic, JavaScript/JQuery, 
            </Typography>

            <Typography ml={2} sx={{color:'#003859'}}>
            Backend
            </Typography>
            <Typography ml={3}>
            Node, PHP/Laravel, ASP.Net Core/Entity Framework <br/>
            Resful API/GaphQL
            </Typography>

            <Typography ml={2} sx={{color:'#003859'}}>
            Database
            </Typography>
            <Typography ml={3}>
            MongoDB,Firebase,Redis,MySQL,MSSQL
            </Typography>

            <Typography ml={2} sx={{color:'#003859'}}>
            Version Control
            </Typography>
            <Typography ml={3}>
            GIT
            </Typography>

            <Typography ml={2} sx={{color:'#003859'}}>
            Unit Test
            </Typography>
            <Typography ml={3}>
           JEST
            </Typography>

            <Typography sx={{ marginTop:2,fontWeight: "bold",color:"#003859" }}>
                Telecommunications Supervisor, 06/2020 to Current <br />
                Catcom Australia Ptd LTD, Glen waverly, VIC
            </Typography>

            <Typography sx={{ marginY:2,fontWeight: "bold",color:"#003859" }}>
            Telecommunications Technician, 02/2017 to 06/2020<br />
                QK Telco Pty LTD/ Suntel PTY LTD, Melbourne, VIC
            </Typography>

           < WorkExperience/>
          </Box>
        </Grid>
        <Grid item sm={3} xs={12}>
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
                <Typography color={"white"} mt={2}>
                  Email :-{" "}
                </Typography>
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
      </Grid>
    </Container>
  );
}

export default resume;
