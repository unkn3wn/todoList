const { Client } = require("pg");

const client = new Client("postgres://unknown:1207@localhost:5432/task-dev");

async function getALlTask() {
  const { rows } = await client.query(
    `SELECT id, title
      FROM task
    `
  );
  return rows;
}

module.exports = {
  client,
  getALlTask,
};
