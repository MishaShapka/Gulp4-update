global.$ = {
    gulp: require("gulp"),
    watch: require("gulp-watch"),
    browsersync: require("browser-sync").create(),
    pug: require("gulp-pug"),
    clean: require("gulp-clean"),
    replace: require("gulp-replace"),
    debug: require("gulp-debug"),
    sass: require('gulp-sass'),
    notify: require('gulp-notify'),
    autoprefixer: require('gulp-autoprefixer'),
    // cssnano: require('gulp-cssnano'),
    rename: require("gulp-rename"),
    mincss: require("gulp-clean-css"),
    plumber: require("gulp-plumber"),
    sourcemaps: require("gulp-sourcemaps"),
    imagemin: require("gulp-imagemin"),
    pngquant: require("imagemin-pngquant"),
    imageminJpegRecompress: require("imagemin-jpeg-recompress"),
    newer: require("gulp-newer"),
    favicons: require("gulp-favicons"),
    iconfont: require("gulp-iconfont"),
    iconfontcss: require("gulp-iconfont-css"),
	svgSprite: require("gulp-svg-sprites"),
    babel: require("gulp-babel"),
    uglify: require("gulp-uglify"),
    concat: require("gulp-concat"),
    gulpPugBeautify: require('gulp-pug-beautify'),
    html2pug: require('gulp-html2pug'),

    path: {
        tasks: require("./gulp/config.js")
    }
};

$.path.tasks.forEach(function(taskPath) {
    require(taskPath)();
});

$.gulp.task("default", 
    $.gulp.series("clean", "iconfont", 
    $.gulp.parallel("pug", "sass", "scripts", "images", "favicons"),
    //$.gulp.parallel("html2pug"),
    $.gulp.parallel("transfer"),
    $.gulp.parallel("watch", "serve"),
));