/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="scriptr_sendmail" id="15" inline="true" x="276" y="41"><value name="to"><block type="variables_get" id="18"><field name="VAR">bruna.rizk@elementn.com</field></block></value><value name="from"><block type="variables_get" id="63"><field name="VAR">bruna.rizk@elementn.com</field></block></value><value name="subject"><block type="variables_get" id="89"><field name="VAR">testing</field></block></value><value name="body"><block type="variables_get" id="103"><field name="VAR">i am a body</field></block></value></block></xml>*#*#*/
var bruna_rizk_elementn_com;
var testing;
var i_am_a_body;


sendMail (bruna_rizk_elementn_com, bruna_rizk_elementn_com, testing, i_am_a_body);
;
   							