/* global define */

define(function() {
	'use strict';

	var times = [
		'\\d{1,2} \\d{2}',
		'\\d{1,2}ч|\\d{1,2} ч',
		'в \\d{1,2}:\\d{2}',
		'в \\d{1,2}.\\d{2}',
		'в \\d{1,2} \\d{2}',
		'в \\d{1,2} \\d{1} \\d{1}',
		'\\d{1,2} \\d{1} \\d{1}',
		'в\\d{1,2}:\\d{1,2}',
		'в\\d{1,2}.\\d{1,2}',
		'\\d{2} ми',
		'\\d{2}ми',
		'\\d{1,2} \\d{2}м',
		'в \\d{1,2}',
		'в\\d{1,2}',
		'\\d{1,2}:\\d{1,2}',
	];

	var expression = new RegExp(times.map(function(item) {
		return '(' + item + ')';
	}).join('|'), 'g');

	return function(body, date) {
		var matches = body.match(expression);

		if (1 === matches.length) {
			var digits = matches.toString().match(/\d{1,2}/g);
			if (3 === digits.length) {
				// десять ноль пять, по-военному
				date.hour(digits[0]);
				date.minute(parseInt(digits[1]) + parseInt(digits[2]));
			} else if (2 === digits.length) {
				date.hour(digits[0]);
				date.minute(digits[1]);
			} else {
				date.hour(digits.toString());
				date.minute(0);
			}
		}

		return date;
	}
});
