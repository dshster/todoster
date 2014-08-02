/* global require */

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
		rudate: 'libs/rudate/process',
		calendar: 'libs/calendar/jquery.datetimepicker'
	},

	shim: {
		backbone: {
			exports: 'backbone'
		},
		rumoment: ['moment'],
		calendar: ['jquery']
	},

	deps: ['bootstrap']
});
