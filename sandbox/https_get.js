// require.paths.push('/usr/local/lib/node_modules');
// var nodeio = require('/usr/local/lib/node_modules/node.io');



var https = require('https');
var headers = {'User-Agent':'Mozilla/3.0 WebTV/1.2 (compatible; MSIE 2.0)'}; // <3
https.get({ host: 'mtgox.com', headers:headers , path: '/api/0/data/ticker.php' }, function(res) {
  console.log("statusCode: ", res.statusCode);
  console.log("headers: ", res.headers);

  res.on('data', function(d) {
    process.stdout.write(d);
  });

}).on('error', function(e) {
  console.error(e);
});


