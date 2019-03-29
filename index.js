const mattspress = require('mattspress');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);

const app = mattspress();

app.use(helmet());

