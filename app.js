const express = require('express')
const app = express()
const port = 8080 || process.env.port
const routes = require('./routes')
const cors = require('cors')

app.use(cors())

app.use(routes)

app.listen(port, () => {
    console.info(`Example app listening on port ${port}!Let's go to http://localhost:${port}`)
  })