module.exports = function () {
    $.gulp.task('transfer', function() {

        return $.gulp.src('./src/fonts/**/*') // Переносим скрипты в продакшен
			.pipe($.gulp.dest('dist/fonts'))

        $.gulp.src('src/fonts/**/*') // Переносим шрифты в продакшен
		// 	.pipe($.gulp.dest('dist/fonts'))
	});
};