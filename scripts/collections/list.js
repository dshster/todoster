/* global define */

define([
	'backbone',
	'storage',
	'models/task'
], function(Backbone, Storage, Task) {
	'use strict';

	var List = Backbone.Collection.extend({
		model: Task,

		localStorage: new Storage('todoster')
	});

	return new List();
});
