const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "schedule"
                RIGHT JOIN "workout" on "workout"."id"="schedule"."workout_id"
                LEFT JOIN "user" on "user"."id"="schedule"."user_id"    
                WHERE "user_id"=$1;`, [req.user.id])
    .then(results => {
        res.send(results.rows);
    })
    .catch(error => {
        console.log('Error making GET to database: ', error);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    let workout = req.body;
    console.log(workout);
    pool.query(`INSERT INTO "schedule"("start_date", "end_date", "added_weight", "route_rating", "comments", "workout_id", "user_id")
                VALUES($1, $2, $3, $4, $5, $6, $7);`,
        [
            workout.start_time,
            workout.end_time,
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