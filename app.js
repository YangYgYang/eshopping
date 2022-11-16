const express = require('express')
const app = express()
const port = 8080 || process.env.port
const routes = require('./routes')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
//前端網址出來，要修改
// const corsOptions = {
//   origin: [
//     'http://www.example.com',
//     'http://localhost:8080',
//   ],
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
//   allowedHeaders: ['Content-Type', 'Authorization'],
// };
//app.use(cors(corsOptions))

app.use(cors())

app.use(routes)

app.listen(port, () => {
    console.info(`Example app listening on port ${port}!Let's go to http://localhost:${port}`)
  })