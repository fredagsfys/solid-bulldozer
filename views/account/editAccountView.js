define(['backbone', 'underscore', 'jade!templates/editAccount', 'models/accountmodel', 'common/serializeObject'], 
    function(Backbone, underscore, template, AccountModel, SerializeObject){
    return Backbone.View.extend({
        //Templates
        template: template,
        //Constructor
        initialize: function(){
            $('.currentPage').html("<h3>Accounts <span class='glyphicon glyphicon-chevron-right'> </span> New Account</h3>");
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
