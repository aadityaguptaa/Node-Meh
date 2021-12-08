var http = require('http')
var fs = require('fs')

function serveStaticFile(res, path, contentType, code){
    if(!code)code = 200
    fs.readFile(__dirname + path, function(err, data){
        if(err){
            res.writeHead(404, {'content-type' : 'text/plain'})
            res.end('error')
        }else{
            res.writeHead(code, {'Content-Type' : contentType})
            res.end(data)
        }
    })

}

http.createServer(function(req,res){
    
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()

    switch(path){
        case '': 
                serveStaticFile(res, '/about/home.html', 'text/html' )
                break
        case '/about': 
                serveStaticFile(res, '/about/about.html', 'text/html' )
                break
        default:
                serveStaticFile(res, '/about/error.html', 'text/html' )
                break
    }
}).listen(3000)

console.log("Server Started")