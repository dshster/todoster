/* global define */

define([
	'backbone',
], function(Backbone) {
	'use strict';

	return Backbone.Model.extend({
		defaults: {
			caption: 'Новая задача',
			date: new Date(),
			order: 0,
			done: false
		},

		validate: function(attributes) {
			if (0 > attributes.order) {
				return 'invalid order';
			}
		},

		toggleDone: function() {
			this.save({
				done: !this.get('done')
			});
		},

		delete: function() {
			this.destroy();
		}
	});
});
