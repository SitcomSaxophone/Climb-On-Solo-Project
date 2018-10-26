const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    pool.query(`SELECT "schedule"."id",
    "schedule"."start_date",
    "schedule"."end_date",
    "schedule"."added_weight",
    "schedule"."route_rating",
    "schedule"."comments",
    "schedule"."iscomplete",
    "schedule"."workout_id",
    "schedule"."user_id",
    "workout"."name",
    "workout"."on_time",
    "workout"."off_time",
    "workout"."rest_time"
FROM "schedule"
JOIN "workout" on "workout"."id"="schedule"."workout_id"
WHERE "user_id"=$1
ORDER BY "schedule"."start_date";`, [req.user.id])
    .then(results => {res.send(results.rows)})
    .catch(error => {
        console.log('Error making GET to database: ', error);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    let workout = req.body;
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
    .then(() => {res.sendStatus(201)})
    .catch(error => {
        console.log('Error making POST to database: ', error);
        res.sendStatus(500);
    });
});

router.delete('/', (req, res) => {
    pool.query(`DELETE FROM "schedule"
                WHERE "id"=$1;`, [req.query.id])
    .then(() => { res.sendStatus(200)})
    .catch(error => {
        console.log('Error making DELETE to database: ', error);
        res.sendStatus(500);
    });
});

router.put('/', (req, res) => {
    pool.query(`UPDATE "schedule"
                SET "added_weight"=$1, 
                "route_rating"=$2, 
                "comments"=$3, 
                "iscomplete"=$4
                WHERE "id"=$5;`, 
                [
                    req.body.added_weight, 
                    req.body.route_rating, 
                    req.body.comments, 
                    req.body.isComplete, 
                    req.body.id
                ])
    .then(() => {res.sendStatus(200)})
    .catch(error => {
        console.log('Error making UPDATE to database: ', error);
        res.sendStatus(500);
    });
})


module.exports = router;