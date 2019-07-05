const express = require('express')
const bodyParser = require("body-parser")

const db = require('../database/db')

const router = express.Router()

router.use(bodyParser.urlencoded({
    extended: false
}));
router.use(bodyParser.json());


router.get('/', (req, res) => {
    db.getPlayers()
        .then(players => {
            res.send(players)
        })
        .catch(err => {
            res.status(500).send(err.message)
        })
})

router.post('/', (req, res) => {
    db.addPlayer(req.body)
        .then(players => {
            res.send(players)
        })
        .catch(err => {
            res.status(500).send(err.message)
        })
})
router.put('/', (req, res)=>{
    db.updateScore(req.body)
    .then(player =>{
        res.send(player)
    })
    .catch(err => {
        res.status(500).send(err.message)
    })
})
module.exports = router