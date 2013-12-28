define(['models/accountmodel', 'backbone', 'bb-loc'], 
	function(Account, Backbone){
	    return Backbone.Collection.extend({
	    		// Model used
	            model: Account,
	            // New localstorage assigned name Accounts
	            localStorage: new Store("Accounts"),

	            //Added own functionallity to get account by id.
                getAccountById: function(id) {
                        return this.find(function(accountmodel){
                                return accountmodel.id == id;
                        });
                }
	    });
});