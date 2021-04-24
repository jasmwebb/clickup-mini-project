const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass");
const browsersync = require("browser-sync");

sass.compiler = require("sass");

function scssTask() {
  return src("./src/scss/**/*.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(dest("./public/css", { sourcemaps: "." }));
}

function browsersyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: "."
    }
  });
  cb();
}

function browsersyncReload(cb) {
  browsersync.reload();
  cb();
}

function watchTask() {
  watch("./*.html", browsersyncReload);
  watch("./src/scss/**/*.scss", series(scssTask, browsersyncReload));
}

exports.default = series(
  scssTask,
  browsersyncServe,
  watchTask
);
