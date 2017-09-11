var http = require("http");
var db = require("./model/db");
var pages = require("./pages");




http.createServer(function(req, res){
	pages.index(req, res);
}).listen(8888, "127.0.0.1");
