#!env ruby

## populates the db with some entries
## requires the app to be running, but doesn't check
## remove from the mongo shell with : db.applogs.remove({});

require 'net/http'
uri = URI('http://localhost:3000/')

100.times do                                                                                                     data = { 'host' => "app#{rand(10)}", 
           'timestamp' => "#{Time.now.to_i}", 
           'application' => "sample app", 
           'location' => "this_file.js:#{rand(10000)}", 
           'tags' => "tag ##{rand(10000)}", 
           'severity' => "info", 
           'message' => "this is sample message #{rand(100)}"
  }
  Net::HTTP.post_form(uri, data)                                                                               end