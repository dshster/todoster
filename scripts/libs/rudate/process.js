/* global define, require, moment */

define(function(require) {
	'use strict';

	require('moment');

	var body = 'Завтра в десять ноль пять утра придти в офис'.toLowerCase(),
	    date = moment();

	var numerals = require('libs/rudate/numerals');

	body = numerals(body) || body;

console.log(body);

});
