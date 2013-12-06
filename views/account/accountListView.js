define(['backbone', 'underscore', 'jade!templates/accountList'], 
  function(Backbone, underscore, template){
    return Backbone.View.extend({
        template: template,
        
        initialize: function(){
            $('.currentPage').html("<h3>Accounts</h3>");
            this.listenTo(this.options.collection, 'reset', this.render, this);  
            this.options.collection.fetch({ reset: true });
        },
        
        render: function(){
            //Render it in jade template  
            this.$el.html(this.template({models:this.options.collection.models}));
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