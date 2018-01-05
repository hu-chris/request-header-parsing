var http = require('http'),
    express = require('express'),
    useragent = require('express-useragent');
var app = express();

app.enable('trust proxy');

app.get('/', function(req, res) {
  var ip = req.ip
  var lang = req.headers['accept-language'].split(',')[0];
  var source = useragent.parse(req.headers['user-agent']);
  var os = source.source.match(/\(([^\)]+)\)/)[0].replace(/[()]/g, '');
  
  res.end(JSON.stringify({ ipaddress: ip, language: lang, software: os }));
}).listen(process.env.PORT);