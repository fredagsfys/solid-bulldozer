define(['backbone', 'underscore', 'jade!templates/loan'], 
	function(Backbone, underscore, template){
    return Backbone.View.extend({
        template: template,
        initialize: function(){
        	$('.currentPage').html("<h3>Stock market shares</h3>");
        },
        render: function(){
            this.$el.html(this.template);
            return this;
        }
    });
});