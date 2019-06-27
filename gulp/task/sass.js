module.exports = function() {
    $.gulp.task('sass', function(){
	    return $.gulp.src(['./src/sass/**/*.sass']) // Берем все sass файлы из папки sass и дочерних, если таковые будут
	    	.pipe( $.sass().on( 'error', $.notify.onError( //уведомления
			      {
			        message: "<%= error.message %>",
			        title  : "Кэп! Твой код пошел по пизде!"
			      } ) )
			  )
	        .pipe($.sass())
	        .pipe($.autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) //автопрефикс
					// .pipe($.gulp.dest('dest/css'))
					.pipe($.mincss({compatibility: "ie8", level: {1: {specialComments: 0}}}))
          .pipe($.rename({suffix: ".min"}))
					// .pipe( notify( 'Кэп! Твой код великолепен!' ) )
					.pipe($.replace("../../dest/", "../"))
          .pipe($.plumber.stop())
          .pipe($.sourcemaps.write("./maps/"))
          .pipe($.gulp.dest("./dest/css/"))
          .on("end", $.browsersync.reload);
	});
};