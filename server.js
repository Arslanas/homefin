//Install express server
const express = require('express');
const http = require('http');
const path = require('path');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname,'dist')));

app.get('*', (req,res)=> {
  res.sendFile(path.join(__dirname,'dist/index.html'));
});
const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);

// Start the app by listening on the default Heroku port
server.listen(port,()=>console.log('Running...'));
