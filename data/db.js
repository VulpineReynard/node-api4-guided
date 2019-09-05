const knex = require('knex');

const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js')[environment];

// { development }
// config.development === config["development"]

module.exports = knex(config);
