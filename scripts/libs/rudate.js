/* global define, moment */

define(function(require) {
	'use strict';

	require('rumoment');

	var body = 'Вчера в шесть сорок позвонить жене'.toLowerCase(),
	    date = moment();

	var numerals = [' одиннадцать', ' двенадцать', ' тринадцать', ' четырнадцать', ' пятнадцать', ' шестнадцать', ' семнадцать', ' восемнадцать', ' девятнадцать', ' двадцать', ' тридцать', ' сорок', ' пятьдесят', ' десять', ' девять', ' восемь', ' семь', ' шесть', ' пять', ' четыре', ' три', ' два', ' один', ' ноль'],
	    numeric = [' 11', ' 12', ' 13', ' 14', ' 15', ' 16', ' 17', ' 18', ' 19', ' 20', ' 30', ' 40', ' 50', ' 10', ' 9', ' 8', ' 7', ' 6', ' 5', ' 4', ' 3', ' 2', ' 1', ' 0'];

	numerals.forEach(function(item, key) {
		body = body.replace(item, numeric[key]);
	});

	var template = ['вчера', 'позавчера', 'сегодня', 'завтра', 'послезавтра'],
	    shifts = ['-1', '-2', '0', '1', '2'],
	    expression = new RegExp(template.map(function(item) {
				return '(' + item + ')';
			}).join('|'), 'g');

	var shift = shifts[template.indexOf(body.match(expression).toString())];

	if (-1 === Math.sign(shift)) {
		date.subtract(Math.abs(shift), 'day');
	} else if (1 === Math.sign(shift)) {
		date.add(Math.abs(shift), 'day');
	}



console.log(
	date.format('lll')
);

});
