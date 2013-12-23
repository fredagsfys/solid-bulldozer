define(['backbone', 'jquery', 'underscore', 'jade!templates/start'], 
  function(Backbone, jquery, underscore, template){
    return Backbone.View.extend({
        template: template,
        //Constructor
        initialize: function(){
            $('.currentPage').html("<h3>Welcome!</h3>");
        },
        render: function(){       
            this.$el.html(this.template());
            return this;
        }
    });
});