var express = require("express");
var app = express();

app.set("view engine","ejs");
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get("/", function(req,res){
	res.render("index");
});

app.get("/under-construction", function(req,res){
	res.render("under-construction");
});

app.get("/about-me", function(req,res){
	res.render("about-me");
});

app.get("/social-media", function(req,res){
	res.render("social-media");
});

var port = process.env.PORT || 3000;

var server = app.listen(port, process.env.IP,function(){
	console.log("Server is running at http://" + process.env.IP + ":" + port + "/");
});