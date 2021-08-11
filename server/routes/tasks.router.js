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
router.post('/', (req, res) => {
    let newTask = req.body;
    console.log('Adding a new task', newTask);

    let queryText = `INSERT INTO "tasks" ("task", "addedBy", "dateAdded", "deadline")
                        VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [
        newTask.task, newTask.addedBy, newTask.dateAdded, newTask.deadline
    ])
        .then(result => {
            res.sendStatus(201);
        }).catch(error => {
            console.log('Error adding new task', error);
            res.sendStatus(500);
            
        });
    
});

// PUT


// DELETE


module.exports = router;