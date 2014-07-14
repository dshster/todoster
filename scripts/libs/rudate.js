/* global define, moment */

define(function(require) {
	'use strict';

	require('rumoment');

	var body = 'Послезавтра в 11 придти в офис'.toLowerCase(),
	    date = moment();

// после обеда
// до обеда
// ночи
// утра
// pm = 12 || 0
//
	var pm = 12;

	    // переделать под регулярки в ()
	var numerals = [' одиннадцать', ' двенадцать', ' тринадцать', ' четырнадцать', ' пятнадцать', ' шестнадцать', ' семнадцать', ' восемнадцать', ' девятнадцать', ' двадцать', ' тридцать', ' сорок', ' пятьдесят', ' десять', ' девять', ' восемь', ' семь', ' шесть', ' пять', ' четыре', ' три', ' два', ' один', ' ноль'],
	    numeric = [' 11', ' 12', ' 13', ' 14', ' 15', ' 16', ' 17', ' 18', ' 19', ' 20', ' 30', ' 40', ' 50', ' 10', ' 9', ' 8', ' 7', ' 6', ' 5', ' 4', ' 3', ' 2', ' 1', ' 0'];

	numerals.forEach(function(item, key) {
		body = body.replace(item, numeric[key]);
	});

	var template = /(\d{1,2})\s(\d{1,2})/g;

	var matches = body.match(expression);
	if (matches) {
		body = body.replace(template, '$1:$2');
	}

	var template = ['вчера', 'позавчера', 'сегодня', 'завтра', 'послезавтра'],
	    shifts = ['-1', '-2', '0', '1', '2'],
	    expression = new RegExp(template.map(function(item) {
				return '(' + item + ')';
			}).join('|'), 'g');

	var matches = body.match(expression);

	if (matches) {
		var shift = shifts[template.indexOf(matches.toString())];

		if (-1 === Math.sign(shift)) {
			date.subtract(Math.abs(shift), 'day');
		} else if (1 === Math.sign(shift)) {
			date.add(Math.abs(shift), 'day');
		}
	}

	var template = ['\\d{1,2}ч|\\d{1,2} ч', 'в \\d{1,2}:\\d{1,2}', 'в\\d{1,2}:\\d{1,2}', '\\d{2} ми', '\\d{2}ми', '\\d{1,2} \\d{2}м', 'в \\d{1,2}', 'в\\d{1,2}', '\\d{1,2}:\\d{1,2}'],
	    expression = new RegExp(template.map(function(item) {
				return '(' + item + ')';
	    }).join('|'), 'g');

	var matches = body.match(expression);

	if (matches) {
		matches = matches.toString().replace('в ', '').replace('в', '').split(':');
		if (2 === matches.length) {
			date.hour((parseInt(matches[0]) + pm) % 24).minute(matches[1]);
		} else if (1 === matches.length) {
			date.hour((parseInt(matches[0]) + pm) % 24);
		}
	}

console.log(
	body,
	date.format('lll')
);

});
