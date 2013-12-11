define(['backbone', 'jquery', 'underscore', 'jade!templates/start'], 
  function(Backbone, jquery, underscore, template){
    return Backbone.View.extend({
        template: template,
        initalize: function(){
          $('.currentPage').html("<h3>Start</h3>");
        },
        render: function(){       
            this.$el.html(this.template);
            return this;
        }
    });
});