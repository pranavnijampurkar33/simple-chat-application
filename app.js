const http = require("http");
const express = require("express");
const app = express();

//set the template engine ejs
app.set('view engine','ejs');
//middlewares
app.use(express.static('public'));
app.get('/',(req,res) => {
    res.send("Hi There");
});
app.listen(3000);
console.log("Listening at 3000");