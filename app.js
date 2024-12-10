const express = require('express')
const server = express()
const MoviesRouter = require('./routes/movies')


const HOST = process.env.HOST
const PORT = process.env.PORT

server.use('/api/movies', MoviesRouter)

server.listen(PORT, () => {

    console.log(`Server listening on port ${HOST}:${PORT}`);

})

server.get('/', (req, res) => {
    res.send(`Server in up and running`)

})

