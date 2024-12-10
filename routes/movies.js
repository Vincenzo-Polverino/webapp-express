const express = require('express')
const router = express.Router()
const connection = require('../database/connection')

router.get('/', (req, res) => {

    const sql = `SELECT * FROM movies`

    connection.query(sql, (err, results) => {
        res.json({
            movies: results
        })
    })

})

module.exports = router