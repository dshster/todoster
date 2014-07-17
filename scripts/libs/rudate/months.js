/* global define */

define(function() {
	'use strict';

	var months = [
		'янв|0',
		'фев|1',
		'мар|2',
		'апр|3',
		'мая|4',
		'май|4',
		'июн|5',
		'июл|6',
		'авг|7',
		'сен|8',
		'окт|9',
		'ноя|10',
		'дек|11'
	];

	var expression = new RegExp(months.map(function(item) {
		return '(' + item.split('|')[0] + ')';
	}).join('|'), 'g');

	return function(body, date) {
		var todaymonth = date.month(),
		matches = body.match(expression);

		if (matches) {
			months.forEach(function(pairs, key) {
				var pair = pairs.split('|');

				if (0 === pair.indexOf(matches.toString())) {
					var month = pair[1];

					if (todaymonth > month) {
						// если запрашиваемый месяц раньше текущего - переносим на год
						date.month(parseInt(month, 10) + 12);
					} else {
						date.month(parseInt(month, 10));
					}

					// доделать определение даты или вынести это в отдельный модуль
				}
			});
		}

		return date;
	}
});

