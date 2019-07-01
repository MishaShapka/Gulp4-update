module.exports = function() {
    $.gulp.task('html2pug', function() {
        // Backend locales
        return $.gulp.src('src/index.html')
        .pipe($.html2pug(/* options for html2pug such as { fragment: true } */))
        .pipe($.gulp.dest('./src'))
        // .pipe($.gulp.dest("./dist/"))
        .on("end", $.browsersync.reload);
      });
};

