define(['backbone', 'jquery', 'underscore', 'jade!templates/loan'], 
	function(Backbone, jquery, underscore, template){
    return Backbone.View.extend({
        template: template,
        initialize: function(){
        	$('.currentPage').html("<h3>Stock market shares</h3>");
        },
        render: function(){
            this.$el.html(this.template());
            return this;
        }
    });
});