const express = require('express')
const connection = require('./connections/conn')
connection()
const pic = require('./routes/pic')
const cors = require('cors')

const app = express()


app.use(cors())
app.use(pic)

app.listen(3000 || process.env.PORT, ()=>{console.log('listening on port 3000')})
