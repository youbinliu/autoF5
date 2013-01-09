

var initPopup = function(){
	var s = document.getElementById("submit");
	s.addEventListener('click',function(){
		
		chrome.tabs.getSelected(null,function(tab) {
				var ts = document.getElementById("ts");
				chrome.extension.sendMessage({update: true,url:tab.url,ts:ts.value,tab:tab.id}, function(response) {});
			}       
		);
		
	})

}
initPopup()
