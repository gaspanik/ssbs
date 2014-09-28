var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
  });
var superstatic = require('superstatic');
var browserSync = require('browser-sync');

/*  Config for your environment */

ss = superstatic({
  config:'superstatic.json'
});

ss.listen();

gulp.task('bs', function() {
  browserSync.init(null, {
    files: '*.html',
    proxy: 'localhost:3474',
    notify: true,
    xip: false
  });
});

gulp.task('default', ['bs']);
