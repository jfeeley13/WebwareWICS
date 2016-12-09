var http = require('http')
  , fs   = require('fs')
  , url  = require('url')
	, express = require('express')
  , port = 9090;

var app = express()

app.listen(9090, function() {
	console.log("Listening on 9090")
	app.use(express.static('public'))
})