var gulp =  require("gulp");

// Plugins gulp
var sass = require("gulp-sass");
var rename = require("gulp-rename");
var gulpif = require("gulp-if");
var uglify = require("gulp-uglify");
var nodemon = require("gulp-nodemon");
var minifyCss = require("gulp-minify-css");
var runSequence = require("gulp-run-sequence");
var autoprefixer = require("gulp-autoprefixer");

// Sicroniza navegador
var browserSync = require("browser-sync").create();

// Direórios dos arquivos estáticos
var paths = {
  scss: ["./client/source/scss/**/*.scss"],
  js: ["./client/source/js/**/*.js"]
};

/***
 * Tarefa de manipulação dos arquivos css
 */
gulp.task("css", function () {

  return gulp.src(paths.scss)
    .pipe(sass({
      outputStyle: "compressed",
      errLogToConsole: true
    }))
    .pipe(autoprefixer({
      browsers: ["last 3 versions"],
      cascade: false
    }))
    .pipe(minifyCss({ keepSpecialComments: 0 }))
    .pipe(rename({  dirname: "/css", extname: ".min.css" }))
    .pipe(gulp.dest("./client/public/"));

});

/**
 * Tarefa de manipulação dos javascripts
 */
gulp.task("js", function () {
  return gulp.src(paths.js)
    .pipe(gulpif(true, uglify({ mangle: true })))
    .pipe(rename({  dirname: "/js", extname: ".min.js" }))
    .pipe(gulp.dest("./client/public/"));
});

/**
 * Cria um watch para os arquivos css
 * e um para javascript
 */
gulp.task("watch", function () {
  gulp.watch(paths.scss, ["watch-css"]);
  gulp.watch(paths.js, ["watch-js"]);
});

/**
 * Tarefas executadas pelos watchers,
 * após alterações dos arquivos css e javascript
 */
gulp.task("watch-js", function (done) { runSequence("js", "reload", done); });
gulp.task("watch-css", function (done) { runSequence("css", "reload", done); });


/**
 * Tarefa que executa as tarefas js e css em sequência
 */
gulp.task("build", function (done) {
  return runSequence("js", "css", done);
});

/**
 * Tarefa que executa a aplicação via nodemon
 */
gulp.task("nodemon", function (cb) {
  var callbackCalled = false;
  return nodemon({script: "app.js"}).on("start", function () {
    if (!callbackCalled) {
      callbackCalled = true;
      cb();
    }
  });
});

/**
 * Tarefa que realiza a sicronização com o browser
 */
gulp.task("browser-sync", function() {
  browserSync.init(null, {
    proxy: "http://localhost:5000",
    baseDir: "./client/public",
    browser: "google chrome",
    port: 7000
  });
});

/**
 * Tarefa que recarregar o browser após as alterações dos arquivos
 */
gulp.task("reload", function () { return browserSync.reload(); });

/**
 * Tarefa principal
 */
gulp.task("default", function (done) {
  process.env.NODE_ENV = "development";
  runSequence("build", "browser-sync", "nodemon", "watch", done);
});