const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "workout";`)
    .then(results => {
        res.send(results.rows);
    })
    .catch(error => {
        console.log('Error making GET query to database: ', error);
        res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;