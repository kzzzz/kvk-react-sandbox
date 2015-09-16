var gulp = require('gulp');
require('require-dir')('./gulp');
var connect = require('gulp-connect');
var browserSync = require('browser-sync').create();

gulp.task('connect', function () {
    connect.server({
        port: 3030,
        root: './src',
        open: {
            file: 'index.html',
            browser: 'firefox'
        },
        livereload: true
    });
});

gulp.task('serve', function(){
    browserSync.init({
        server: '/src',
        port: 3030
    });

    //gulp.watch("app/scss/*.scss", ['sass']);
    //gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('dev', ['serve'], function () {

});

gulp.task('deploy', function () {

});