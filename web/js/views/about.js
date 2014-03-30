define([
	'marionette',
    'text!templates/about.html'
],
function(Marionette, about_template){
    var AboutView = Marionette.ItemView.extend({
    	initialize: function(){

    	},
    	render: function(){
    		this.$el.append(about_template);
    	}
        //template: about_template
    });
    return AboutView;
});