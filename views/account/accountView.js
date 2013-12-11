define(['backbone', 'underscore', 'jade!templates/account'], 
    function(Backbone, underscore, template){
    return Backbone.View.extend({
        //Templates
        template: template,
        //Constructor
        initialize: function(){
            $('.currentPage').html("<h3>Accounts list</h3>");
        },
        //Render
        render: function(){
            //Render it in jade template
            this.$el.html(this.template({model: this.options.collection.getAccountById(this.options.id)}));
            
            return this;
        }
    });
});