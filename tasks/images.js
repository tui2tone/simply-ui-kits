var gulp = require("gulp");

gulp.task("images", function() {
  gulp.src(['./app/images/**/*'])
    .pipe(gulp.dest('./public/images/'))
    .pipe(browserSync.stream())
});
