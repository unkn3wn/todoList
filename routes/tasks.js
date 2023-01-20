const express = require("express");
const { Tasks } = require("../db/adapters/index");
const taskRouter = express.Router();

taskRouter.get("/tasks", async (req, res, next) => {
  try {
    const allTask = await Tasks.getAllTask();
    res.send(allTask);
  } catch (error) {
    next(error);
  }
});

taskRouter.get("/tasks/:taskId", async (req, res, next) => {
  const { taskId } = req.params;
  try {
    const singleTask = await Tasks.getSingleTask(taskId);
    res.send(singleTask);
  } catch (error) {
    next(error);
  }
});

taskRouter.post("/tasks", async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const newTask = {
      title,
      description,
    };
    const theNewTask = await Tasks.createTask(newTask);
    res.send(theNewTask);
  } catch (error) {
    next(error);
  }
});

taskRouter.patch("/tasks/:taskId", async (req, res, next) => {
  const { taskId } = req.params;
  const { title, description } = req.body;
  const updateFields = {};
  if (title) {
    updateFields.title = title;
  }

  if (description) {
    updateFields.description = description;
  }

  try {
    const singleTask = await Tasks.getSingleTask(taskId);
    console.log(singleTask);
    if (singleTask) {
      const updatedTask = await Tasks.updateTask(taskId, updateFields);
      res.send({ task: updatedTask });
    }
  } catch ({ title, description }) {
    next({ title, description });
  }
});

taskRouter.delete("/tasks/:taskId", async (req, res, next) => {
  const { taskId } = req.params;
  try {
    const deletedTask = await Tasks.deleteTask(taskId);
    res.send(deletedTask);
  } catch (error) {
    throw error;
  }
});

module.exports = taskRouter;
