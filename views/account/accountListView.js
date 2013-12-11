define(['backbone', 'underscore', 'jade!templates/accountList'], 
    function(Backbone, underscore, template){
    return Backbone.View.extend({
        template: template,
        
        initialize: function(){
            $('.currentPage').html("<h3>Accounts</h3>");
        },
        
        render: function(){
            //Render it in jade template  
            this.$el.html(this.template({models:this.options.collection.models}));
            return this;
        }
    });
});