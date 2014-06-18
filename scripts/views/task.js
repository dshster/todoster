/* global define, $ */

define([
	'underscore',
	'backbone',
	'text!templates/task.html'
], function(_, Backbone, tplTask) {
	'use strict';

	return Backbone.View.extend({
		tagName: 'li',
		template: _.template(tplTask),

		events: {
			'change .todo__input--done': 'done'
		},

		initialize: function() {},

		done: function() {
			this.model.toggleDone();
		},

		build: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});
});
