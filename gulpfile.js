var gulp =  require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var minifyCss = require("gulp-minify-css");
var rename = require("gulp-rename");
var gulpif = require("gulp-if");
var uglify = require("gulp-uglify");
var runSequence = require("gulp-run-sequence");
var browserSync = require("browser-sync").create();
var nodemon = require('gulp-nodemon');

var paths = {
  scss: ["./client/source/scss/**/*.scss"],
  js: ["./client/source/js/**/*.js"]
};

gulp.task("css", function () {

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
  gulp.watch(paths.scss, ["watch-css"]);
  gulp.watch(paths.js, ["watch-js"]);
});

gulp.task("watch-js", function (done) { runSequence("js", "reload", done); });
gulp.task("watch-css", function (done) { runSequence("css", "reload", done); });

gulp.task("build", function (done) {
  return runSequence("js", "css", done);
});

gulp.task("serve", function () {
  return browserSync.init({ server: {
    baseDir: './client/public'
  } });
});

gulp.task("nodemon", function (cb) {
  var callbackCalled = false;
  return nodemon({script: "app.js"}).on("start", function () {
    if (!callbackCalled) {
      callbackCalled = true;
      cb();
    }
  });
});

gulp.task('reload', function () { return browserSync.reload(); });

gulp.task("default", function (done) { runSequence("build", "serve", "nodemon", "watch", done); });