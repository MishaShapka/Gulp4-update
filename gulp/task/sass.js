module.exports = function() {
    $.gulp.task('sass', function(){
			// Берем все sass файлы из папки sass и дочерних, если таковые будут
			return $.gulp.src(['./src/assets/app.scss']) 
			
			//Уведомление
			.pipe( $.sass().on( 'error', $.notify.onError( 
			      {
			        message: "<%= error.message %>",
			        title  : "Кэп! Твой код пошел по пизде!"
			      } )))
			.pipe($.sass())

			 //Автопрефиксы
			.pipe($.autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
			//Минификация css
			.pipe($.mincss({compatibility: "ie8", level: {1: {specialComments: 0}}})) 
			//Запись всех файлов sass в один css
			.pipe($.concat('main.css')) 
			.pipe($.replace("../../dist/", "../"))
      .pipe($.plumber.stop())
			.pipe($.sourcemaps.write("./maps/"))		
			//Добавление .min
			.pipe($.rename({suffix: ".min"}))
			//Каталог в который выгружается конечный css
			.pipe($.gulp.dest('./dist/css')) 
      .on("end", $.browsersync.reload);
	});
};