console.log("...LOADING startview.js")
// View: App, renders Hello World and documentation link

define(['backbone', 'jquery', 'underscore', 'jade!templates/start'], function(Backbone, jquery, underscore, template){
    return Backbone.View.extend({
        template: template,
        
        render: function(){
            $('.currentPage').html("<h3>Start</h3>");
            this.$el.html(this.template);
            return this;
        }
    });
});