const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile.js')[environment]
const connection = require('knex')(config)


function getPlayers(db = connection) {
    console.log("reaching db")
    return db('players').select()


}
module.exports = {
    getPlayers,
}

