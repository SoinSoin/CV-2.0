var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');


gulp.task('sass', function() {
    return gulp.src('app/dist/css/scss/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('app/dist/css'))
      .pipe(browserSync.reload({
        stream: true
      }));
  });

  gulp.task('default',['browserSync', 'sass'],function(){
gulp.watch('app/dist/css/scss/**/*.scss', ['sass']);
  });

  gulp.task('browserSync', function() {
    browserSync({
      server: {
        baseDir: 'app'
      },
    })
  });



