var gulp = require('gulp'),
    fileinclude = require('gulp-file-include');

gulp.task('html', function() {

  // Copy Lib to Public
  gulp.src(['./node_modules/jquery/**/*',]).pipe(gulp.dest('./public/lib/jquery'))
  gulp.src(['./node_modules/bootstrap/**/*',]).pipe(gulp.dest('./public/lib/bootstrap'))
  gulp.src(['./node_modules/font-awesome/**/*',]).pipe(gulp.dest('./public/lib/font-awesome'))
  gulp.src(['./node_modules/chartist/**/*',]).pipe(gulp.dest('./public/lib/chartist'))
  gulp.src(['./node_modules/awesome-bootstrap-checkbox/**/*',]).pipe(gulp.dest('./public/lib/awesome-bootstrap-checkbox'))
  gulp.src(['./node_modules/jquery-match-height/**/*',]).pipe(gulp.dest('./public/lib/jquery-match-height'))
  gulp.src(['./bower_components/checkbox3/**/*',]).pipe(gulp.dest('./public/lib/checkbox3'))
  gulp.src(['./library/datatables/**/*',]).pipe(gulp.dest('./public/lib/datatables'))
  gulp.src(['./bower_components/Ionicons/**/*',]).pipe(gulp.dest('./public/lib/Ionicons'))
  gulp.src(['./bower_components/select2/**/*',]).pipe(gulp.dest('./public/lib/select2'))
  gulp.src(['./bower_components/animate.css/**/*',]).pipe(gulp.dest('./public/lib/animate.css'))
  gulp.src(['./bower_components/jquery.stellar/**/*',]).pipe(gulp.dest('./public/lib/jquery.stellar'))

  return gulp.src(['./app/**/*.html', '!./app/include/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./public/html/'))
    .pipe(browserSync.stream())
});
