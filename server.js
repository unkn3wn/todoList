const express = require("express");
const morgan = require("morgan");
const { client } = require("./db/client");

const app = express();
const PORT = 8080;
client.connect();

app.use(morgan("dev"));
app.use(express.json());

app.get("/test", (req, res) => {
  res.send("this is a test");
});

const taskRouter = require("./routes/tasks");
  app.use("/routes", taskRouter)

app.use((err, req, res, next) => {
  res.status(500).send(err);
});


app.listen(PORT, () => {
  console.log("Server is up on PORT", PORT);
});
