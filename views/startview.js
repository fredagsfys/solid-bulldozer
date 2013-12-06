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
        },
        remove: function() {
          this.$el.empty();        // Remove the content we added.
          this.undelegateEvents(); // Unbind your event handler.
          this.stopListening();
          return this;
        }
    });
});