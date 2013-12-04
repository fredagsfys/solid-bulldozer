define(['backbone', 'underscore', 'jade!templates/loan'], function(Backbone, underscore, template){
    return Backbone.View.extend({
        el: '.content',

        template: template,

        render: function(){
            $('.currentPage').html("<h3>Loan</h3>");
            this.$el.html(this.template);
            return this;
        }
    });
});