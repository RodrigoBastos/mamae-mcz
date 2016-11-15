var gulp =  require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var minifyCss = require("gulp-minify-css");
var rename = require("gulp-rename");
var gulpif = require("gulp-if");
var uglify = require("gulp-uglify");

var paths = {
  scss: ["./client/source/scss/*.scss"],
  js: ["./client/source/js/*.js"]
};

gulp.task("default", ["watch"]);

gulp.task ("css", function () {

  return gulp.src(paths.scss)
    .pipe(sass({
      outputStyle: 'compressed',
      errLogToConsole: true
    }))
    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false
    }))
    .pipe(minifyCss({ keepSpecialComments: 0 }))
    .pipe(rename({  dirname: '/css', extname: '.min.css' }))
    .pipe(gulp.dest('./client/public/'));

});

gulp.task("js", function () {
  return gulp.src(paths.js)
    .pipe(gulpif(true, uglify({ mangle: true })))
    .pipe(rename({  dirname: '/js', extname: '.min.js' }))
    .pipe(gulp.dest('./client/public/'));
});

gulp.task("watch", function () {
  gulp.watch(paths.scss, ["css"]);
  gulp.watch(paths.js, ["js"]);
});