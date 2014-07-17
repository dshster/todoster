/* global define, require, moment */

define(function(require) {
	'use strict';

	require('moment');

	var body = 'Завтра в десять ноль пять придти в офис'.toLowerCase(),
	    date = moment();

	body = require('libs/rudate/numerals')(body) || body;
	date = require('libs/rudate/time')(body, date) || date;
	date = require('libs/rudate/dayshift')(body, date) || date;

console.log(
	body, date.format('llll')
);


});
