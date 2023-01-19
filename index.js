const PORT = 8080;
const express = require("express");
const server = express();

server.listen(PORT, () => {
  console.log(`Server is up and running on port`, PORT);
});
