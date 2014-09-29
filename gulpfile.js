var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});
var superstatic = require('superstatic');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');

/*  Config for your environment to superstatic.json */

gulp.task('ss', function() {
  new superstatic({
    config: './superstatic.json'
  })
  .listen();
});

gulp.task('bs', function() {
  browserSync.init(null, {
    files: '*.html',
    proxy: 'localhost:3474',
    notify: true,
    xip: false
  });
});

gulp.task('server', function() {
  runSequence(
    'ss',
    'bs'
  );
});

gulp.task('default', ['server']);
