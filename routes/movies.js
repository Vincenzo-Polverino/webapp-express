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


    router.get('/:id', (req, res) => {

        const id = req.params.id
        const sql = `SELECT * FROM movies WHERE id = ?`


        connection.query(sql, [id], (err, results) => {
            if (err) return res.status(500).json({ err: err })
            if (results.length == 0) return res.status(404).json({ err: 'film non trovato' })

            res.json(results[0])
        })

    })

})

module.exports = router