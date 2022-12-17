const express = require('express')
const cors=require("cors")
const dbConnect = require('./config/connect')
const JobsRouter=require("./features/routes/jobs.route")
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use("/jobs",JobsRouter)

app.listen(8080, async() => {
    await dbConnect()
    console.log('server started on port http://localhost:8080')
})