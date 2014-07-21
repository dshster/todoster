/* global define */

define(function() {
	'use strict';

	var months = ['янв|0', 'фев|1', 'мар|2', 'апр|3', 'мая|4', 'май|4', 'июн|5', 'июл|6', 'авг|7', 'сен|8', 'окт|9', 'ноя|10', 'дек|11'],
	    expression = new RegExp(months.map(function(item) {
		return '(\\d{1,2})\\s(' + item.split('|')[0] + ')|(' + item.split('|')[0] + ')';
	}).join('|'), 'g');

	return function(body, date) {
		var todaymonth = date.month(),
		    matches = body.match(expression);

		if (matches) {
			matches = matches.toString().split(' ');

			if (2 === matches.length) {
				parseMounths(matches[1]);
				date.date(matches[0]);
			} else if (1 === matches.length) {
				parseMounths(matches.toString());
			}
		}

		function parseMounths(month) {
			months.forEach(function(pairs) {
				var pair = pairs.split('|');

				if (0 === pair.indexOf(month)) {
					var number = pair[1];

					if (todaymonth > number) {
						// если запрашиваемый месяц раньше текущего - переносим на год
						date.month(parseInt(number, 10) + 12);
					} else {
						date.month(parseInt(number, 10));
					}
				}
			});
		}

		return date;
	};
});

