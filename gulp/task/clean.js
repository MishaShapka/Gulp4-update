module.exports = function() {
    $.gulp.task("clean", function() {
        return $.gulp.src("./dist/*", {read: false})
            .pipe($.clean())
            .pipe($.debug({"title": "clean"}));
    });
};