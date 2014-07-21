/* global define */

define(function() {
	'use strict';

	var ampm = [
		'дня|pm',
		'вечера|pm',
		'ночи|am',
		'утра|am'
	];

	var expression = new RegExp(ampm.map(function(item) {
		return '(' + item + ')';
	}).join('|'), 'g');

	return function(body, date) {
		var matches = body.match(expression),
		    hours = date.hours();

		if (matches) {
			return ampm.map(function(item){
				return 0 === item.split('|')[0].indexOf(matches) ? item.split('|')[1] : null;
			}).join('');
		}
	}
});
