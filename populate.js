// Script to fill up your local MongoDB instance with some test data by posting to Cabin over and over.
// Not recommended for production, obviously.
// Some not-quite-natural looking code in here since this was a team hackathon effort and not everyone was used to writing JavaScript.

// ref: http://www.theroamingcoder.com/node/111

var querystring = require('querystring');
var http = require("http");

var post_domain = 'localhost';
var post_port = 3000;
var post_path = "/";

severities = ["info", "debug", "error", "warn"];
applications = ["foo", "bar", "baz", "capybara", "energize"];
messages = ["file not found", "exited with code: 17", "Throttling respawn: Will start in 10 seconds", "database system was interrupted; last known up at 2011-12-23 21:56:05 EST", "FATAL:  lock file postmaster.pid already exists", "Rendered devise/sessions/new.html.haml within layouts/application (33.3ms)", "FATAL: lock file db_socket.pid already exists", "Rendered devise/sessions/new.html.haml within layouts/other (24.3 ms)"]
tags = ["lorem", "ipsum", "dolor", "amet", "consectetur", "adipisicing", "elit", "sed", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua"];

function h() {
  var host = 'app' + eval(Math.floor(Math.random()*11));
  return host;
}

function t() {
  var timestamp = eval(Math.round(new Date().getTime()/1000.0));
  return timestamp;
}

function l() {
  var location = 'the_file.js:' + eval(Math.floor(Math.random()*10000));
  return location
}

function a(index) {
  var application = applications[eval(index % applications.length)];
  return application;
}

function s(index) {
  var severity = severities[eval(index % severities.length)];
  return severity;
}

function m(index) {
  var message = messages[eval(index % messages.length)];
  return message;
}

function ta(index) {
  var numTags = Math.floor(Math.random() * 3) + 1
  var cumulativeTags = [];
  for(var i = 0; i < numTags; ++i) {
    var rand = Math.floor(Math.random() * tags.length);
    cumulativeTags.push(tags[rand]);
  }
  return cumulativeTags.join(", ");
}

console.log("populating the database with 100 records");
for(i = 0; i < 101; i++) {
  var post_data = querystring.stringify({
    'host': h(),
    'timestamp': t(),
    'application': a(i),
    'location': l(),
    'tags': ta(i),
    'severity': s(i),
    'message': m(i)
  });
  
  var post_options = {
    host: "localhost"
    , port: 3000
    , path: "/"
    , method: "POST"
    , headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': post_data.length
    }
  };
  
  var post_req = http.request(post_options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
      console.log('Response: ' + chunk);
    });
  });
  
  post_req.write(post_data);
  post_req.end();
};