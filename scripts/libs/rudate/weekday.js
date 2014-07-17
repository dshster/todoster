/* global define */

define(function() {
	'use strict';

	var weekdays = [
		'понед|1',
		'вторн|2',
		'сред|3',
		'четв|4',
		'пятн|5',
		'субб|6',
		'воскр|7',
	];

	var expression = new RegExp(weekdays.map(function(item) {
		return '(' + item.split('|')[0] + ')';
	}).join('|'), 'g');

	return function(body, date) {
		var todayofweek = date.day(),
		    matches = body.match(expression);

		if (matches) {
			weekdays.forEach(function(pairs, key) {
				var pair = pairs.split('|');

				if (0 === pair.indexOf(matches.toString())) {
					var weekday = pair[1];
					// если запрашиваемый день раньше текущего - прибавляем неделю
					if (todayofweek >= weekday) {
						date.day(parseInt(weekday, 10) + 7);
					} else {
						date.day(parseInt(weekday, 10));
					}
				}
			});
		}

		return date;
	}
});

