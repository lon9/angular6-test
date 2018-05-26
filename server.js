const express = require('express');
const path = require('path');
const http = require('http');


const app = express();

app.use(express.static(path.join(__dirname, 'dist/angular6-test')));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/angular6-test/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));
