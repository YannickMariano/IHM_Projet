const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Ecole',
    password: '#01YannicK#',
    port: 5432,
});

module.exports = pool;