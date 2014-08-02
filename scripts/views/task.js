/* global define, $ */

define([
	'underscore',
	'backbone',
	'text!templates/task.html',
	'rumoment'
], function(_, Backbone, tplTask) {
	'use strict';

	return Backbone.View.extend({
		tagName: 'div',
		template: _.template(tplTask),

		events: {
			'change .list__item_done': 'done',
			'click .controls--delete': 'delete'
		},

		initialize: function() {
			this.model.on('change',  this.render, this);
			this.model.on('destroy', this.remove, this);
		},

		delete: function() {
			this.model.delete();
		},

		done: function() {
			this.model.toggleDone();
		},

		build: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});
});
