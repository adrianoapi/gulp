var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['sass']);

gulp.task('sass', function () {
    return gulp.src('assets/src/**/*.scss')
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(gulp.dest('assets/css'));
});