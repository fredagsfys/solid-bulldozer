define(['models/usermodel', 'backbone', 'bb-loc'], 
	function(User, Backbone){
	    return Backbone.Collection.extend({
	            model: User,
	            localStorage: new Store("Users"),

                getUserById: function(id) {
                        return this.find(function(accountmodel){
                                return usermodel.id == id;
                        });
                }
	    });
});