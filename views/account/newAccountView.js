define(['backbone', 'underscore', 'jade!templates/addAccount', 'models/accountmodel', 'common/serializeObject', 'views/shared/contentview'], 
    function(Backbone, underscore, template, AccountModel, SerializeObject, MessageView){
    return Backbone.View.extend({
        //Templates
        template: template,
        //Constructor
        initialize: function(){
        },
        //Events
        events: {
            'submit .add-account-form': 'saveAccount'
        },
        //Event functions
        saveAccount: function(ev){
            ev.preventDefault();
            //Using common/serializeObject function to get a JSON data object from form
            var myObj = $(ev.currentTarget).serializeObject();
            this.options.collection.create(new AccountModel(myObj));
            

            //Flash message
            var success = new MessageView({ type: 'success', text: 'Account created successfully' });
            Backbone.history.navigate('accounts', {trigger:true});
        },
        //Display functions
        render: function(){
            //Render it in jade template  
            this.$el.html(this.template());
            
            return this;
        }
    });
});
