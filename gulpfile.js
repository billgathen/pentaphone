var gulp = require('gulp');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');
var browserify = require('browserify');
var notify = require('gulp-notify');

var bundler = watchify(browserify('./src/js/app.jsx', watchify.args));
bundler.transform('reactify');
bundler.on('update', bundle);

gulp.task('watch', [ 'html', 'styles' ], function() {
  gulp.watch('src/html/**/*.html', ['html']);
  gulp.watch('src/styles/**/*.scss', ['styles']);
  gulp.watch('src/js/**/*', function() { bundle(); });
});

function bundle() {
  return bundler.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
    .pipe(sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest('./dist/js'))
    .pipe(notify({ message: 'JS bundled' }));
}

gulp.task('html', function() {
  gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist'))
    .pipe(notify({ message: 'HTML copied' }));
});

gulp.task('styles', function() {
  gulp.src('./src/styles/*')
    .pipe(gulp.dest('./dist/styles'))
    .pipe(notify({ message: 'Styles copied' }));
});
