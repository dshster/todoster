/* global define  */

define(function() {
	'use strict';

	var period = '(дней|лет|нед\\S+|год|год\\S+|мес\\S+|день|дня|час\\S+|мин\\S+)',
	    before = 'назад',
	    after = 'через',
	    experiod = new RegExp(period, 'g'),
	    expbefore = new RegExp(['(\\d{1,3}\\s)*', period, '\\s(' + before + ')'].join(''), 'g'),
	    expafter = new RegExp(['(' + after + ')\\s', '(\\d{1,3}\\s)*', period].join(''), 'g');

	return function(body, data) {
		var matches = body.match(expafter) || body.match(expbefore);

		if (matches) {
			var periodmatch = matches.toString().substr(matches.toString().search(experiod)),
			    numeric = matches.toString().match(/(\d{1,3})*/g).filter(function(digit) {
					return !!digit ? digit : false;
				}).toString() || 1,
			    direction = 0;


			if (0 <= matches.toString().indexOf(before)) {
				direction = -1;
			} else if (0 <= matches.toString().indexOf(after)) {
				direction = 1;
			}

			if (-1 !== periodmatch.indexOf('лет') || -1 !== periodmatch.indexOf('год')) {
				data.add(numeric * direction, 'y');
			} else if (-1 !== periodmatch.indexOf('нед')) {
				data.add(numeric * direction, 'w');
			} else if (-1 !== periodmatch.indexOf('мес')) {
				data.add(numeric * direction, 'M');
			} else if (-1 !== periodmatch.indexOf('дней') || -1 !== periodmatch.indexOf('день') || -1 !== periodmatch.indexOf('дня')) {
				data.add(numeric * direction, 'd');
			} else if (-1 !== periodmatch.indexOf('час')) {
				data.add(numeric * direction, 'h');
			} else if (-1 !== periodmatch.indexOf('мин')) {
				data.add(numeric * direction, 'm');
			}
		}
	};
});
