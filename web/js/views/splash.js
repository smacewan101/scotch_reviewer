define([
	'marionette',
    'text!templates/splash.html',
    'bootstrap'
],
function(Marionette, splash_template){
    var SplashView = Marionette.ItemView.extend({
    	events: {
    		"click .nav-tabs a" : "toggleTab",
    		"click .carousel-control" : "rotateCarousel"
    	},

        render: function(){
        	this.$el.append(splash_template);
        	this.$el.find('#scotch-carousel').carousel();
        },

        toggleTab: function(e){
        	e.preventDefault();
        	$node = $(e.currentTarget);
        	this.$el.find('.nav-tabs li.active').removeClass('active');
        	$node.parent('li').addClass('active');
        	show_tab = $node.attr('data-toggle');
        	this.$el.find('.tab-pane').hide();
        	this.$el.find('#'+show_tab).show();
        },

        rotateCarousel: function(e){
        	var direction = $(e.currentTarget).data('slide');
        	this.$el.find('#scotch-carousel').carousel(direction);
        }
    });
    return SplashView;
});