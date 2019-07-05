const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)


function getPlayers(db = connection){
    return db('players').select()
    
}
function addPlayer(player){
    return db('players')
    .insert({
        name:player, score:0
    })
    .then(player=>{
        return player
    })
}

 module.exports = {
     getPlayers,
     addPlayer,
 }

