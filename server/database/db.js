const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile.js')[environment]
const connection = require('knex')(config)


function getPlayers(db = connection){
    return db('players').select()
    
}
function addPlayer(player, db = connection){
    return db('players')
    .insert({
        name: player.name, score: player.score
    })
    .then(player=>{
        return player
    })
}

function updateScore(player, db = connection){
    return db('players')
    .where('name', player.name)
    .first()
    .then(dbPlayer =>{
        return db('players')
        .where('id', dbPlayer.id)
        .update({score: dbPlayer.score + 2})
    })
}
 module.exports = {
     getPlayers,
     addPlayer,
     updateScore,
 }

