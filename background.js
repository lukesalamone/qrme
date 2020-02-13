chrome.browserAction.onClicked.addListener(function(tab) {
    if(!tab.url || !tab.url.startsWith('http')){
        return;
    }

    chrome.tabs.executeScript(null, {file: "generator.min.js"}, function(){
        chrome.tabs.executeScript(null, {file: "content.js"});
    });
});
