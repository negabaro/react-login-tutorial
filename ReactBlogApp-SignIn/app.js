var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
app.use(express.static(path.join(__dirname,"/html")));

app.use(bodyParser.json());


app.post('/signin', function (req, res) {
  
  //console.log("req:",req);
  //console.log("res:", res);
  //express logとしてででるような気がする
  var user_name=req.body.email;
  var password=req.body.password;
  if(user_name=='admin' && password=='admin'){
  	res.send('success');
  }
  else{
  	res.send('Failure');
  }
})

app.listen(3027, '0.0.0.0', function(){
    console.log("Started listening on port", 3027);
})
