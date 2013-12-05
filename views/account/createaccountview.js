define(['backbone', 'underscore', 'jade!templates/addAccount', 'models/accountmodel', 'common/serializeObject'], 
    function(Backbone, underscore, template, AccountModel, SerializeObject){
    return Backbone.View.extend({
        //Templates
        template: template,
        //Constructor
        initialize: function(){
            this.accCollection = this.options.accCollection; 
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
            console.log("Saving!");
            this.accCollection.create(new AccountModel(myObj), {
                success: function(){
                    myObj = null;
                    this.close();
                    Backbone.history.navigate('accounts', {trigger:true});
                },
                error: function(){
                    //show 500?
                }
            });
        },
        //Display functions
        render: function(){
            $('.currentPage').html("<h3>Accounts <span class='glyphicon glyphicon-chevron-right'> </span> New Account</h3>");
            //Render it in jade template  
            this.$el.html(this.template());
            
            return this;
        }
    });
});
