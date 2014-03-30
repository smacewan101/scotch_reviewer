define([
	'marionette',
	'splash_view',
	'about_view'
],
function(Marionette, SplashView, AboutView){
	var RouteController = Marionette.Controller.extend({

		splash: function(){
			var view = new SplashView();
			Scotch.App.contentRegion.show(view);
		},

		about: function(){
			var view = new AboutView();
			Scotch.App.contentRegion.show(view);
		}
	});
	return RouteController;

});
