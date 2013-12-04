define(['models/accountmodel', 'backbone', 'bb-loc'], function(Account, Backbone){
    return Backbone.Collection.extend({
            model: Account,
            localStorage: new Store("Accounts")
    });
});