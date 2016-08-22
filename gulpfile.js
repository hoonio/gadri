const gulp       = require('gulp');
const $          = require('gulp-load-plugins')();

gulp.task('styles', function(){
  gulp.src('gadri/app/app.scss')
    .pipe($.sass())
    .pipe($.cssmin())
    .pipe(gulp.dest('./dist/'))
});
