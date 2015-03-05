/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 var z;

z = request.parameters["x"] + request.parameters["y"];

return z;    
    				   				   				   				   				   							