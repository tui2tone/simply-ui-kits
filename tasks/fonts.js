var gulp = require("gulp");

gulp.task("fonts", function() {
  gulp.src(['./app/fonts/*'])
    .pipe(gulp.dest('./public/fonts/'))
    .pipe(browserSync.stream())
  return gulp.src(['./node_modules/font-awesome/fonts/*'])
    .pipe(gulp.dest('./public/fonts/'))
    .pipe(browserSync.stream())
});
