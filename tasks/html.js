var gulp = require('gulp'),
    fileinclude = require('gulp-file-include');

gulp.task('html', function() {

  // Copy Lib to Public
  gulp.src(['./node_modules/jquery/**/*',]).pipe(gulp.dest('./public/lib/jquery'))
  gulp.src(['./node_modules/bootstrap/**/*',]).pipe(gulp.dest('./public/lib/bootstrap'))
  gulp.src(['./node_modules/font-awesome/**/*',]).pipe(gulp.dest('./public/lib/font-awesome'))
  gulp.src(['./node_modules/chartist/**/*',]).pipe(gulp.dest('./public/lib/chartist'))

  return gulp.src(['./app/**/*.html', '!./app/include/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./public/html/'))
    .pipe(browserSync.stream())
});
