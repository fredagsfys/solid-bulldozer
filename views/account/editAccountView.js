define(['backbone', 'underscore', 'backbone-validation', 'jade!templates/editAccount', 'models/accountmodel', 'common/serializeObject', 'views/messageView'], 
    function(Backbone, underscore, validation, template, AccountModel, SerializeObject, MessageView){
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
            model.save(null, {
                success: function(resp) {
                    //Flash success message
                    var success = new MessageView({ type: 'success', text: 'Account updated successfully!' });
                    Backbone.history.navigate('accounts', true);
                },

                error: function(err) {
                    //Flash error message
                    var error = new MessageView({ type: 'error', text: 'Account failed to update!' });
                }
            });
        },
        //Display functions
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

            //Render it in jade template  
            this.$el.html(this.template({model: this.options.collection.getAccountById(this.options.id)}));
            return this;
        }
    });
});
