/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="controls_if" id="8" inline="false" x="14" y="19"><value name="IF0"><block type="logic_compare" id="24" inline="true"><field name="OP">EQ</field><value name="A"><block type="scriptr_params" id="16"><field name="parameter">abc</field></block></value><value name="B"><block type="math_number" id="43"><field name="NUM">50</field></block></value></block></value><statement name="DO0"><block type="scriptr_return" id="51" inline="false"><value name="return"><block type="scriptr_callhttp" id="73"><field name="method">GET</field><field name="url">http://scriptr.io/documentation</field></block></value></block></statement></block></xml>*#*#*/
if ((request.parameters["abc"]) == 50) {
  return require("http").request({"url": "http://scriptr.io/documentation" , "method": "GET"})}
   							