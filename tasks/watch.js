var gulp = require("gulp"),
  sass = require("gulp-sass");

gulp.task("watch", function() {
  gulp.watch('./app/css/**/*.scss',['sass']);
  gulp.watch('./app/js/**/*.coffee',['coffee']);
  gulp.watch('./app/html/**/*.html',['html']);
});
