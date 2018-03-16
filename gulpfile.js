var gulp        = require('gulp');
var less        = require('gulp-less');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;


gulp.task('serve', ['cssCreator'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("/less/*.less", ['cssCreator']);
    gulp.watch("*.html").on("change", reload);
    gulp.watch("/src/styles/*.css").on("change", reload);
    gulp.watch("/src/js/*.js").on("change", reload);

});

gulp.task('cssCreator', function() {
    gulp.src('dev/less/*.less').pipe(less())
        .pipe(gulp.dest('app/src/styles'))
        .pipe(browserSync.stream());
});
gulp.task('default', ['serve']);