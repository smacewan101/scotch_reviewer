define([
	'marionette',
    'text!templates/navbar.html'
],
function(Marionette, navbar_template){
    var NavbarView = Marionette.ItemView.extend({
        render: function(){
        	this.$el.append(navbar_template);
        },

        events: {
        	"click a": "toggleActive"
        },

        toggleActive: function(e){
        	this.$el.find('li.active').removeClass('active');
        	$(e.currentTarget).parent('li').addClass('active');
        }
    });
    return NavbarView;
});