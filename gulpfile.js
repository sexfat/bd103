var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');


//  uglify js
gulp.task('compress', function() {
    // 將你的默認的任務代碼放在這
    return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('js/bundle/'));
  });

// minify css

gulp.task('minify-css', function() {
    // 将妳的任務代碼放在這
    return gulp.src('css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('css/bundle/'));
  });


  

// js move
gulp.task('default', function() {
    // 将妳的任務代碼放在這
    return gulp.src('*.html')
    .pipe(gulp.dest('build/'));
   
  });

  console.log('no error');

