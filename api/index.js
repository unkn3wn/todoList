const express = require("express");
const apiRouter = express.Router();

const taskRouter = require('./task');
apiRouter.use("/task", taskRouter);

module.exports = apiRouter;