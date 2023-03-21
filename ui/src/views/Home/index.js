import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import "../../App.css";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const Item = (props) => (//this is the component that is used to create a grid item
  <Grid item xs={props.xs}>
    {props.children}
  </Grid>
);
function Home(props) {
  return (
    <Grid container spacing={2}>
      <Box>
        <Grid item xs={8}>
          <Item>
            <Typography variant="h1" component="div" gutterBottom />
            <Link to="/GameModes">
              <Button variant="contained">Lets Play</Button>
            </Link>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Typography variant="h1" component="div" gutterBottom />
          </Item>
        </Grid>

        <h2> What Is Trivia Genius And Why You Should Play</h2>
        <p>
          Trivia Genius is a game in which players are asked multiple choice
          questions about different topics and they have to get as many correct
          answers as possible before the timer ends.
        </p>

        <h4>Benefits of playing Trivia Genius</h4>
        <p>
          Unfortunately every year we grow a bit older and we realize that our
          mind is not as sharp and fast as it used to be. If we don't train our
          brain, it gets harder for us to remember, concentrate and learn new
          skills and information. Quiz questions can help prevent this process
          to go so fast as it serves as a form of exercise for our brain
        </p>
        <h4>Trivia Genius "The Game"</h4>
        <p>
          Trivia Genius offers 10 different categories such as Art, Sports,
          Society & Culture, History, Science, Geography, Film/TV, Music, Food &
          Drink and General Knowledge. We offer three different Game Modes.
          Quick Play which is a three minute game of a topic of your choice. 3
          Strikes which sets the timer and you must answer as many questions as
          possible before you answer three incorrectlt. Finally, Fast 25. This
          is where you are timed to answer how long it takes you to answer 25
          questions correctly. Ech game mode offers three difficulty settings.
          Easy, Medium and Hard. So, if you still haven't decided to become a
          Trivia Genius. Jump into our Quick Play and enjoy a three minute
          General Knowledge multiple choice Trivia teaser
        </p>
        <p> Here is a sample question from our Music Category:</p>
        <p> "Which English rock band released the song 'Us and Them'?"</p>
        <p>
          {" "}
          A) Pink Floyd, B) Wings, C) Rudimental, D) The Alan Parsons Project{" "}
        </p>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="../../assets/trivia_image.jpg"
            title="Game Screenshot"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Trivia Genius
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Example of the Trivia Genius Quick Play Game
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Link to="/GameModes">
          <Button variant="contained">Quick Play</Button>
        </Link>
      </Box>
    </Grid>
  );
}

export default Home;
