console.log("...LOADING navview.js")
define([ "backbone","jquery","underscore","jade!templates/nav"],function(Backbone, jquery, underscore, template){
	return Backbone.View.extend({
	    
		template: template,
		initialize: function(o){
		},
		render: function()
		{ 
		    this.$el.html(this.template); 
		    return this; 
		}
	});
});