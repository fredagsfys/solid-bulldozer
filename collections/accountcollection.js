define(['models/accountmodel', 'backbone', 'bb-loc'], 
	function(Account, Backbone){
	    return Backbone.Collection.extend({
	            model: Account,
	            localStorage: new Store("Accounts"),

                getAccountById: function(id) {
                        return this.find(function(accountmodel){
                                return accountmodel.id == id;
                        });
                }
	    });
});