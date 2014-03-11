define([
	'marionette',
    'text!templates/navbar.html'
],
function(Marionette, navbar_template){
    var NavbarView = Marionette.ItemView.extend({
        template: navbar_template,
    });
    return NavbarView;
});