/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var l = require("log");
l.setLevel("debug");
l.info("<b>name</b>");
		l.debug("this is to test the security if script is injected by js: <html> <script>alert(\"test\")</script> </html>");

return { "name" : "julien" };     							