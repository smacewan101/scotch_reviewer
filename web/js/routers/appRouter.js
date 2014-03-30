define([
	'marionette'
	],
function(Marionette){
	var AppRouter = Marionette.AppRouter.extend({

		appRoutes: {
			'': 'splash',
			'about': 'about'
		}
	});
	return AppRouter;

});
