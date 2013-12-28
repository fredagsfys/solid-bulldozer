// Model used to store accounts
define(["backbone"], 
    function(Backbone){
	return Backbone.Model.extend({
		// Setup som default data
        defaults: {
            name: null,
            amount: 0,
            accountType: null,
            createDate: new Date()
        }
    });
});
