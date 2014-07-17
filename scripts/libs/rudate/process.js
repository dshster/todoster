/* global define, require, moment */

define(function(require) {
	'use strict';

	require('moment');

	var body = '24 августа в десять пятнадцать придти в офис'.toLowerCase(),
	    date = moment();

	body = require('libs/rudate/numerals')(body) || body;
	date = require('libs/rudate/time')(body, date) || date;
	date = require('libs/rudate/dayshift')(body, date) || date;
	date = require('libs/rudate/weekday')(body, date) || date;
	date = require('libs/rudate/months')(body, date) || date;

console.log(
	body, date.format('llll')
);


});