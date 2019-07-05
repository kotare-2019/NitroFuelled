import request from 'superagent'


export function getPlayers(){
    return request.get('/api/v1/')
    .then(res =>{
        const players = res.body
        return players
    })
    .catch(()=>{
        throw Error("")
    })
}

export function addPlayers(players) {
    const player = {
        name: players,
        score: 0
    }
    return request.post('/api/v1/')
    .send(player)
    .then(res => {
        const returnedPlayers = res.body
        return returnedPlayers
    })
}

export function updateScore(playerName){
    return request.put('/api/v1')
    .send(playerName)
    .then(res =>{
        const returnedPlayer = res.body
        return returnedPlayer
    })
}
