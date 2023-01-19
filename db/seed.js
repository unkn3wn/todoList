const {
  client,
  getAllTask,
  createTask,
  updateTask,
  deleteTask,
} = require("./index");

async function dropTables() {
  try {
    console.log("start of dropping tables...");
    await client.query(`
        DROP TABLE IF EXISTS tasks
        `);
    console.log("done dropping tables");
  } catch (error) {
    console.error("error in dropping tables");
    throw error;
  }
}

async function createTables() {
  try {
    console.log("start of building tables");
    await client.query(`
    CREATE TABLE tasks(
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) UNIQUE,
        description VARCHAR(255)
      );
    
    `);
    console.log("finished building tables!..");
  } catch (error) {
    console.error("error building tables!");
    throw error;
  }
}
// create task funcion
async function createInitialTask() {
  try {
    console.log("Start of making Task....");
    const homework = await createTask({
      title: "homework",
      description: "lots of it",
    });
    const secondHomework = await createTask({
      title: "moreHomework",
      description: "more and more",
    });
    const thirdHomework = await createTask({
      title: "moremoreHome",
      description: "more and more and more",
    });

    console.log(homework, secondHomework, thirdHomework);
    console.log("finished creating task");
  } catch (error) {
    console.error("error creating task");
    throw error;
  }
}
async function rebuildDB() {
  try {
    client.connect();
    await dropTables();
    await createTables();
    await createInitialTask();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function testDB() {
  try {
    console.log("start of testing db");
    const task = await getAllTask();
    console.log("task: ", task);

    console.log("updating tasks on task [0]");
    const updateTaskResult = await updateTask([1], {
      title: "fernando",
      description: "reyes",
    });
    console.log("result", updateTaskResult);

    console.log("start of deleting a task");
    const destroyTask = await deleteTask([1]);
    console.log("result:", destroyTask);

    console.log("finished db test!");
  } catch (error) {
    console.error("Error testing database!");
    throw error;
  }
}

rebuildDB()
  .then(testDB)
  .catch(console.error)
  .finally(() => client.end());
