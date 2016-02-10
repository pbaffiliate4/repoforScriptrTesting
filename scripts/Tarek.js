/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var request = {
    url :  "www.google.com",
    method : "PUT",   
    files: {"body": "file"}
  };
 //laba
return this.client.callApi(request);    				   							