if (typeof jQuery === 'undefined') {
    console.error('jQuery is not loaded. This script requires jQuery to function.');
  } else {       
          $('#makeLinkButton').click(function() {
              var oin=$('#edit-in');
              var oout=$('#edit-out');
              var intxt=oin.val();
              if(intxt.length==0) {
                oin.focus();
                alert("No URL entered!");
              } 
            
              else {
                var prep="https://login.ezproxy.library.tufts.edu/login?qurl=";
                var rc=intxt.indexOf('https://login.ezproxy.library.tufts.edu/login?qurl=')
                var rd=intxt.indexOf('.libproxy.tufts.edu')
                var wellFormedHttp=intxt.indexOf('http://')
                var wellFormedHttps=intxt.indexOf('https://')
               if(wellFormedHttp=='0'||wellFormedHttps=='0'){
                
                
                    if(rc==-1) {
                    if(rd==-1){
                              oout.val(prep+intxt);
                              oout.focus();
                              oout.select();
                        }
                    else{
                        alert("That is a translated URL and shouldn't be used. Click OK and I'll fix it for you");
                        intxt = intxt.replace(/.libproxy.tufts.edu/g,"")
                              oout.val(prep+intxt);
                              oin.focus();
                              oin.select();
                        }
                        }
                    else {
                          alert("That is already a proxied URL, so no change is needed");
                          oout.val("");
                          oin.focus();
                          oin.select();
                    }
                }
                else{
                alert("The URL source URL doesn't start with http:// or https:// or contains multiple entries, please enter a valid URL like http://someaddress.com");
                      oout.val("");
                      oin.focus();
                      oin.select();
                }
              }
            
                })
            
            }           
