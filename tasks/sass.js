var gulp = require("gulp"),
  sass = require("gulp-sass"),
  notify = require("gulp-notify"),
  plumber = require('gulp-plumber');

gulp.task("sass", function() {
  return gulp.src(['./app/css/**/*.scss','./app/css/**/*.sass'])
    .pipe(plumber({errorHandler: notify.onError(
      {
        title: "SCSS Error: Line <%= error.line %>",
        message: "<%= error.message %>"
      })
    }))
    .pipe(sass().on('error', function(err) { console.log(err) }))
    .pipe(gulp.dest('./public/css/'))
    .pipe(browserSync.stream())
});
