Overview
========

Sometimes you want to read over the logs from the same application running on multiple places. When that happens - or when you 'just feel like it' - you want Cabin. Cabin is a log aggregator built to be very buzzword-compliant (and pleasant o use too). The core is Node.js using Connect and Express, the database backend is MongoDB, and rendering is done client-side using Handlebars.js and Backbone.js.

Cabin is copyright 2012 Coshx Labs and made available under the MIT License, see the bottom of this README.

About
-----

Cabin was done as a Coshx Labs hackathon project and was put together over the course of two days. We were allowed to work as much as we wanted those days, but in the name of not killing ourselves... this was done in two 10-or-so hour stretches. The original developers are David Kapp and Anthony Burton. Since this was a hackathon project (and since neither of us knew how to use any of the Node unit-testing libraries), there aren't any tests right now. If we are able to work on it further, we'd like to add some tests using the rather nice looking Mocha framework (https://github.com/visionmedia/mocha).

Thanks
------

Thanks to Ben Taitelbaum for letting Coshx have a year-end hackathon. It was a blast!
Thanks to TJ Holowaychuk for his efforts on the Node.js libraries we're using. You rock man! You rock.
Thanks to the rest of the folks who worked on the libraries this uses. Open Source is a team effort. TJ just gets a little extra mention since he's put out a lot. ;)
Thanks to the Node team for a really cool platform.
Thanks to my fiance Madeline for putting up with me disappearing for many hours prior to the hackathon reading about Node, and then during the hackathon for the late nights.

Versions and Such
-----------------

Versions of stuff we used being used right now:

Node.js: 0.6.6 
NPM: 1.0.106
MongoDB: 2.0.2

Starting Cabin
--------------

# Install Node, MongoDB, and NPM
# Clone the GitHub repo
# Enter the Cabin directory and run npm install
# node app.js
# ...your MongoDB database is empty, so to make it less so with 'node populate.js'
# Pet your cat (or dog, or both)
# Profit!

Other useful things
-------------------

post the sample log (sample_log.json) to server running on localhost:
curl -i -H "Content-type: application/json" -X POST -d @sample_log.json http://localhost:3000/

License
=======

Copyright (c) 2012 Coshx Labs

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Mini-Addendum
=============

If you feel you got value out of this software, please consider making a donation to a local animal shelter or other charity.
My cats kept me company while I worked on this and we'd all appreciate it. :)
