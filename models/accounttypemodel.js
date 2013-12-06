define(["backbone"], 
    function(Backbone){
	return Backbone.Model.extend({
        defaults: {
            Private: "5",
            Service: "5",
            Captial: "12",
            Worldnature: "22"
        }
    });
});
