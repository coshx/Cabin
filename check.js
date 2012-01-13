/*
This is a small sample program that shows how to do a Node.js-style async HTTP request. It goes to a locally running cabin server
and grabs some data. You can use it for sanity-checking your data if you need to.
*/
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
