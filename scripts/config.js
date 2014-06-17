/* global require */

'use strict';

require.config({
	baseUrl: 'scripts',

	paths: {
		jquery: 'libs/jquery',
		underscore: 'libs/underscore',
		text: 'libs/text',
		backbone: 'libs/backbone',
		storage: 'libs/localStorage'
	},

	shim: {
		backbone: {
			exports: 'backbone'
		}
	},

	deps: ['bootstrap']
});
