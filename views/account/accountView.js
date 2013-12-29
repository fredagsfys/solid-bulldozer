define(['backbone', 'underscore', 'jade!templates/account', 'views/messageView'], 
    function(Backbone, underscore, template, MessageView){
    return Backbone.View.extend({
        //Templates
        template: template,
        //Constructor
        initialize: function(){
            this.model = this.options.model;
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
            if(confirm("Are you sure? Deleting is permanent")) {
                this.model.destroy({
                   success : function(resp) { 
                        //Flash success message
                       var success = new MessageView({ type: 'success', text: 'Account deleted successfully!' });
                       Backbone.history.navigate('accounts', true);
                   },
                   error : function(err) {
                        //Flash error message
                        var error = new MessageView({ type: 'error', text: 'Account failed to delete!' });
                   }
                });
            }
        }
    });
});