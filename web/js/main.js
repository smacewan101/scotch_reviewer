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
		bootstrap: 	'./thirdpary/bootstrap.min',
	//VIEWS
		navbar_view: './views/navbar'
	}
});

require(['jquery', 'underscore', 'backbone', 'marionette', 'navbar_view'], function($, _, Backbone, Marionette, NavbarView){
	var Scotch = Scotch || {};

	Scotch.App = new Backbone.Marionette.Application();
	var NavbarView = new NavbarView();

	Scotch.App.addRegions({
		navRegion: "#navbar",
  		contentRegion: "#main"
	});

	Scotch.App.addInitializer(function(options){
		//var NavbarView = new NavbarView();
		Scotch.App.navRegion.show(NavbarView);
	});

	Scotch.App.on("initialize:after", function(options){
		if (Backbone.history){
			Backbone.history.start();
		}
	});


	Scotch.App.start();
});