import { Container, Typography, Grid } from "@mui/material";
import ProjectCard from "../componenents/ProjectCard";

function Portfolio() {
  return (
    <Container>
      <Typography variant="h3" textAlign="center" sx={{ marginTop: 5 }}>
        Portfolio
      </Typography>

      <Grid container spacing={2} sx={{ marginTop: 5 }}>
        <ProjectCard
          projectName={"Tech-Blog"}
          projectDetails={
            "This app is CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This app has followed the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication."
          }
          image={
            "https://media.istockphoto.com/photos/hands-that-make-productivity-happen-picture-id875247434?b=1&k=20&m=875247434&s=170667a&w=0&h=JWqa0DMIuKRCjk9xzQcgFviiJRwKw7lvvaxOjUKOgcQ="
          }
          sitelink={"https://monash-tech-blog.herokuapp.com/"}
          sourcelink={"https://github.com/mazamim/Tech-Blog.git"}
        />

        <ProjectCard
          projectName={"Go To Your Movie"}
          projectDetails={
            "Go To Your Movie is a website that gives the user a list of local cinemas (either through geolocation or by location search) and lists the movies currently playing at these cinemas."
          }
          image={
            "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80"
          }
          sitelink={"https://mazamim.github.io/go-to-movie/"}
          sourcelink={"https://github.com/mazamim/go-to-movie.git"}
        />

        <ProjectCard
          projectName={"Weather-dashboard"}
          projectDetails={
            "Project Notes:- GIVEN a weather dashboard with form inputs WHEN I search for a city THEN I am presented with current and future conditions for that city and that city is added to the search history WHEN I view current weather conditions for that city THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index WHEN I view the UV index THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe WHEN I view future weather conditions for that city THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity WHEN I click on a city in the search history THEN I am again presented with current and future conditions for that city"
          }
          image={
            "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          sitelink={"https://mazamim.github.io/weather-dashboard/"}
          sourcelink={"https://github.com/mazamim/weather-dashboard.git"}
        />

        <ProjectCard
          projectName={"Note-Taker"}
          projectDetails={
            "This application can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.GIVEN a note-taking application WHEN I open the Note Taker THEN I am presented with a landing page with a link to a notes page"
          }
          image={
            "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bm90ZSUyMHRha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          }
          sitelink={"https://my-note-taker-monash.herokuapp.com/"}
          sourcelink={"https://github.com/mazamim/Note-Taker.git"}
        />

        <ProjectCard
          projectName={"Go To Your Movie"}
          projectDetails={
            "Go To Your Movie is a website that gives the user a list of local cinemas (either through geolocation or by location search) and lists the movies currently playing at these cinemas."
          }
          image={
            "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80"
          }
          sitelink={"https://monash-tech-blog.herokuapp.com/"}
          sourcelink={"https://github.com/mazamim/Tech-Blog.git"}
        />

<ProjectCard
          projectName={"Go To Your Movie"}
          projectDetails={
            "Go To Your Movie is a website that gives the user a list of local cinemas (either through geolocation or by location search) and lists the movies currently playing at these cinemas."
          }
          image={
            "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80"
          }
          sitelink={"https://mazamim.github.io/go-to-movie/"}
          sourcelink={"https://github.com/mazamim/go-to-movie.git"}
        />
      </Grid>
    </Container>
  );
}

export default Portfolio;
