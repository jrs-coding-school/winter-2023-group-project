import GameHistoryCard from './GameHistoryCard';

function GameHistoryContainer( props ) {
  
  const {username} = props
  //query db for games by username and map through the result object and populate game history card
  return (
    <div>
      <GameHistoryCard></GameHistoryCard>
      <GameHistoryCard></GameHistoryCard>
      <GameHistoryCard></GameHistoryCard>
    </div>
  )
}
export default GameHistoryContainer