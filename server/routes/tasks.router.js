const { Router } = require('express');
const express = require('express');
const router = express.Router();
const pg = require('pg');
const pool = require('../modules/pool');


let tasksLibrary = [
    {
        task: 'Wash the Ecto-mobile',
        addedBy: 'Ray',
        dateAdded: 2021-08-06,
        deadline: 2021-08-08
    },

    {
        task: 'Clean and colect all traps',
        addedBy: 'Winston',
        dateAdded: 2021-08-05,
        deadline: 2021-08-08
    },
    {
        task: 'Wash slimed uniforms',
        addedBy: 'Peter',
        dateAdded: 2021-08-04,
        deadline: 2021-08-08
    },
    {
        task: 'Proton pack repair',
        addedBy: 'Egon',
        dateAdded: 2021-08-06,
        deadline: 2021-08-08
    }
];

// GET
router.get('/', (req, res) => {
    let sqlQuery = 
})

// POST


// PUT


// DELETE


module.exports = router;