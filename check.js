var http = require("http");
var opts = {
  host: "localhost"
  , port: 3000
  , path: "/query.json?host=app3&timestamp=&application=&location=&tags=&severity=&message="
  , method: "GET"
};

var buffer = "";
console.log("about to make request...");
http.request(opts, function(res) {
  console.log("made request...");
  res.setEncoding("utf8");
  res.on("data", function(data) {
    buffer += data;
  });
  res.on("end", function() {
    var obj = JSON.parse(buffer);
    console.log(obj);
    console.log(obj["logs"].length);
  });
}).end();
