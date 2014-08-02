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
			'keypress .todoster__input': 'enter'
		},

		initialize: function() {
			this.$input = $('.todoster__input', this.$el);
			this.$calendar = $('.todoster__calendar', this.$el);
			this.$calendar.val(moment().format(dateformat));
			this.$calendar.datetimepicker({
				lang: 'ru',
				format: 'd.m.Y H:i',
				timepicker: true,
				//startDate: moment().format(dateformat)
			});

			this.listenTo(List, 'add', this.createEvent);
			this.listenTo(List, 'all', this.buildEvent);

			List.fetch();
		},

		createEvent: function(task) {
			var view = new TaskView({ model: task });

			$list.append(view.build().el);
		},

		enter: function(event) {
			var controller = this;

			if (event.keyCode === Constants.ENTER_KEY) {
				List.create({
					caption: controller.$input.val(),
					date: moment(controller.$calendar.val(), dateformat)
				});

				controller.$input.val('');
			} else {
				clearTimeout(enterTimeout);

				enterTimeout = window.setTimeout(function() {
					var date = rudate(controller.$input.val());

					if (date) {
						controller.$calendar.val(date.format(dateformat));
					}
				}, 500);
			}
		}
	});
});
