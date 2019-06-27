module.exports = function() {
    $.gulp.task("watch", function() {
        return new Promise((res, rej) => {
            $.watch(["./src/views/**/index.pug", "!./src/views/blocks/*.pug"], $.gulp.series("pug"));
            $.watch("./src/sass/**/main.sass", $.gulp.series("sass"));
            $.watch(["./src/img/**/*.{jpg,jpeg,png,gif}", "!./src/img/icons/svg/*.svg", "!./src/img/favicons/*.{jpg,jpeg,png,gif}"], $.gulp.series("images"));
            $.watch("./src/img/icons/svg/*.svg", $.gulp.series("iconfont"));
            $.watch("./src/js/**/*.js", $.gulp.series("transfer"));
            res();
        });
    });
};