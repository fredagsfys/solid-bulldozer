// View: Accounts, renders Hello World and documentation link

define(['backbone', 'underscore', 'jade!templates/accountList'], function(Backbone, underscore, template){
    return Backbone.View.extend({
        template: template,
        
        initialize: function(){
            this.accCollection = this.options.accCollection;
            this.listenTo(this.accCollection, 'reset', this.render, this);  
            this.accCollection.fetch({ reset: true });
        },
        
        render: function(){
            $('.currentPage').html("<h3>Accounts</h3>");
            //Render it in jade template  
            this.$el.html(this.template({accCollection:this.accCollection.models}));
            return this;
        }
        
    });
});