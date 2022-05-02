import {
    Button,
 
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Grid,
  } from "@mui/material";



function ProjectCard({projectName,projectDetails,image,sitelink,sourcelink}) {

  return (
    <Grid item md={4}>
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {projectName}
        </Typography>
        {projectDetails.length < 182 ?(
            <Typography variant="body2" color="text.secondary">
            {projectDetails}
            </Typography> )
            :
            <Typography variant="body2" color="text.secondary">{`${projectDetails.substr(0, 180)}...`}</Typography>
         }
        
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>window.location.href=`${sitelink}`}>Visit Site</Button>
        <Button size="small" onClick={()=>window.location.href=`${sourcelink}`}>Source</Button>
      </CardActions>
    </Card>
  </Grid>
  )
}

export default ProjectCard