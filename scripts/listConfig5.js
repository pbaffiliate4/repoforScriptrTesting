/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 

var res=apsdb.callApi('GetDevice', {'id':'scriptr_GitHub.com'}, null).result.device.groups;var result=JSON.stringify(res);return result.indexOf('deployment-execute') > -1; 		   
	