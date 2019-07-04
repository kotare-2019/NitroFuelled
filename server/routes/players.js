const express = require('express')

const db = require('../database/db')

const router = express.Router()

router.get('/', (req,res)=>{
    console.log("reaching route")
    db.getPlayers()
    .then(players =>{
        res.send(players)
    })
    .catch(err => {
        res.status(500).send(err.message)
      })
})

module.exports = router

