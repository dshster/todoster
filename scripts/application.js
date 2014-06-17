/* global define */

define([
	'backbone',
	'collections/list',
	'views/todoster',
	'routers/router'
], function(Backbone, List, View, Router) {
	'use strict';

	new Router();
	Backbone.history.start();
});
