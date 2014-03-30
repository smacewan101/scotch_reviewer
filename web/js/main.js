require.config({
	shim: {
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'marionette': {
			deps: ['backbone'],
			exports: 'Marionette'
		},
		'underscore': {
			deps: ['jquery'],
			exports: '_'
		},
		'bootstrap': ['jquery'],
	},
	paths: {
		jquery: 	'./thirdparty/jquery-1.9.1.min',
		backbone: 	'./thirdparty/backbone-min',
		underscore: './thirdparty/underscore-min',
		marionette: './thirdparty/marionette-min',
		bootstrap: 	'./thirdparty/bootstrap.min',
	//CONTROLLERS
		route_controller: './controllers/routeController',
	//ROUTERS
		app_router: './routers/appRouter',
	//VIEWS
		navbar_view: './views/navbar',
		splash_view: './views/splash',
		about_view: './views/about'
	}
});

require(['jquery', 'underscore', 'backbone', 'marionette', 'navbar_view', 'app_router', 'route_controller'], function($, _, Backbone, Marionette, NavbarView, AppRouter, RouteController){

	window.Scotch = {};

	Scotch.App = new Backbone.Marionette.Application();
	var NavbarView = new NavbarView();
	var RouteController = new RouteController();
	var AppRouter = new AppRouter({
		controller: RouteController
	});

	Scotch.App.addRegions({
		navRegion: "#navbar",
  		contentRegion: "#main"
	});

	Scotch.App.addInitializer(function(options){
		Scotch.App.navRegion.show(NavbarView);
	});

	Scotch.App.on("initialize:after", function(options){
		if (Backbone.history){
			Backbone.history.start();
		}
	});

	Scotch.App.start();
});