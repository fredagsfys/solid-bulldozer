define([ "backbone","jquery","underscore"],
	function(Backbone, jquery, underscore){
	return Backbone.View.extend({
		render: function(view){
		    this.$el.empty();
		    view.render().el;    
			return this;
		}
	});
});