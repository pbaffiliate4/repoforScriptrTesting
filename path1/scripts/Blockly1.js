/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="variables_set" id="1" inline="true" x="211" y="42"><field name="VAR">x</field><value name="VALUE"><block type="math_number" id="2"><field name="NUM">100</field></block></value><next><block type="controls_if" id="3" inline="false"><value name="IF0"><block type="logic_compare" id="4" inline="true"><field name="OP">EQ</field><value name="A"><block type="variables_get" id="5"><field name="VAR">x</field></block></value><value name="B"><block type="math_number" id="6"><field name="NUM">100</field></block></value></block></value><statement name="DO0"><block type="text_print" id="7" inline="false"><value name="TEXT"><block type="text" id="8"><field name="TEXT">hey</field></block></value></block></statement></block></next></block></xml>*#*#*/
var x;


x = 100;
if (x == 100) {
  window.alert('hey');
}
   							