define(['backbone', 'models/accountmodel', 'collections/accountcollection'], 
    function(Backbone, AccountModel, AccountCollection){
     return {
        fillData: function(){
            collec = new AccountCollection();
            collec.create(
                new AccountModel().set({name: "Fundings", amount: 2500, accountType: "Worldnature"})
            );
            collec.create(
                new AccountModel().set({name: "Shared account", amount: 350000, accountType: "Service"})
            );
            collec.create(
                new AccountModel().set({name: "Savings account", amount: 20000, accountType: "Private"})
            );
            collec.create(
                new AccountModel().set({name: "Capital credit", amount: -10000, accountType: "Captial"})
            );
        }
    };
});