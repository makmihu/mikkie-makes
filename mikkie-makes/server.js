const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const morgan = require('morgan')
const { expressjwt } = require('express-jwt')
const path = require("path")

app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "client", "dist")))

mongoose.set('strictQuery', true)
mongoose.connect(
  process.env.MONGO_URI, 
  (err) => console.log('connected to DB', err)
)

app.use('/api/get', require('./routes/getRouter') )
app.use('/api/auth', require('./routes/authRouter'))
app.use('/api/admin', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] })) 
app.use('/api/admin/yarn', require('./routes/yarnRouter'))
app.use('/api/admin/inventory', require('./routes/inventoryRouter'))


app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === 'UnauthorizedError'){
        res.status(err.status)
      }
    return res.send({errMsg: err.message})
})

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"))
})
app.listen(8050, () => {
    console.log('server running on port 8050')
})