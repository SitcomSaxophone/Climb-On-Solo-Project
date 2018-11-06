const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    // select the list of different workouts from the workout table
    pool.query(`SELECT * FROM "workout";`)
        .then(results => {
            res.send(results.rows);
        })
        .catch(error => {
            console.log('Error making GET query to database: ', error);
            res.sendStatus(500);
        });
});

module.exports = router;