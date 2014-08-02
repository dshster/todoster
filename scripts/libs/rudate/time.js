/* global define */

define(function(require) {
	'use strict';

	var ampm = require('libs/rudate/ampm'),
	    times = [
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

		if (matches && 1 === matches.length) {
			var digits = matches.toString().match(/\d{1,2}/g);

			if (3 === digits.length) {
				// десять ноль пять, по-военному
				date.hour(digits[0]);
				date.minute(parseInt(digits[1], 10) + parseInt(digits[2], 10));
			} else if (2 === digits.length) {
				date.hour(digits[0]);
				date.minute(digits[1]);
			} else {
				date.hour(digits.toString());
				date.minute(0);
			}

			// Если дата до полудня, а в условии после - прибавляем 12 часов
			// TODO: Если время меньше текущего - прибавляем 12 или 24
			if ('pm' === ampm(body, date)) {
				date.hour(date.hour() + 12);
			}
		}

		return date;
	};
});
