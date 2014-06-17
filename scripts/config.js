/* global require */

'use strict';

require.config({
	baseUrl: 'scripts',

	paths: {
		jquery: 'libs/jquery',
		underscore: 'libs/underscore',
		backbone: 'libs/backbone',
	},

	shim: {
		backbone: {
			exports: 'backbone'
		}
	},

	deps: ['bootstrap']
});
