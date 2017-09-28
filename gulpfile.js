let gulp = require('gulp');
let uglify = require('gulp-uglify');
let connect = require('gulp-connect');
let sass = require('gulp-sass');
gulp.task('server',  function() {
    connect.server({
        root: './',
        port: 9000,
        livereload: true
    });
    gulp.watch(['scss/index.css', 'index.html'], ['sass']);
});

gulp.task('sass', function() {
   gulp.src(['scss/index.css', 'index.html']).pipe(connect.reload());
});
