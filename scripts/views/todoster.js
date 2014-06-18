/* global define, $ */

define([
	'underscore',
	'backbone',
	'collections/list',
	'views/task',
	'constants'
], function(_, Backbone, List, TaskView, Constants) {
	'use strict';

	var $list = $('.todo__list');

	return Backbone.View.extend({
		el: '.todoster',

		events: {
			'keypress .input__create': 'create',
		},

		initialize: function() {
			this.$input = $('.input__create', this.$el);

			this.listenTo(List, 'add', this.createEvent);
			this.listenTo(List, 'all', this.buildEvent);

			List.fetch();
		},

		render: function() {
		},

		buildEvent: function(event, parameters) {
console.log(
	event, parameters
);

		},

		createEvent: function(task){
			var view = new TaskView({ model: task });

			$list.append(view.build().el);
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
