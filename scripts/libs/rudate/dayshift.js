/* global define */

define(function() {
	'use strict';

	var dayshift = [
		'вчера|-1',
		'позавчера|-2',
		'сегодня|0',
		'завтра|1',
		'послезавтра|2'
	];

	var expression = new RegExp(dayshift.map(function(item) {
		return '(' + item.split('|')[0] + ')';
	}).join('|'), 'g');

	return function(body, date) {
		var matches = body.match(expression);
		if (matches) {
			dayshift.forEach(function(pairs) {
				var pair = pairs.split('|');

				matches.forEach(function(day) {
					if (day == pair[0]) {
						var shift = pair[1];

						if (-1 === Math.sign(shift)) {
							date.subtract(Math.abs(shift), 'day');
						} else if (1 === Math.sign(shift)) {
							date.add(Math.abs(shift), 'day');
						}
					}
				});
			});
		}

		return date;
	}
});
