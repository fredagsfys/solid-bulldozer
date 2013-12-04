// View: Accounts, renders Hello World and documentation link

define(['backbone', 'underscore', 'jade!templates/account'], function(Backbone, underscore, template){
    return Backbone.View.extend({
        //Templates
        template: template,
        //Constructor
        initialize: function(){
            this.accCollection = this.options.accCollection;
            this.id = this.options.id;
            this.listenTo(this.accCollection, 'reset', this.render, this);  
            this.accCollection.fetch({ reset: true });
        },
        //Render
        render: function(){
            $('.currentPage').html("<h3>Accounts</h3>");
            //Render it in jade template
            console.log(this.accCollection.get(this.id));
            this.$el.html(this.template({model:this.accCollection.get(this.id)}));
            
            return this;
        }
        
    });
});