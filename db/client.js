const {Client} = require("pg");

const client = new Client("postgres://unknown:1207@localhost:5432/task-dev");

module.exports={
    client,
}