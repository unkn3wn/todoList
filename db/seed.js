const { client } = require("./client");

const { testTask } = require("./seedData");

const {
  getAllTask,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../db/adapters/tasks");

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

//////seed all the task

const seedTask = async () => {
  console.log("start of seeding task");
  // CREATING TASK
  console.log("creating task...");
  for (const createdTask of testTask) {
    await createTask(createdTask);
  }
  console.log("done creating task..");
  //  GETTING SINGLE TASK
  console.log("getting single task...");
  const singleTask = await getSingleTask(2);
  console.log("result:", singleTask);
  // GETTING ALL TASK
  console.log("start of getting all task...");
  const allTask = await getAllTask();
  console.log("finished getting alll task: ", allTask);
  //   UPDATING A TASK
  console.log("Start of updating a task....");
  const updatedTask = await updateTask(1,{
    title:"UpdatedMonday", 
    description:"yay it works"
  });
  console.log("result: ",updatedTask);
//   DELETING A TASK
  console.log("start of deleting task");
  const deletedTask = await deleteTask(5);
  console.log("Result:", deletedTask);
};

async function rebuildDB() {
  try {
    client.connect();
    await dropTables();
    await createTables();
    await seedTask();
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    client.end();
  }
}

rebuildDB();
