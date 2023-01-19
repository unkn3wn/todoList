const { Client } = require("pg");

const client = new Client("postgres://unknown:1207@localhost:5432/task-dev");

async function getAllTask() {
  try {
    const { rows } = await client.query(
      `SELECT * FROM tasks
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
      SELECT * FROM tasks WHERE id=$1
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
      INSERT INTO tasks(title, description)  
      VALUES($1, $2)
    `,
      [title, description]
    );
    return result;
  } catch (error) {
    throw error;
  }
}

async function updateTask({title, description}) {
  try {

    const result = await client.query(
      `UPDATE tasks SET title = $1, description = $2 RETURNING *`,
      [title, description]
    );

    if (result.rows.length === 0)
      return res.status(404).json({ message: "Task not found" });

    return result;
  } catch (error) {
    throw(error);
  }
}

async function deleteTask({ id }) {
  try {
    const result = await client.query(
      `
      DELETE FROM tasks WHERE id=$1
    `,
      [id]
    );
    return result ;
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
  deleteTask,
};
