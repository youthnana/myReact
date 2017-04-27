var gulp = require('gulp');

var browserify = require('browserify');

var babelify = require('babelify');

var source = require('vinyl-source-stream');

gulp.task('script:build', function() {

	browserify('src/main.js')

		.transform(babelify, {

			presets: ['es2015', 'react']
		})

		.transform(shim)
		
		.bundle()

		.pipe(source('bundle.js'))

		.pipe(gulp.dest('./'));
});

gulp.task('default', ['script:build']);