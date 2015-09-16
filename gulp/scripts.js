var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('scripts', function(){
   return gulp
       .src('./src/**/*.js')
       .pipe(browserify({
           transform: ["reactify"]
       }))
       .pipe(gulp.dest('./build'));
});