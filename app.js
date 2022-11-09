const express = require('express')
const app = express()
const port = 3000 || process.env.port
const routes = require('./routes')

// app.get('/',(req,res)=>{
//     res.send('server is running')
// })

app.use(routes)

app.listen(port, () => {
    console.info(`Example app listening on port ${port}!Let's go to http://localhost:3000`)
  })