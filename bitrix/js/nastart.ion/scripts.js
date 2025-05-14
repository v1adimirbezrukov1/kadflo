(function(w) {
	'use strict';

	var app = w.app = {};

	app.NastartSettings = {
		controls: {},
		init: function(initData) {

			// set controls
			app.NastartSettings.controls.tabs   = $(".-tab-btns");
		},
		events: {
			showButton: function(tab){
				app.NastartSettings.controls.tabs.hide().filter('[data-tab-id="'+tab+'"]').show();
			},
		}
	}

})(window);