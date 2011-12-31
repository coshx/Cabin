Sometimes you want to read over the logs from the same application running on multiple places. When that happens - or when you 'just feel like it' - you want Cabin. Cabin is a log aggregator built to be very buzzword-compliant (and pleasant to use too). The core is Node.js using Connect and Express, the database backend is MongoDB, and rendering is done client-side using Handlebars.js and Backbone.js.

Versions being used right now:

Node.js: 0.6.6 (will downgrade to 0.4.x if needed)
NPM: 1.0.106
MongoDB: 2.0.2

Express: 2.5.2
Connect: 1.8.5

Other useful things:

post the sample log (sample_log.json) to server running on localhost:
curl -i -H "Content-type: application/json" -X POST -d @sample_log.json http://localhost:3000/
