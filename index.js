const express = require('express')
const cors=require("cors")
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => res.send('hello'))

app.listen(8080, () => {console.log('server started on port http://localhost:8080')})