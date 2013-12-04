define(["backbone"], function(Backbone){
	return Backbone.Model.extend({
        defaults: {
            username: null,
            password: null,
            name: null,
            age: 0,
        },
        initialize: function(){
        }
    });
});
