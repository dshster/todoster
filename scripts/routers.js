'use strict';

define(['backbone'], function(Backbone) {
	'use strict';

	return Backbone.Router.extend({
		routes: {
			'': 'home',
			'about': 'about',
			'contacts': 'contacts',
		},

		home: function() {
			console.log(
				'home'
			);
		},

		about: function() {
			console.log(
				'about'
			);
		},

		contacts: function() {
			console.log(
				'contacts'
			);
		}
	});
});
