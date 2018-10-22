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
    let workout = req.body;
    pool.query(`INSERT INTO "schedule"("start_date", "end_date", "added_weight", "route_rating", "comments", "workout_id", "user_id")
                VALUES($1, $2, $3, $4, $5, $6, $7);`,
        [
            workout.start_date,
            workout.end_date,
            workout.added_weight,
            workout.route_rating,
            workout.comments,
            workout.workout_id,
            workout.user_id
        ])
    .then(() => {
        res.sendStatus(201);
    })
    .catch(error => {
        console.log('Error making POST to database: ', error);
        res.sendStatus(500);
    });
});

module.exports = router;