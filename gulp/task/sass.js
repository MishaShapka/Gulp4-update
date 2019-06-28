module.exports = function() {
    $.gulp.task('sass', function(){
	    return $.gulp.src(['./src/sass/**/*.sass', '!./src/sass/**/*.css']) // Берем все sass файлы из папки sass и дочерних, если таковые будут
			

			.pipe( $.sass().on( 'error', $.notify.onError( //Уведомление
			      {
			        message: "<%= error.message %>",
			        title  : "Кэп! Твой код пошел по пизде!"
			      } )))
			.pipe($.sass())


	        .pipe($.autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) //автопрефикс
			.pipe($.mincss({compatibility: "ie8", level: {1: {specialComments: 0}}})) //Минификация css
        	//.pipe($.rename({suffix: ".min"})) //Добавление .min
			.pipe($.replace("../../dest/", "../"))
        	.pipe($.plumber.stop())
        	.pipe($.sourcemaps.write("./maps/"))
		  //.pipe($.gulp.dest("./dest/css/"))
			.pipe($.concat('main.css')) //Запись всех файлов sass в один css
			.pipe($.gulp.dest('./dest/css')) //Каталог в который выгружается конечный css
        	.on("end", $.browsersync.reload);
	});
};