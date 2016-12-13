var express = require('express')
  , port = 9090;

var app = express()

app.listen(port, function() {
	console.log("Listening on " + port)
	app.use(express.static('public'))
})