define(["backbone"], function(Backbone){
	return Backbone.Model.extend({
        defaults: {
            name: null,
            amount: 0,
            accountType: null,
            createDate: function(){ return new Date(); }
        },
        initialize: function(){
        }
    });
});
