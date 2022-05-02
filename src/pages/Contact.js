import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Stack,
  
} from "@mui/material";
import Map from "../componenents/Map";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function Contact() {
  return (
    <Container>
     
        <Typography variant="h3" textAlign="center" sx={{ marginTop: 5 }}>
        
      </Typography>
    
      
      <Grid container spacing={2} sx={{ marginTop: 4 }} justifySelf={'center'}>
        <Grid  item md={8}> 
          <Box
            sx={{
              width: "100%",
              // height: "60vh",
              maxWidth: "100%",
              // backgroundColor: "#e8edf0",
         
            }}
          >
            <form>
              <Container>
                <Grid container spacing={1}>
                  <Grid item sm={6} xs={12}>
                    <label>Full Name</label>
                    <TextField
                      size="small"
                      fullWidth
                      label="Full Name"
                      sx={{ marginTop: 1 }}
                    />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <label>E-mail</label>
                    <TextField
                      size="small"
                      fullWidth
                      label="E-mail"
                      sx={{ marginTop: 1 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <label>Subject</label>
                    <TextField
                      size="small"
                      fullWidth
                      label="Subject"
                      sx={{ marginTop: 1 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <label>Message</label>
                    <TextField
                      size="small"
                      fullWidth
                      label="Message"
                      sx={{ marginTop: 1 }}
                      multiline
                      rows={3}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained">Send Message</Button>
                  </Grid>
                </Grid>
              </Container>
            </form>
          </Box>
        </Grid>
        <Grid item md={4} xs={12} >
          <Box
            sx={{
              width: "100%",
              height: "60vh",
              minWidth: "100%",
            }}
          >
           <Container>
             <Grid container spacing={1}>
                <Map />
              </Grid>
           </Container>
              
            
          </Box>
        </Grid>
      </Grid>
<Stack alignItems={'center'} justifyContent={'center'} direction={'row'} spacing={3} sx={{marginTop:2,backgroundColor:'#e8edf0', height:'4rem'}}>

<FacebookIcon fontSize="large" sx={{
  '&:hover': {
    color: "blue",
  cursor:"pointer"}
}}/>
      <GitHubIcon fontSize="large"
      sx={{
        '&:hover': {
          color: "blue",
        cursor:"pointer"}
      }}/>
      <LinkedInIcon fontSize="large"
       sx={{
        '&:hover': {
          color: "blue",
        cursor:"pointer"}
      }}/>

</Stack>

    </Container>
  );
}

export default Contact;
