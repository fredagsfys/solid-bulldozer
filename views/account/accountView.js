define(['backbone', 'underscore', 'jade!templates/account'], 
    function(Backbone, underscore, template){
    return Backbone.View.extend({
        //Templates
        template: template,
        //Constructor
        initialize: function(){
            this.model = this.options.model;
            $('.currentPage').html("<h3>Account</h3>");
        },
        //Events
        events: {
            'click .deleteAccount': 'deleteAccount'
        },
        //Render
        render: function(){
            //Render it in jade template
            this.$el.html(this.template({model: this.model}));   
            return this;
        },
        deleteAccount: function(){
            this.model.destroy();
            Backbone.history.navigate('accounts', {trigger:true});
        }
    });
});