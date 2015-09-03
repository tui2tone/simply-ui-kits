var gulp = require("gulp"),
  sass = require("gulp-sass");

gulp.task("watch", function() {
  gulp.watch(['./app/**/*.scss', '!./app/themes/**/*'],['style']);
  gulp.watch(['./app/themes/**/*.scss'],['theme']);
  gulp.watch('./app/**/*.coffee',['coffee']);
  gulp.watch('./app/**/*.html',['html']);
});
