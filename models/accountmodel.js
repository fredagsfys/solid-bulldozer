// Model used to store accounts
define(["backbone"], 
    function(Backbone){
	return Backbone.Model.extend({
		// Setup som default data
        defaults: {
            name: null,
            amount: null,
            accountType: null,
            createDate: new Date()
        },
        validation: {
            name: [
                { required: true, msg: "* Please enter name for account" },
                { rangeLength: [3, 20], msg: "* Please choose a name between 3-20 characters"},
                { pattern: "^[a-zåäöA-ZÅÄÖ ]*$", msg: "* Please enter valid characters (a-zåäöA-ZÅÄÖ0-9 )"}
            ],
            amount: [
                { required: true, msg: "* Please enter deposit amount" },
                { range: [1, 100000], msg: "* Minimum is $1 and max is $100.000"},
                { pattern: "^[0-9]*$", msg: "* Please enter valid characters (0-9)"}
            ]
        }
    });
});
