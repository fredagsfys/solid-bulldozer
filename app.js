console.log("...LOADING app.js")
/*
    This function builds up a nested mainview using mainview, navigationview and contentview.
    After the buildup it sends the nested mainview into routing to fill it up with content depending on route-url
*/
define(['backbone', 'router', 'views/shared/mainview','common/predefineData'], 
    function(Backbone, Router, MainView, PredefineData){
     return {
        start: function(){
            //If localstorage variable Accounts is null, create some predefined data and store it.
            if(localStorage.getItem("Accounts") == null){
                PredefineData.fillData();
            }
            var mainView = new MainView({el: ".container"}),
            //Passes nested MainView into routing to fill it up with chosen page
            router = new Router({mainView: mainView});
            
            //Calls render() method in MainView to display content
            mainView.render();
            Backbone.history.start();
        }
    };
});