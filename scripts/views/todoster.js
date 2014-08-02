/* global define, $ */

define([
	'jquery',
	'backbone',
	'collections/list',
	'views/task',
	'constants',
	'rudate'
], function($, Backbone, List, TaskView, Constants, Rudate) {
	'use strict';

	var $list = $('.todoster__list'),
	    enterTimeout;

	return Backbone.View.extend({
		el: '.todoster',

		events: {
			'keypress .todoster__input': 'enter'
		},

		initialize: function() {
			this.$input = $('.todoster__input', this.$el);

			this.listenTo(List, 'add', this.createEvent);
			this.listenTo(List, 'all', this.buildEvent);

			List.fetch();
		},

		createEvent: function(task) {
			var view = new TaskView({ model: task });

			$list.append(view.build().el);
		},

		enter: function(event) {
			var $input = this.$input;

			if (event.keyCode === Constants.ENTER_KEY) {
				List.create({
					caption: $input.val(),
					date: new Date()
				});

				$input.val('');
			} else {
				clearTimeout(enterTimeout);

				enterTimeout = window.setTimeout(function() {
					var date = Rudate($input.val());

console.log(
	date.format('llll'), $input.val()
);

				}, 500);
			}
		}
	});
});
