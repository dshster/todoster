/* global define */

define([
	'backbone',
	'views/todoster',
	'routers/router'
], function(Backbone, View, Router) {
	'use strict';

	new Router();
	Backbone.history.start();

	new View();
});
