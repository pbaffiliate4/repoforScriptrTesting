/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var pubsub = require("pubsub");

var options = {
  "subscribeACL": "anonymous",
  "publishACL": "authenticated"
}
return pubsub.createChannel("myChannel12", options);			