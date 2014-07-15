/* global define */

define(function() {
	'use strict';

	var numerals = [
		'одиннадцать|11',
		'двенадцать|12',
		'тринадцать|13',
		'четырнадцать|14',
		'пятнадцать|15',
		'шестнадцать|16',
		'семнадцать|17',
		'восемнадцать|18',
		'девятнадцать|19',
		'двадцать|20',
		'тридцать|30',
		'сорок|40',
		'пятьдесят|50',
		'десять|10',
		'девять|9',
		'восемь|8',
		'семь|7',
		'шесть|6',
		'пять|5',
		'четыре|4',
		'три|3',
		'два|2',
		'один|1',
		'ноль|0'
	];

	var expression = new RegExp(numerals.map(function(item) {
		return '(' + item.split('|')[0] + ')';
	}).join('|'), 'g');

	return function(body) {
		var matches = body.match(expression);
		if (matches) {
			numerals.forEach(function(pairs) {
				var pair = pairs.split('|');

				matches.forEach(function(numeric) {
					if (numeric == pair[0]) {
						body = body.replace(numeric, pair[1]);
					}
				});
			})
		}

		return body;
	};
});
