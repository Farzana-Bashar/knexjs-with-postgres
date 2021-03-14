const knex= require('knex');
const knex_file=require('./knexfile') //database config

const db= knex(knex_file.development);

module.exports=db;