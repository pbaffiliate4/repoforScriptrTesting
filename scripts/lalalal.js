/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 

var result = apsdb.callApi("ListConfiguration", null, null); return result;
 		   
	