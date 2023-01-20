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


module.exports = taskRouter;