const knex = require('../knex')

exports.showLeaderboard = async (gameMode) => {
    console.log(gameMode)
    // retrieve user id, user score, duration of game, difficulty

    // {
    //     "gameMode":"Quick Play"
    //     "username":"Bob",
    //     "score":159,
    //     "duration":6.01,
    //  }
    
    // retrieve all columns from game table

    //.join(table, first, [operator], second)
    const games = await knex('game')
        .join('user', 'game.user_id', '=', 'user.user_id')
        .select('gameMode', 'score', 'duration', 'username')
        .where('gameMode', gameMode)
    
    // console.log(games)
    return games

}
