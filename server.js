const express = require('express')
const app = express()
const port = 3000

app.use(express.static('data'))
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})