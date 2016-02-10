/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var pubsub = require("pubsub");
return pubsub.listChannel();			