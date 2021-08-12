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

    let sqlQuery = `
        INSERT INTO "tasks" 
            ("task", "addedBy", "dateAdded", "deadline")
        VALUES 
            ($1, $2, $3, $4, $5);
    `;
    let sqlParams = [
        req.body.task,
        req.body.addedBy,
        req.body.dateAdded,
        req.body.deadline
    ];
    console.log('sqlQuery', sqlQuery);

    // Send query to DB
    pool.query(sqlQuery, sqlParams)
        .then((dbRes) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('POST error', err);
            res.sendStatus(500);
            
        });
    
});

// PUT
router.put('/:id', (req, res) => {
    console.log('id is', req.params.id);
    const sqlQuery = `
        UPDATE "task"
        WHERE "id" = $1;
    `;
    const sqlParams = [
        req.params.id
    ];
    pool.query(sqlQuery, sqlParams)
    .then((dbRes) => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log('UPDATE error', err);
        res.sendStatus(500);
        
    });
       
});


// DELETE
router.delete('/:id', (req, res) => {
    const idToDelete = req.params.id;
    let sqlQuery = `
    DELETE FROM "tasks"
    WHERE id=$1;
    `;
    const sqlParams = [idToDelete];
    pool.query(sqlQuery, sqlParams)
        .then((debRes) => {
            res.sendStatus(200);
    })
    .catch((err) => {
        console.log('DELETE err', err);
        res.sendStatus(500);
        
    });
});

module.exports = router;