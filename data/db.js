const knex = require('knex');

const secrets = require('../config/secrets.js');

const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js')[environment];

// { development }
// config.development === config["development"]

module.exports = knex(config);
