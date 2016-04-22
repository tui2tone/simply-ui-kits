var gulp = require("gulp"),
  coffee = require("gulp-coffee"),
  sass = require("gulp-sass"),
  notify = require("gulp-notify"),
  plumber = require('gulp-plumber'),
  concat = require('gulp-concat');

gulp.task("build", ['buildjs', 'buildcss']);

gulp.task("buildjs", function() {
  return gulp.src(['./app/include/**/*.coffee','./app/uikits/**/*.coffee','./app/elements/**/*.coffee', './app/ui.coffee'])
    .pipe(plumber({errorHandler: notify.onError(
      {
        title: "Coffee Error: Line <%= error.location.first_line %>",
        message: "<%= error.name %>:<%= error.message %>"
      })}))
    .pipe(coffee({bare: true}))
    .pipe(concat('simply-kit.js'))
    .pipe(gulp.dest('./build/js/'))
});

gulp.task("buildcss", function() {
  return gulp.src(['./app/**/style.scss', './app/**/*.scss', '!./app/themes/**/*'])
    .pipe(plumber({errorHandler: notify.onError(
      {
        title: "SCSS Error: Line <%= error.line %>",
        message: "<%= error.message %>"
      })
    }))
    .pipe(sass().on('error', function(err) { console.log(err) }))
    .pipe(concat('simply-kit.css'))
    .pipe(gulp.dest('./build/css/'))
});