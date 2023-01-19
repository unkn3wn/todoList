const express = require("express");
const apiRouter = express.Router();

const taskRouter = require("./tasks");
apiRouter.use("/tasks", taskRouter);

module.exports = apiRouter;