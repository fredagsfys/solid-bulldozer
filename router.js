define(['backbone', 'jquery', 'underscore', 'views/startview', 'views/account/accountView', 'views/account/accountListView',  'views/account/createaccountview', 'views/loanview', 'collections/accountcollection'],
function(Backbone, jquery, underscore, StartView, AccountView, AccountListView, CreateAccountView, LoanView, AccountCollection){
    return Backbone.Router.extend({
        
           initialize: function(o){
               this.mainView = o.mainView;
               
           },
           routes:{
               "" : function(){
                    this.nav(new StartView({el:'.content'}));
                    console.log("start");
               },
               "start" : function(){
                    this.nav(new StartView({el:'.content'}));
                    console.log("start");
               },

               //Account
               "accounts" : function(){
                    var accCollection = new AccountCollection();
                    this.nav(new AccountListView({el:'.content', accCollection:accCollection}));
                    console.log("accounts list");
               },
               "accounts/new" : function(){
                    var accCollection = new AccountCollection();
                    this.nav(new CreateAccountView({el:'.content', accCollection:accCollection}));
                    console.log("new account");
               },
               "account/:id" : function(id){
                    var accCollection = new AccountCollection();
                    this.nav(new AccountView({el:'.content', accCollection:accCollection, id:id}));
                    console.log("specific account");
               },
               
               "loan" : function(){
                    this.nav(new LoanView());
                    console.log("loan");
               }
           },
           nav: function(view){ this.mainView.show(view); }
    });
});