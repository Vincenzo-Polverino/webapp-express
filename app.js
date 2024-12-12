const express = require('express')
const server = express()
const MoviesRouter = require('./routes/movies')
const cors = require('cors')

server.use(express.json())
server.use(cors())
server.use('/api/movies', MoviesRouter)

const HOST = process.env.HOST
const PORT = process.env.PORT


server.listen(PORT, () => {

    console.log(`Server listening on port ${HOST}:${PORT}`);

})

server.get('/', (req, res) => {
    res.send(`Server in up and running`)

})

