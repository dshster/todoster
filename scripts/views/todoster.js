/* global define, $ */

define([
	'underscore',
	'backbone',
	'collections/list',
	'views/task',
	'constants'
], function(_, Backbone, List, TaskView, Constants) {
	'use strict';

	return Backbone.View.extend({
		el: '.todoster',

		events: {
			'keypress .input__create': 'create'
		},

		initialize: function() {
			this.$input = $('.input__create', this.$el);

			this.listenTo(List, 'add', this.createEvent);
		},

		render: function() {
		},

		createEvent: function(task){
			var view = new TaskView({ model: task });


console.log(
	view
);

		},

		create: function(event) {
			if (event.keyCode === Constants.ENTER_KEY) {
				List.create({
					caption: this.$input.val(),
					date: new Date()
				});

				this.$input.val('');
			}
		}
	});
});
