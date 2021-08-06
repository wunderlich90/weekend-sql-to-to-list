const { builtinModules } = require('module');
const pg = require('pg');

const config = {
    database: weekend_to_do_app,
    host: 'localhost',
    port: 5432,
};

const pool = new pg.Pool(config);

pool.on('connect', () => {
    console.log('connected to postgres');
    
});

pool.on('error', (err) => {
    console.log('error connecting to postgres', err);
    
});

modules.exports = pool;