define(['backbone', 'underscore', 'jade!templates/account'], 
    function(Backbone, underscore, template){
    return Backbone.View.extend({
        //Templates
        template: template,
        //Constructor
        initialize: function(){
            $('.currentPage').html("<h3>Accounts</h3>");
            this.listenTo(this.options.collection, 'reset', this.render, this);  
            this.options.collection.fetch({ reset: true });
        },
        //Render
        render: function(){
            //Render it in jade template
            this.$el.html(this.template({model:this.options.collection.get(this.options.id)}));
            
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