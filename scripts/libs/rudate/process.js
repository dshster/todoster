/* global define, require, moment */

define(function(require) {
	'use strict';

	require('moment');

	var body = 'Через пять дней в 14:00'.toLowerCase(),
	    date = moment();

	body = require('libs/rudate/numerals')(body) || body;
	date = require('libs/rudate/time')(body, date) || date;
	date = require('libs/rudate/dayshift')(body, date) || date;
	date = require('libs/rudate/weekday')(body, date) || date;
	date = require('libs/rudate/months')(body, date) || date;
	date = require('libs/rudate/period')(body, date) || date;

console.log(
	body, date.format('llll')
);


});
