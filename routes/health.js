const express = require("express");
const healthRouter = express.Router();
//making health route to make sure app has not completly crashed
healthRouter.use("/health",(req, res, next) => {
  console.log("A request is being made to /health");

  res.send({ message: "A message from /health" });
});

module.exports = healthRouter;
