/* global define, TODO */

window.TODO = window.TODO || {};

define(function(require) {
	'use strict';

	var Backbone = require('backbone');

	TODO.Router = require('routers');

	var controller = new TODO.Router();


	Backbone.history.start();
});
