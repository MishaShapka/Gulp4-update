module.exports = function() {
    $.gulp.task("images", function() {
        return $.gulp.src(["./src/assets/img/**/*.{jpg,jpeg,png,gif}", "!./src/assets/img/svg/icons/*", "!./src/assets/img/favicons/*.{jpg,jpeg,png,gif}"])
            .pipe($.newer("./dist/img/"))
            .pipe($.imagemin([
                $.imagemin.gifsicle({interlaced: true}),
                $.imagemin.jpegtran({progressive: true}),
                $.imageminJpegRecompress({
					progressive: true,
					max: 80,
					min: 70
				}),
                $.imagemin.svgo({plugins: [{removeViewBox: true}]}),
                $.imagemin.optipng({optimizationLevel: 5}),
                $.pngquant({quality: "65-70", speed: 5})
            ]))
            .pipe($.gulp.dest("./dist/img/"))
            .pipe($.debug({"title": "images"}))
            .on("end", $.browsersync.reload);
    });
};