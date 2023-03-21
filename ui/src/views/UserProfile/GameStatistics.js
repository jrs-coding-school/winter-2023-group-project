import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { getGameStatistics } from "../../utility/api";
import { useState, useEffect } from "react";


function GameStatistics( props ) {
  
  const [data, setData] = useState(null)
  const  { username } = props

  useEffect(() => {
    getGameStatistics(username)
      .then(data => setData(data))
      .catch((error) => console.log(error))
  }, [username])
  
  if (!data) {
    return <>Loading...</>
  }

  console.log(data)
  return (
    <div>

      <Card sx={{ width: 375, Height: 300, marginLeft:2, marginTop:3.5}}>
        <Box sx={{ marginLeft:2, marginTop:2}}>
          
          <Typography sx={{ marginTop:1, marginBottom:1}}>Games Played: {data.gamesPlayed}</Typography> 
          <Typography sx={{ marginBottom:1}}>Correct Answer Rate: {data.correctAnswerPct} %</Typography>
          <Typography sx={{ marginBottom:1}}>Favorite Difficulty: {data.favoriteDifficulty}</Typography>
          <Typography sx={{ marginBottom:1}}>Best Category: {data.bestCategory}</Typography>
          <Typography sx={{ marginBottom:1}}>Best Game Mode: {data.bestGameMode}</Typography>
        </Box>
      </Card>
    </div>
  )
}

export default GameStatistics