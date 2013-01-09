
var refresh;

var initBackgroud = function(url,ts,tabId) {  
		
		clearInterval(refresh)
		
		refresh = setInterval(function(){
			try{
				chrome.tabs.update(parseInt(tabId),{url:url},function(tab){
				})
			}catch(err){
				clearInterval(refresh)
			}
		},parseInt(ts)*1000)	
			
}  

chrome.extension.onMessage.addListener(function(msg, _, sendResponse) {
  if (msg.update) {
    initBackgroud(msg.url,msg.ts,msg.tab)
    return true;
  } 
});
