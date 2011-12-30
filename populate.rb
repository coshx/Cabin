#!env ruby

## populates the db with some entries
## requires the app to be running, but doesn't check
## remove from the mongo shell with : db.applogs.remove({});

require 'net/http'
uri = URI('http://localhost:3000/')
severities = ["info", "debug", "error", "warn"]
applications = ["foo", "bar", "baz", "capybara", "energize"]

100.times do |n|
  data = { 'host' => "app#{rand(10)}", 
           'timestamp' => "#{Time.now.to_i}", 
           'application' => applications[n % applications.length], 
           'location' => "this_file.js:#{rand(10000)}", 
           'tags' => "tag ##{rand(10000)}", 
           'severity' => severities[n % severities.length], 
           'message' => "this is sample message #{rand(100)}"
  }
  Net::HTTP.post_form(uri, data)
end