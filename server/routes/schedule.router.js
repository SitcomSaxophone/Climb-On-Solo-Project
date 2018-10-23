const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "schedule"
                WHERE "user_id"=$1;`, [req.user.id])
    .then(results => {
        res.send(results.rows);
    })
    .catch(error => {
        console.log('Error making GET to database: ', error);
        res.sendStatus(500);
    });
})

module.exports = router;