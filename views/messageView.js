define(['backbone', 'jquery', 'underscore', 'jade!templates/message'], 
  function(Backbone, jquery, underscore, template){
    return Backbone.View.extend({
        targetElement: '.container',
        tagName: 'div', 
        className: 'flashMessage',        
     
        defaultMessages: {
            'success': 'Success!',
            'error': 'Sorry! An error occurred in the process',
            'warning': 'Are you sure you want to take this action?',
            'information': 'An unknown event occurred'
        }, 
     
        cssClasses: {
            'success': 'alert-success',
            'error': 'alert-danger',
            'warning': 'alert-warning',
            'information': 'alert-warning'
        }, 
     
        events: {
            "click" : "closeNotification" //,
        },
     
        automaticClose: true, 
     
        initialize: function(options){
     
            // defaults
            var type = 'information';
            var text = this.defaultMessages[type]; 
            var target = this.targetElement; 
     
            // if any options were set, override defaults
            if(options && options.hasOwnProperty('type'))
                type = options.type;
            if(options && options.hasOwnProperty('text'))
                text = options.text; 
            if(options && options.hasOwnProperty('target')) 
                target = options.target;
     
            if(options && options.hasOwnProperty('automaticClose'))
            this.automaticClose = options.automaticClose;
     
            // is message already displayed in view? if yes, don't show again
            if($('.flashMessage:contains('+text+')').length === 0) { 
                this.render(type, text, target);
            }
     
        },
     
        render: function(type, text, target){
            var self = this;
            this.$el.addClass(this.cssClasses[type]);
            this.$el.text(text);
            this.$el.prependTo(this.targetElement);
     
            // Automatically close after set time. also closes on click
            if(this.automaticClose) {
                setTimeout(function(){
                    self.closeNotification();
                }, 3000);
            }
        },
     
        closeNotification: function() {
     
            var self = this;
     
            $(this.el).fadeOut(function() {
                self.unbind(); 
                self.remove(); 
            });
        }
 
    });
});
