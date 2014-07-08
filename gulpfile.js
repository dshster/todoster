/* global require, console */
'use strict';

var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    rename = require('gulp-rename'),
    filesize = require('gulp-filesize'),
    autoprefixer = require('autoprefixer-stylus'),
    csso = require('csso-stylus');

var preferences = require('./preferences.json');

function stylusCompile(minify) {
	var plugins = [autoprefixer('last 2 versions', 'ie 10', 'opera 12')];

	if (true === minify) {
		plugins.push(csso());
	}

	return gulp.src(preferences.styles.application)
	.pipe(stylus({
		use: plugins
	}))
	.on('error', console.log)
	.pipe(rename(preferences.styles.compile.name))
	.pipe(filesize())
	.pipe(gulp.dest(preferences.styles.compile.path));
}

gulp.task('watch', function() {
	var watcher = gulp.watch(preferences.styles.watch, function() {
		return stylusCompile(false);
	});

	watcher.on('change', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
});

gulp.task('default', function() {
	return stylusCompile(true);
});
