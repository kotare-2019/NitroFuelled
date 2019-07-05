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
    console.log("Api called", players)
    return request.post('/api/v1/')
    .send(players)
    .then(res => {
        const returnedPlayers = res.body
        return returnedPlayers
    })
}
