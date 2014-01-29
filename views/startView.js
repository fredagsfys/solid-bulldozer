define(['backbone', 'jquery', 'underscore', 'jade!templates/start'], 
  function(Backbone, jquery, underscore, template){
    return Backbone.View.extend({
        template: template,
        //Constructor
        initialize: function(){
        },
        render: function(){       
            this.$el.html(this.template());
        }
    });
});
