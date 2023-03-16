
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function GameHistoryCard( props ) {
  
  const gameDate = '3/12/2023'
  const gameMode = 'QuickPlay'
  const duration = '3 minutes'
  const score = 34
  const difficulty = 'easy'
  
  return (
    <div>

      <Card sx={{ width: 375, Height: 300, marginLeft:2, marginTop:2}}>
        <Box sx={{ marginLeft:2, marginTop:2}}>
          <Typography>{gameDate}</Typography>
          <Typography sx={{ marginTop:1, marginBottom:.5}}>Game Mode: {gameMode}</Typography>
          <Typography sx={{ marginBottom:.5}}>Duration: {duration}</Typography>
          <Typography sx={{ marginBottom:.5}}>Score: {score}</Typography>
          <Typography sx={{ marginBottom:1.5}}>Difficulty: {difficulty}</Typography>
        </Box>
      </Card>
    </div>
  )
}

export default GameHistoryCard