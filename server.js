var http = require('http')
  , fs   = require('fs')
  , url  = require('url')
  , port = 9090;

var server = http.createServer (function (req, res) {
  var uri = url.parse(req.url)

  switch( uri.pathname ) {
    case '/':
      sendFile(res, 'public/index.html', 'text/html')
      break
    case '/index.html':
      sendFile(res, 'public/index.html', 'text/html')
      break
    case '/css/style.css':
      sendFile(res, 'public/css/style.css', 'text/css')
      break
    case '/js/scripts.js':
      sendFile(res, 'public/js/scripts.js', 'text/javascript')
      break
		case '/README.md':
			sendFile(res, 'README.md', 'text/plain')
			break
    default:
      res.end('404 not found')
  }
})

server.listen(process.env.PORT || port)
console.log('listening on 9090')

// subroutines

function sendFile(res, filename, type) {

  fs.readFile(filename, function(error, content) {
    res.writeHead(200, {'Content-type': type})
    res.end(content, 'utf-8')
  })

}
