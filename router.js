console.log("...LOADING router.js")
/*
    This function takes care of the url-routing and builds up the view for contentView.
    Depending on which url is visited it creates the specific view for it.
*/
define(['backbone', 'jquery', 'underscore', 'bootstrap', 'spin', 'views/startView', 'views/account/accountView', 'views/account/accountListView',  'views/account/newAccountView', 'views/account/editAccountView', 'collections/accountcollection', 'views/messageView'],
  function(Backbone, jquery, underscore, bootstrap, Spinner, StartView, AccountView, AccountListView, CreateAccountView, EditAccountView, AccountCollection, MessageView){
    return Backbone.Router.extend({
          el : '.content',
          //Constructor
          initialize: function(o){
            this.mainView = o.mainView;       
            this.collection = new AccountCollection();
          },
          //URL-routes
          routes:{
            //Start
            "" : "start",
            "start" : "start",
            //Account
            "accounts" : "accounts",
            "account/new" : "newAccount",
            "account/:id" : "account",
            "account/:id/edit" : "editAccount",
          },
          //START
          start: function(){
            if(this.currentView)
              this.cleanUp(this.currentView);

            this.currentView = new StartView({el: this.el});
            this.nav(this.currentView, 'start');
          },
          //ACCOUNT

          // Shows a list of accounts
          accounts: function(){
            if(this.currentView)
              this.cleanUp(this.currentView);

            this.addFetchWaiting();
            var self = this;

            this.collection.fetch({
              success: function(resp){
                self.currentView = new AccountListView({el: self.el, collection: resp});
                self.nav(self.currentView, 'accounts');
              },
              error: function(err){
                  // Flash error message
                  var error = new MessageView({ type: 'error', text: 'Error fetching accountlist' });
              }
            });
          },
          // Shows a single account
          account: function(id){
            if(this.currentView)
              this.cleanUp(this.currentView);

            this.addFetchWaiting();
            var self = this;
            this.collection.fetch({
              success: function(resp){
                  // Flash success message
                  var success = new MessageView({ type: 'success', text: 'Account fetched successfully' });

                  self.currentView = new AccountView({el: self.el, model: resp.getAccountById(id)});
                  self.nav(self.currentView, 'accounts');
              },
              error: function(err){
                  // Flash error message
                  var error = new MessageView({ type: 'error', text: 'Error fetching account' });
              }
            });
          },
          // Shows a create form account
          newAccount: function(){
            if(this.currentView)
              this.cleanUp(this.currentView);

            this.currentView = new CreateAccountView({el: this.el, collection: this.collection});
            this.nav(this.currentView, 'accounts');
          },
          // Shows a editform account
          editAccount: function(id){
            if(this.currentView)
              this.cleanUp(this.currentView);

            this.addFetchWaiting();
            var self = this;
            this.collection.fetch({
              success: function(resp){
                  // Flash success message
                  var success = new MessageView({ type: 'success', text: 'Account fetched successfully' });
                  
                  self.currentView = new EditAccountView({el: self.el, collection: resp, id: id});
                  self.nav(self.currentView, 'accounts');
              },
              error: function(err){
                  // Flash error message
                  var error = new MessageView({ type: 'error', text: 'Error fetching account' });
              }
            });
          },
          // Function which renders mainView and its content.
          nav: function(view, sectionid){ this.mainView.show(view, sectionid); },
          // Adds a loading gif while fetching data
          addFetchWaiting: function(){
            var spinner = new Spinner().spin();
            $(this.el).append(spinner.el);
          },
          //Removes current view, sets element to empty and removes events and listeners
          cleanUp: function(currView) {
            currView.$el.empty();        // Remove the content we added.
            currView.undelegateEvents(); // Unbind your event handler.
            currView.stopListening();
          }
    });
});