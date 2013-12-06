define([ "backbone","jquery","underscore","jade!templates/nav"],
	function(Backbone, jquery, underscore, template){
	return Backbone.View.extend({
		template: template,
		render: function()
		{ 
		    this.$el.html(this.template); 
		    return this; 
		},
		setSection: function(sectionid){
			this.$(".active").removeClass('active');
			this.$("."+sectionid).addClass('active');
		}
	});
});