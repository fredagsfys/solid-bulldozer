console.log("...LOADING router.js")
/*
    This function takes care of the url-routing and builds up the view for contentView.
    Depending on which url is visited it creates the specific view for it.
*/
define(['backbone', 'jquery', 'underscore', 'bootstrap', 'views/startview', 'views/account/accountView', 'views/account/accountListView',  'views/account/newAccountView', 'views/account/editAccountView', 'views/loanview', 'collections/accountcollection'],
  function(Backbone, jquery, underscore, bootstrap, StartView, AccountView, AccountListView, EditAccountView, CreateAccountView, LoanView, AccountCollection){
    return Backbone.Router.extend({
          el : '.content',
           //Constructor
           initialize: function(o){
               this.mainView = o.mainView;           
           },
           //URL-routes
           routes:{
              //Start
               "" : function(){
                  if(this.currentView)
                    this.currentView.remove();

                  this.currentView = new StartView({el: this.el})
                  this.nav(this.currentView, 'start');

                  console.log("start");
               },
               "start" : function(){
                  if(this.currentView)
                    this.currentView.remove();

                  this.currentView = new StartView({el: this.el})
                  this.nav(this.currentView, 'start');
                  
                  console.log("start");
               },
               //Account
               "accounts" : function(){
                  if(this.currentView)
                    this.currentView.remove();

                  this.currentView = new AccountListView({el: this.el, collection: new AccountCollection()});
                  this.nav(this.currentView, 'accounts');

                  console.log("accounts list");
               },
               "account/new" : function(){
                  if(this.currentView)
                    this.currentView.remove();

                  this.currentView = new CreateAccountView({el: this.el, collection: new AccountCollection()})
                  this.nav(this.currentView, 'accounts');

                  console.log("new account");
               },
               "account/:id/edit" : function(id){
                  if(this.currentView)
                    this.currentView.remove();

                  this.currentView = new EditAccountView({el: this.el, collection: new AccountCollection()})
                  this.nav(this.currentView, 'accounts');

                  console.log("edit account");
               },
               "account/:id" : function(id){
                  if(this.currentView)
                    this.currentView.remove();

                  this.currentView = new AccountView({el: this.el, collection: new AccountCollection(), id: id})
                  this.nav(this.currentView, 'accounts');

                  console.log("specific account");
               },
               //Loan
               "loan" : function(){
                  this.nav(new LoanView(), 'loan');
                  console.log("loan");
               }
           },
           //Function which renders mainView and its content.
           nav: function(view, sectionid){ this.mainView.show(view, sectionid); }
    });
});