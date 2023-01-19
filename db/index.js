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

async function getSingleTask(taskId) {
  try{
    const{
      rows: [task],
    } = await client.query(
      `SELECT * FROM tasks 
        WHERE tasks.id = ${taskId}`
    )
    if(!task){
      return null;
    }

    return task;
  }catch(error){
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

async function updateTask(taskId, fields = {}) {
  const setString = Object.keys(fields)
    .map((key, index) => `"${key}"=$${index + 1}`)
    .join(",");
  if (setString.length === 0) {
    return;
  }
  try {
    const result = await client.query(
      `UPDATE tasks
          SET ${setString}
          WHERE tasks.id = ${taskId}
          RETURNING *
        `,
      Object.values(fields)
    );
    return getSingleTask(taskId);
  } catch (error) {
    throw error;
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
    return result;
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
