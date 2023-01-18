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

async function createTask({ title, description }) {
  try {
    const result = await client.query(
      `
      INSERT INTO task(title, description)  
      VALUES($1, $2)
    `,[title, description]
    );
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  client,
  getALlTask,
  createTask, 
};
