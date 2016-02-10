/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 

var params = { 'apsdb.defaultGitWebhookId': ''};
var result = apsdb.callApi('SaveConfiguration', params, null); return result;

			
