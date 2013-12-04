console.log("...LOADING app.js")

/*
    This function builds up a nested mainview using mainview, navigationview and contentview.
    After the buildup it sends the nested mainview into routing to fill it up with content depending on route-url
*/
define(['backbone', 'router', 'views/shared/mainview', 'views/shared/navview', 'views/shared/contentview'], 
    function(Backbone, Router, MainView, NavView, ContentView){
     return {
        start: function(){
            //Nesting three views into one MainView.
            var navView = new NavView(),
            contentView = new ContentView(),
            mainView = new MainView({el:".container",navView:navView,contentView:contentView}),
            //Passes nested MainView into routing to fill it up with chosen page
            router = new Router({mainView:mainView});
            
            //Calls render() method in MainView to display content
            mainView.render();
            Backbone.history.start();
        }
    };
});