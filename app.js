const http = require("http");
const express = require("express");
const app = express();

//set the template engine ejs
app.set('view engine','ejs');
//middlewares
app.use(express.static('public'));
app.get('/',(req,res) => {
    res.render('index');
});
server = app.listen(3000);
console.log("Listening at 3000");

//socket.io instantiation
const io = require("socket.io")(server)
//listem on every collection
io.on('connection',(socket)=> {
    console.log('New User  connected');
});