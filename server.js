// in sublime
var express = require('express');
var path = require('path');
var port = process.env.PORT || 3001;
var app = express();
app.use(express.static(__dirname +'/'))
app.get('/*',function (req,res) {

 res.sendFile(path.join(__dirname+'/index.html'))
});
app.listen(port, function () {
 console.log('App listening on port !');
});
