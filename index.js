const PORT = 8080;
const express = require("express");
const server = express();

const apiRouter = require("./api");
server.use("/api", apiRouter);

server.listen(PORT, () => {
  console.log(`Server is up and running on port`, PORT);
});
