const express = require('express')
const morgan = require('morgan')

const taskRoutes = require('./routes/task')



const app = express()


app.use(morgan('dev'))
app.use(taskRoutes)

app.listen(3000)
console.log('server is on port 3000')