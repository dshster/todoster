/* global define, $ */

define([
	'jquery',
	'backbone',
	'collections/list',
	'views/task',
	'constants',
	'rudate',
	'calendar'
], function($, Backbone, List, TaskView, Constants, rudate) {
	'use strict';

	var $list = $('.todoster__list'),
	     dateformat = 'DD.MM.YYYY HH:mm',
	     enterTimeout;

	return Backbone.View.extend({
		el: '.todoster',

		events: {
			'keypress .input--task': 'enter',
			'paste .input--task': 'enter',
			'submit .form': 'submit'
		},

		initialize: function() {
			this.$input = $('.input--task', this.$el);
			this.$input.prop('placeholder', Constants.placeholders[Math.round(Math.random() * Constants.placeholders.length + 1)]);
			this.$calendar = $('.input--calendar', this.$el);
			this.$calendar.val(moment().format(dateformat));
			this.$calendar.datetimepicker({
				lang: 'ru',
				format: 'd.m.Y H:i',
				timepicker: true,
				startDate: moment().format(dateformat)
			});
			this.$calendar.on('change', function(event, flag) {
				var $calendar = $(this);

				if ('autodate' == flag) {
					$calendar.addClass('input--flash');

					setTimeout(function() {
						$calendar.removeClass('input--flash');
					}, 50);
				}
			});

			this.listenTo(List, 'add', this.createEvent);
			this.listenTo(List, 'all', this.buildEvent);

			List.fetch();
		},

		createEvent: function(task) {
			var view = new TaskView({ model: task });

			$list.prepend(view.build().el);
		},

		enter: function(event) {
			var controller = this;
			clearTimeout(enterTimeout);

			if (0 < event.which || 'paste' === event.type) {
				enterTimeout = window.setTimeout(function() {
					var date = rudate(controller.$input.val());

					if (60 <= Math.abs(date.diff(moment()))) {
						controller.$calendar
							.val(date.format(dateformat))
							.trigger('change', ['autodate']);
					}
				}, 500);
			}
		},

		submit: function(event) {
			var controller = this,
			    $task = controller.$input;

		    if (0 < $task.val().length) {
				List.create({
					caption: $task.val(),
					date: moment(controller.$calendar.val(), dateformat)
				});
				$task.val('');
				controller.$calendar.val(moment().format(dateformat));
		    }

			event.preventDefault();
		}
	});
});
