console.log("...LOADING router.js")
/*
    This function takes care of the url-routing and builds up the view for contentView.
    Depending on which url is visited it creates the specific view for it.
*/
define(['backbone', 'jquery', 'underscore', 'bootstrap', 'views/startview', 'views/account/accountView', 'views/account/accountListView',  'views/account/newAccountView', 'views/account/editAccountView', 'views/loanview', 'collections/accountcollection'],
  function(Backbone, jquery, underscore, bootstrap, StartView, AccountView, AccountListView, CreateAccountView, EditAccountView, LoanView, AccountCollection){
    return Backbone.Router.extend({
          el : '.content',
           //Constructor
           initialize: function(o){
               this.mainView = o.mainView;       
               this.collection = new AccountCollection()    
           },
           //URL-routes
           routes:{
              //Start
               "" : function(){
                  if(this.currentView)
                    this.cleanUp(this.currentView);

                  this.currentView = new StartView({el: this.el})
                  this.nav(this.currentView, 'start');
               },
               "start" : function(){
                  if(this.currentView)
                    this.cleanUp(this.currentView);

                  this.currentView = new StartView({el: this.el})
                  this.nav(this.currentView, 'start');
               },
               //Account
               "accounts" : function(){
                  if(this.currentView)
                    this.cleanUp(this.currentView);
             
                  var self = this;

                  this.collection.fetch({
                      success: function(response){
                          self.currentView = new AccountListView({el: self.el, collection: response})
                          self.nav(self.currentView, 'accounts');
                      }
                  });
               },
               "account/new" : function(){
                  if(this.currentView)
                    this.cleanUp(this.currentView);

                  this.currentView = new CreateAccountView({el: this.el, collection: this.collection})
                  this.nav(this.currentView, 'accounts');
               },
               "account/:id/edit" : function(id){
                  if(this.currentView)
                    this.cleanUp(this.currentView);

                  var self = this;
                  this.collection.fetch({
                      success: function(response){
                          self.currentView = new EditAccountView({el: self.el, collection: response, id: id})
                          self.nav(self.currentView, 'accounts');
                      }
                  });
               },
               "account/:id" : function(id){
                  if(this.currentView)
                    this.cleanUp(this.currentView);

                  var self = this;
                  this.collection.fetch({
                      success: function(response){
                          self.currentView = new AccountView({el: self.el, collection: response, id: id})
                          self.nav(self.currentView, 'accounts');
                      }
                  });

               },
               //Loan
               "loan" : function(){
                  if(this.currentView)
                    this.cleanUp(this.currentView);
                
                  this.nav(new LoanView(), 'loan');
               }
           },
           //Function which renders mainView and its content.
           nav: function(view, sectionid){ this.mainView.show(view, sectionid); },
           //Removes current view, sets element to empty and removes events and listeners
           cleanUp: function(currView) {
            currView.$el.empty();        // Remove the content we added.
            currView.undelegateEvents(); // Unbind your event handler.
            currView.stopListening();
          }
    });
});