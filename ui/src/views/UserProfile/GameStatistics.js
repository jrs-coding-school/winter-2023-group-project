import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function GameStatistics( props ) {
  
  
  return (
    <div>

      <Card sx={{ width: 375, Height: 300, marginLeft:2, marginTop:3.5}}>
        <Box sx={{ marginLeft:2, marginTop:2}}>
          
          <Typography sx={{ marginTop:1, marginBottom:1}}>Games Played: {gamesPlayed}</Typography> 
          <Typography sx={{ marginBottom:1}}>Correct Answer Rate: {correctAnswerPct}</Typography>
          <Typography sx={{ marginBottom:1}}>Favorite Difficulty: {favDifficulty}</Typography>
          <Typography sx={{ marginBottom:1}}>Best Category: {bestCategory}</Typography>
          <Typography sx={{ marginBottom:1}}>Best Game Mode: {bestGameMode}</Typography>
        </Box>
      </Card>
    </div>
  )
}

export default GameStatistics