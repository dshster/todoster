/* global define */

define([
	'backbone',
	'models/task'
], function(Backbone, Task) {
	'use strict';

	return Backbone.Collection.extend({
		model: Task

	});
});
