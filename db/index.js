const { Client } = require("pg");

const client = new Client("postgres://unknown:1207@localhost:5432/task-dev");

async function getAllTask() {
  try {
    const { rows } = await client.query(
      `SELECT * FROM task
    `
    );
    return rows;
  } catch (error) {
    console.error("no task");
    throw error;
  }
}

async function getSingleTask() {
  try {
    const { id } = await client.query(
      `
      SELECT * FROM task WHERE id=$1
    `,
      [id]
    );
  } catch (error) {
    console.error("task does not exist");
    throw error;
  }
}

async function createTask({ title, description }) {
  try {
    const result = await client.query(
      `
      INSERT INTO task(title, description)  
      VALUES($1, $2)
    `,
      [title, description]
    );
    return result;
  } catch (error) {
    throw error;
  }
}

async function updateTask({ title, description }) {
  try {
    const { id } = req.params;
    const result = await client.query(
      `
      UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *
    `,
      [title, description, id]
    );
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function deleteTask({ id }) {
  try {
    const result = await client.query(
      `
      DELETE FROM task WHERE id=$1
    `,
      [id]
    );
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = {
  client,
  getAllTask,
  getSingleTask,
  createTask,
  updateTask,
};
