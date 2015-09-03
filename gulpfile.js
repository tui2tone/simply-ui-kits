var gulp = require("gulp")
    browserSync = require('browser-sync').create(),
    requireDir = require('require-dir'),
    tasks = requireDir('./tasks'),
    runSequence = require('run-sequence');

gulp.task('dev', function() {
  return runSequence('coffee',['style','theme'],'html','dev-server', 'watch');
});
