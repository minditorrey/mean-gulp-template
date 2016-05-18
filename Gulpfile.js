'use strict';

var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var nodemon = require('gulp-nodemon');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var annotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');
var eslint = require('gulp-eslint');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');

// gulp.task  - define a task
// gulp.src   - (source) input files
// gulp.dest  - output files
// gulp.watch - watch files/directories for changes
// *.pipe     - chain actions together

gulp.task('default', ['build', 'watch', 'serve']);

gulp.task('build', ['js', 'css', 'html']);

gulp.task('watch', ['watch.js', 'watch.css']);

gulp.task('serve', function() {
  nodemon({
    script: 'app.js',
    ignore: ['client', 'public', 'Gulpfile.js']
  });
});

gulp.task('watch.lint', function() {
  return gulp.watch('./**/*.js', ['lint'])
});

gulp.task('lint', function() {
  return gulp.src([
    './**/*.js',
    '!bundle.js',
    '!Gulpfile.js',
    '!./node_modules/**',
    '!./public/bower_components/**'
  ])
  .pipe(eslint())
  .pipe(eslint.format());
})


/////// JAVASCRIPT /////////

gulp.task('js', function() {
  return gulp.src('./client/js/**/*.js')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.js'))
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(annotate())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/js'));
});

gulp.task('watch.js', function() {
  return gulp.watch('./client/js/**/*.js', ['js'])
});

//////////// CSS //////////////

gulp.task('css', ['clean.css'], function() {
  return gulp.src(['./client/scss/**/*.scss',
                  './client/scss/**/*.sass'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});


gulp.task('watch.css', function() {
  return gulp.watch('./client/scss/**', ['css'])
});

gulp.task('clean.css', function() {
  return del('./public/css');
});

gulp.task('html', function() {
  return gulp.src('./client/templates/**/*.html')
    .pipe(gulp.dest('./public/templates'));
});
