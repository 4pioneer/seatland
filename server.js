const express = require('express');
const app = express();
const port = 3000;

app.use('/data', express.static('data'));
app.use('/test', express.static('test'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
app.get('/', function (req, res) {
  const args = process.argv.slice(2);
  if (args[0] === 'test') {
    res.sendFile(__dirname + '/test/index.html');
    return
  }
  res.sendFile(__dirname + '/index.html')
});

