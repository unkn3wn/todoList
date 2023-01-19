const express = require('express')
const taskRouter = express.Router();


taskRouter((req, res, next)=>{
    console.log("requst to /task");

    res.send({message:"hey"})
});

module.exports = taskRouter;