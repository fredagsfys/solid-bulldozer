define([ "backbone","jquery","underscore","jade!templates/main", 'views/shared/navview', 'views/shared/contentview'],
	function(Backbone, jquery, underscore, template, NavView, ContentView){
	return Backbone.View.extend({
		template: template,
		initialize: function(){
			this.navView = new NavView();
            this.contentView = new ContentView();
		},
		render: function(){
			this.$el.html(template);
			this.$(".navbar-collapse").append(this.navView.render().el);
			this.$(".content").append(this.contentView.el);

			return this;
		},
		show: function(view, sectionid){
			this.contentView.render(view);
			this.navView.setSection(sectionid);
		}
	});
});