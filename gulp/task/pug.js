module.exports = function() {
    $.gulp.task("pug", function() {
        return $.gulp.src(["./src/views/**/index.pug"])
            .pipe($.pug({pretty: true})
            .on( 'error', $.notify.onError( //уведомления
                {
                message: "<%= error.message %>",
                title  : "Кэп! Твой код пошел по пизде!"
                } ) )
            )
            .pipe($.gulpPugBeautify({ omit_empty: true }))
            .pipe($.replace("../dest/"))
            .pipe($.gulp.dest("./dest/"))
            .pipe($.debug({"title": "html"}))
            .on("end", $.browsersync.reload);
    });
};
