const { Router } = require("express");

const router = Router();

router.get("/tasks", (req, res) => {
  res.send("getting list of task");
});

router.get("/tasks/1", (req, res) => {
  res.send("single task");
});

router.post("/tasks", (req, res) => {
  res.send("creating new task");
});
router.delete("/tasks", (req, res) => {
  res.send("deleteing a task");
});
router.patch("/tasks", (req, res) => {
  res.send("updating a task ");
});

module.exports = router;
