class UserConf {
constructor(params){
 this.params=params
}
async getConf(){
 const items = ["userAgent","platform","appName","appVersion","product","productStub","vendor","vendorStub","hardwareConcurrency","deviceMemory"]
 var s = []
 for(var i of items){
   if(navigator[i])  s.push(navigator[i])
 }
 
 
 return s
}

}


function base64decode(s){
    return Uint8Array.from(atob(s), c => c.charCodeAt(0))
}
function base64encode(b){
    return btoa(String.fromCharCode(...new Uint8Array(b)))
}

function digest(x) {
  const data = new TextEncoder().encode(x);
  return crypto.subtle.digest('SHA-256', data);
}
