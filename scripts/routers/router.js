/* global define */

define([
	'backbone'
], function(Backbone) {
	'use strict';

	return Backbone.Router.extend({
		routes: {
			'*actions': 'route'
		},

		route: function(action) {
		}
	});
});
