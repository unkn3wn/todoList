const express = require('express')
const tasksRouter = express.Router();


tasksRouter.use((req, res, next)=>{
    console.log("requst to /task");

    res.send({message:"hey"})
});

module.exports = tasksRouter;