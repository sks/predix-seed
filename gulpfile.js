var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
var minify = require('gulp-htmlmin');
var CacheBuster = require('gulp-cachebust');
var cachebust = new CacheBuster();

const errorHandler = (err) => {
  console.log(err);
  process.exit(1);
}

gulp.task('vulcanize', function () {
  return gulp.src('public/elements.html')
    .pipe(vulcanize({
      inlineScripts: true,
      inlineCss: true,
      stripComments: true,
      stripExcludes: true
    }))
    .on('error', errorHandler)
    .pipe(minify({
      preserveComments: false,
      collapseWhitespace: true,
      minifyCSS: true,
      compress: true,
      minifyJS: true
    })).on('error', errorHandler)
    .pipe(cachebust.resources())
    .on('error', errorHandler)
    .pipe(gulp.dest('./dist'))
    .on('error', errorHandler)
});

gulp.task('default', gulp.series('vulcanize', function () {
  return gulp.src('dist/index.html')
    .pipe(cachebust.references())
    .pipe(gulp.dest('dist'))
    ;
}));
