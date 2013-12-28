console.log("...LOADING router.js")
/*
    This function takes care of the url-routing and builds up the view for contentView.
    Depending on which url is visited it creates the specific view for it.
*/
define(['backbone', 'jquery', 'underscore', 'bootstrap', 'spin', 'views/startView', 'views/account/accountView', 'views/account/accountListView',  'views/account/newAccountView', 'views/account/editAccountView', 'views/loanView', 'collections/accountcollection', "views/messageView"],
  function(Backbone, jquery, underscore, bootstrap, Spinner, StartView, AccountView, AccountListView, CreateAccountView, EditAccountView, LoanView, AccountCollection, MessageView){
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
            //Loan
            "loan" : "loan"
          },
          //Start
          start: function(){
            if(this.currentView)
              this.cleanUp(this.currentView);

            this.currentView = new StartView({el: this.el});
            this.nav(this.currentView, 'start');
          },
          //Account
          accounts: function(){
            if(this.currentView)
              this.cleanUp(this.currentView);

            this.addFetchWaiting();
            var self = this;

            this.collection.fetch({
              success: function(response){
                self.currentView = new AccountListView({el: self.el, collection: response});
                self.nav(self.currentView, 'accounts');
              }
            });
          },
          account: function(id){
            if(this.currentView)
              this.cleanUp(this.currentView);

            this.addFetchWaiting();
            var self = this;
            this.collection.fetch({
              success: function(response){
                  var success = new MessageView({ type: 'success', text: 'Account fetched successfully' });
                  self.currentView = new AccountView({el: self.el, model: response.getAccountById(id)});
                  self.nav(self.currentView, 'accounts');
              }
            });
          },
          newAccount: function(){
            if(this.currentView)
              this.cleanUp(this.currentView);

            this.currentView = new CreateAccountView({el: this.el, collection: this.collection});
            this.nav(this.currentView, 'accounts');
          },
          editAccount: function(id){
            if(this.currentView)
              this.cleanUp(this.currentView);

            this.addFetchWaiting();
            var self = this;
            this.collection.fetch({
              success: function(response){
                  var success = new MessageView({ type: 'success', text: 'Account fetched successfully' });
                  self.currentView = new EditAccountView({el: self.el, collection: response, id: id});
                  self.nav(self.currentView, 'accounts');
              }
            });
          },
          //Loan
          loan: function(){
            if(this.currentView)
              this.cleanUp(this.currentView);
            
            this.currentView = new LoanView();
            this.nav(this.currentView, 'loan');
          },
          //Other
          //Function which renders mainView and its content.
          nav: function(view, sectionid){ this.mainView.show(view, sectionid); },

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