//************************************************************* class definition
var simMan = {

    init : function() {
        
        browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
                      const filter = "https://simpeg.kemenimipas.go.id/*";
                      if (!tab.url.match(filter)) {
                        browser.browserAction.setTitle({title:'Simpeg - Url Tidak Support'})
                        browser.browserAction.setIcon({path:{48:'icons/bs128-nosupport.png'}});
                        browser.browserAction.setPopup({popup: "option/selain.html"})
                      }
        })
        browser.runtime.onMessage.addListener(simMan.handleMessage);
        return this;
    }
    ,handleMessage : function (request, sender, sendResponse) {
            let greeting = request.greeting;
            function onError(error) {
                console.log(`Error: ${error}`);
            }
            if(greeting === "BukanTarget"){
                browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
                   if (tab.url.match(/^about:/)) {
                    var cekMob = "Simpeg Custom Nonaktif1"
                    browser.browserAction.setTitle({title:cekMob})
                    browser.browserAction.setIcon({path:{48:'icons/bs128-off.png'}});
                    browser.browserAction.setPopup({popup: "option/selain.html"})                    
                   }else{
                    var cekMob = "Simpeg Custom Nonaktif2"
                    browser.browserAction.setTitle({title:cekMob})
                    browser.browserAction.setIcon({path:{48:'icons/bs128-off.png'}});
                    browser.browserAction.setPopup({popup: "option/inactive.html"})
                   }
                })
                var cekMob = "Simpeg Custom Nonaktif3"
                browser.browserAction.setTitle({title:cekMob})
                browser.browserAction.setIcon({path:{48:'icons/bs128-off.png'}});
                browser.browserAction.setPopup({popup: "option/inactive.html"})
            }else{
                if(greeting === "skp_journal"){
 
                    browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

                            const filter = "https://simpeg.kemenimipas.go.id/*";
                            if (!tab.url.match(filter)) {
                                browser.browserAction.setTitle({title:'Simpeg - Url Tidak Support'})
                                browser.browserAction.setIcon({path:{48:'icons/bs128-nosupport.png'}});
                                browser.browserAction.setPopup({popup: "option/selain.html"})
                            }else{
                                var cekMob = "Simpeg Custom V.Dekstop"
                                browser.browserAction.setTitle({title:cekMob})
                                browser.browserAction.setIcon({path:{48:'icons/bs128.png'}});
                                browser.browserAction.setPopup({popup: "option/options.html"})
                            }

                  })
                }else if(greeting === "selain_skp_journal"){
                    browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

                            const filter = "https://simpeg.kemenimipas.go.id/*";
                            if (!tab.url.match(filter)) {
                                var cekMob = tab.url
                                browser.browserAction.setTitle({title:'Simpeg - Url Tidak Support'})
                                browser.browserAction.setIcon({path:{48:'icons/bs128-nosupport.png'}});
                                browser.browserAction.setPopup({popup: "option/selain.html"})
                            }else{
                                var cekMob = "Simpeg Custom V.Dekstop"
                                browser.browserAction.setTitle({title:cekMob})
                                browser.browserAction.setIcon({path:{48:'icons/bs128.png'}});
                                browser.browserAction.setPopup({popup: "option/options.html"})
                            }

                    })
                }else if(greeting === "ModeHP"){
					var cekMob = "Simpeg Custom - ModeHP"
					browser.browserAction.setIcon({path:{48:'icons/bs128.png'}});
					browser.browserAction.setPopup({popup: "option/options.html"})
                    browser.browserAction.setTitle({title:cekMob})
                    var removeCSS = browser.tabs.removeCSS({file: "css/Dekstop.css"});
                                    removeCSS.then(null, onError);
                    var insertingCSS = browser.tabs.insertCSS({file: "css/Mobile.css"});
                                       insertingCSS.then(null, onError);
					
				}else if(greeting){

				}
            }
        sendResponse({response : greeting})
    }

};


//************************************************************************** run
var bg = simMan.init();


