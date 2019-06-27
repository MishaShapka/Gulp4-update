module.exports = function () {
    $.gulp.task('transfer', function() {

        return $.gulp.src('./src/js/**/*') // Переносим скрипты в продакшен
			.pipe($.gulp.dest('dest/js'))

        // return $.gulp.src('src/fonts/**/*') // Переносим шрифты в продакшен
		// 	.pipe($.gulp.dest('dest/fonts'))
	});
};