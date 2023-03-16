import React from "react";
import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import '../../App.css';
import {Link} from 'react-router-dom';
import { Box } from "@mui/system";



const Item = (props) => (
  <Grid item xs={props.xs}>
    {props.children}
  </Grid>
)
function Home (props) {
  return (
    
    <Grid container spacing={2}> 
    <Box>   
  <Grid item xs ={8}>
    <Item>
      <Typography variant="h1" component="div" gutterBottom />
      <Link to ="/GameMode">
  <Button variant="contained">Quick Play</Button>
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
  Trivia Genius is a type of game in which players (who can play individually or in a team) are asked questions about different topics and they have to get as many correct answers as possible.
  Trivia contests are usually organized as part of events, parties and as pub entertainment. Normally contestants are organized in teams and the team who gets the higher score wins.</p>

 <h4>Benefits of playing Trivia Genius</h4>
  <p>
Unfortunately every year we grow a bit older and we realize that our mind is not as sharp and fast as it used to be.
If we don't train our brain, it gets harder for us to remember, concentrate and learn new skills and information.
Quiz questions can help prevent this process to go so fast as it serves as a form of exercise for our brain</p>
  <h4>Happiness & Emotions</h4>
  <p>Happiness and emotions

Answering trivia questions (and especially answering them correctly) can make us very happy.
Friendly competitiveness can enhance our mood, increase our ego and make us feel good in general. 
When we win we experience a sense of satisfaction and we release hormones that make our brain feel good. 
So, if you still haven't decided to become a Trivia Genius. Jump into our Quick Play and enjoy a three minute General Knowledge multiple choice Trivia teaser</p>
<Link to ="/GameMode">
  <Button variant="contained">Quick Play</Button>
</Link>
</Box>
</Grid>

)}

export default Home
