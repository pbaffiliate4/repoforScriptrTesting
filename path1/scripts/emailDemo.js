/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 // First, we'll require the HTTP library to use later
var http = require("http");

// Let's say your script is expecting an http request parameter called 'temperature'
//   this is how you can retrieve it
var temperature = request.parameters.temperature

// Suppose you want to make that available for other scripts,
//	then you can store it in a global persistent variable
if (temperature != null) storage.global.temperature = temperature

// The value of 'storage.global.temperature' is automatically stored in a persistent database.
//	So from now on, it will be available to other scripts to read and modify.
//	'storage.local' will restrict the scope to instances of the current script only

// Now we can obtain the client IP from the http request header
var ip = request.headers["x-forwarded-for"];

// And build a request object to make an HTTP call to lookup the location the call came from
var requestObject = {
	"url": "http://www.telize.com/geoip/" + ip,
	"method": "GET" // This is the default BTW
}
// To add request params, you can use:
//   requestObject.params = {param1: "someValue", param2: "someValue"}

// ...and now we issue the request.
var response = http.request(requestObject);
if(response.status == "200"){
    var result = JSON.parse(response.body);
    var country = result.country;
}

// A script can return any JS data structure
return {country: country};   							