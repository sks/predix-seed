var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
var minify = require('gulp-htmlmin');
var CacheBuster = require('gulp-cachebust');
 
var cachebust = new CacheBuster();


gulp.task('vulcanize', function () {
	return gulp.src('public/elements.html')
        .pipe(vulcanize({
            inlineScripts: true,
            inlineCss: true,
            stripComments: true,
            stripExcludes: true
        }))
        .pipe(minify({
            preserveComments: false,
            collapseWhitespace: true,
            minifyCSS: true,
            compress: true,
            minifyJS: true
        }))
        .pipe(cachebust.resources())
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['vulcanize'], function () {
    return gulp.src('dist/index.html')
        .pipe(cachebust.references())
        .pipe(gulp.dest('dist'));
});