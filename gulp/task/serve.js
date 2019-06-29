module.exports = function () {
    $.gulp.task("serve", function () {
        return new Promise((res, rej) => {
            $.browsersync.init({
                server: "./dist/",
                // tunnel: true,
                // port: 9000
            });
            res();
        });
    });
};