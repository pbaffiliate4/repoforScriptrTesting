/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 
    

//var params = {'id':'scriptr_GitHub.com'};var res = apsdb.callApi('GetDevice', params,null);return res.result.device.groups;
//return res.result.device.token['apsdb.authToken'];

//return apsdb.callApi('ListGroups', null, null).result.groups;
 //return result.indexOf("deployment-execute") > -1;
 
 

// var res=apsdb.callApi('GetDevice', {'id':'4'}, null).result.device.groups;var result=JSON.stringify(res);
// return result.indexOf('bruna') > -1;

var params = { 'apsdb.defaultGitWebhookId': ''};
var result = apsdb.callApi('SaveConfiguration', params, null); return result;

			