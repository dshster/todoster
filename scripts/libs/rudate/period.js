/* global define  */

define(function() {
	'use strict';

	var period = '(дней|лет|нед\\S+|год\\S+|мес\\S+|день|дня|час\\S+|мин\\S+)',
	    before = 'назад',
	    after = 'через',
	    expbefore = new RegExp(['(\\d{1,2}\\s)*', period, '\\s(назад)'].join(''), 'g'),
	    expafter = new RegExp(['(через)\\s', '(\\d{1,2}\\s)*', period].join(''), 'g');

/*
console.log(
	'через 2 месяца в 3 часа дня у Маши день рождения'.match(
		new RegExp('(через)\\s(\\d{1,2}\\s)*(год|дней|мес)', 'g')
	),
	'3 месяца назад в 3 часа дня у Маши день рождения'.match(
		new RegExp('(\\d{1,2}\\s)*(год|дней|дня|нед\\S+|мес\\S+)\\s(назад)', 'g')
	)
)
*/

	return function(body, data) {
		var matches = body.match(expafter) || body.match(expbefore);

		if (0 <= matches.toString().indexOf(before)) {
console.log(
	'before', matches
);

		} else if (0 <= matches.toString().indexOf(after)) {
console.log(
	'after', matches
);

		}


	};
});
