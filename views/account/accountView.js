define(['backbone', 'underscore', 'jade!templates/account', 'views/shared/contentview'], 
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
                //Flash message
                var success = new MessageView({ type: 'success', text: 'Account deleted successfully!' });
                this.model.destroy();
                Backbone.history.navigate('accounts', {trigger:true});
            }
        }
    });
});