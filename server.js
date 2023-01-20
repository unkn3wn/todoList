const PORT = 8080;
const express = require("express");

const server = express();

server.listen(PORT, () => {
  console.log("Server is up on PORT", PORT);
});
