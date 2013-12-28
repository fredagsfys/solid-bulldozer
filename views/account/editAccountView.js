define(['backbone', 'underscore', 'jade!templates/editAccount', 'models/accountmodel', 'common/serializeObject',  "views/messageView"], 
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

            var model = this.options.collection.getAccountById(this.options.id);
            model.set(myObj);
            model.save();
            this.options.collection.set(model);
            //Flash message
            var success = new MessageView({ type: 'success', text: 'Account updated successfully!' });
            Backbone.history.navigate('accounts', {trigger:true});
        },
        //Display functions
        render: function(){
            //Render it in jade template  
            this.$el.html(this.template({model: this.options.collection.getAccountById(this.options.id)}));
            return this;
        }
    });
});
