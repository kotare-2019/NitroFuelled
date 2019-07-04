const path = require('path')
const express = require('express')

const playerRoutes = require('./routes/players')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1', playerRoutes)

module.exports = server
