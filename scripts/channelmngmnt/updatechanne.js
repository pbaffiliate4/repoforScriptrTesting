/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 var pubsub = require("pubsub");
var options = {
  "subscribeACL": "authenticated",
  "publishACL": "authenticated"
}

return pubsub.updateChannel("channelFashio1n", options);			