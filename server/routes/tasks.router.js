const { Router } = require('express');
const express = require('express');
const router = express.Router();
const pg = require('pg');
const pool = require('../modules/pool');


let tasksLibrary = [];

// GET
router.get('/', (req, res) => {
    let sqlQuery = `
        SELECT * FROM "tasks"
    `;
    pool.query(sqlQuery)
        .then((dbRes) => {

            // Send DB results to the client
            res.send(dbRes.rows);
        })
        .catch((err) => {
            console.log('SQL failed', err);
            res.sendStatus(500);    
        });
});

// POST


// PUT


// DELETE


module.exports = router;