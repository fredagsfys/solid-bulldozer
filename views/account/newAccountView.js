define(['backbone', 'underscore', 'jquery', 'backbone-validation', 'jade!templates/addAccount', 'models/accountmodel', 'common/serializeObject', 'views/messageView'], 
    function(Backbone, underscore, jquery, validation, template, AccountModel, SerializeObject, MessageView){
    return Backbone.View.extend({
        //Templates
        template: template,
        //Constructor
        initialize: function(){
            this.model = new AccountModel();
        },
        //Events
        events: {
            'submit .add-account-form': 'saveAccount'
        },
        //Event functions
        saveAccount: function(ev){
            ev.preventDefault();
            //Using common/serializeObject function to get a JSON data object from form
            this.model.set($(ev.currentTarget).serializeObject());

            if(this.model.isValid(true)){
                //Prevent multiple submits
                $(ev.currentTarget).find('button').attr('disabled', true);

                this.options.collection.create(this.model, {
                    success : function(resp){
                        //Flash success message
                        var success = new MessageView({ type: 'success', text: 'Account created successfully!' });
                        Backbone.history.navigate('accounts', true);
                    },
                    error : function(err) {
                        //Flash error message
                        var error = new MessageView({ type: 'error', text: 'Account failed to create!' });
                    }
                });
            }
        },
        //Render view
        render: function(){

            // Binding the validation to this view
            Backbone.Validation.bind(this, {
                model: this.model,
                valid: function(view, attr) {
                        var $target = view.$("[name=" + attr + "]"),
                                $group = $target.closest(".control-group");
                        $group.removeClass("has-error");
                        //Removes errors from class .help-block
                        view.$('.add-account-form').find(".error-message").html("").addClass("hidden");
                },

                invalid: function(view, attr, error) {
                        var $target = view.$("[name=" + attr + "]"),
                                $group = $target.closest(".control-group");
                        $group.addClass("has-error");
                        //Renders error to class .help-block. Unhides error span.
                        view.$('.add-account-form').find(".error-message").append(error+"<br/>").removeClass("hidden");
                }
            });

            this.$el.html(this.template());          
            return this;
        }
    });
});
