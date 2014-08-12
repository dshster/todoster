/* global define */

define(function() {
	'use strict';

	var ampm = ['дня|pm', 'вечера|pm', 'вечером|pm', 'ночи|am', 'утра|am', 'утром|am'],
	    expression = new RegExp(ampm.map(function(item) {
			return '(' + item + ')';
		}).join('|'), 'g');

	return function(body) {
		var matches = body.match(expression);

		if (matches) {
			return ampm.map(function(item){
				return 0 === item.split('|')[0].indexOf(matches) ? item.split('|')[1] : null;
			}).join('');
		}
	};
});
