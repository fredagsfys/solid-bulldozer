console.log("...LOADING config.js");
//This  file is a config for all the dependencies needed in the project.
require.config({
    paths: {
        templates: "templates",
            jquery: "lib/jquery/jquery",
            underscore: "lib/underscore/underscore",
            backbone: "lib/backbone/backbone",
            bootstrap: "lib/bootstrap/bootstrap",
            jade: "lib/jade/jade",
            spin: "lib/spin/spin",
            "bb-rel":"lib/backbone/backbone-relational",
            "bb-loc":"lib/backbone/backbone.localStorage.async",
            "backbone-validation": "lib/backbone/backbone-validation",
    },
    shim: {
        jquery: { exports: "jquery" },
        underscore: { exports: "underscore" },
        showdown: { exports: "showdown" },
        backbone: {
                deps: ["jquery","underscore"],
                exports: "Backbone"
        },
        "bb-rel": ["backbone","underscore"],
        "bb-loc": ["backbone","underscore"],
        "backbone-validation": ["backbone", "underscore"],
        bootstrap: { 
                deps: ["jquery"],
                exports: "bootstrap" 
        }
    }
});

//Init method which starts up the application by calling start function inside App.js
require(['app'], function(App){
    App.start();
});