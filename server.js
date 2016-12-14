var express = require('express')
	, sqlite3 = require('sqlite3').verbose()
	, qs = require('querystring')
  , port = 9090;

var app = express()
var db = new sqlite3.Database(':memory:')

app.listen(port, function() {
	console.log("Listening on " + port)
	startDB()
	app.use(express.static('public'))
})

app.put('/addMember', function(req, res) {
	var body = ''
	req.on('data', function(d) {
    body += d;
  })
  req.on('end', function(d) {
		var q = qs.parse(body)
		if(q) {
			db.run('INSERT INTO members VALUES ($name, $email)', {
				$name: q.name,
				$email: q.email
			})
			res.end()
		}
	})
})

app.post('/listMembers', function(req, res) {
	var ret = []
	db.each('SELECT rowid, name, email FROM members', function (err, row) {
		if(row) {
			ret.push({name: row.name,
							email: row.email})
		}
	}, function() {
		res.end(JSON.stringify(ret))
	})
})

function startDB() {
	db.serialize(function() {
		db.run('CREATE TABLE IF NOT EXISTS members (name, email)')
	})
}