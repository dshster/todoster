/* global define, require, moment */

define(function(require) {
	'use strict';

	require('moment');

	var body = 'Завтра в десять ноль пять придти в офис'.toLowerCase(),
	    date = moment();

	body = require('libs/rudate/numerals')(body) || body;

console.log(
	body,
	require('libs/rudate/time')(body, date).format('llll')
);


});
