/* global require */

'use strict';

require.config({
	baseUrl: 'scripts',

	paths: {
		jquery: 'libs/jquery',
		underscore: 'libs/underscore',
		text: 'libs/text',
		backbone: 'libs/backbone',
		storage: 'libs/localStorage',
		moment: 'libs/moment/moment',
		rumoment: 'libs/moment/ru',
		rudate: 'libs/rudate'
	},

	shim: {
		backbone: {
			exports: 'backbone'
		},
		rumoment: ['moment']
	},

	deps: ['bootstrap']
});
