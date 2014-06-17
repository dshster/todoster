/* global define, $ */

define([
	'underscore',
	'backbone',
	'text!templates/task.html'
], function(_, Backbone, tplTask) {
	'use strict';

	return Backbone.View.extend({
		tagName: 'li.todo__item',

		initialize: function() {},
		render: function() {}
	});
});
