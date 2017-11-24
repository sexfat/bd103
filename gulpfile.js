var gulp = require('gulp');
var uglify = require('gulp-uglify');


//  uglify js
gulp.task('compress', function() {
    // 將你的默認的任務代碼放在這
    return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('js/bundle/'));
  });

// js move
gulp.task('default', function() {
    // 将妳的任務代碼放在這
    return gulp.src('*.html')
    .pipe(gulp.dest('build/'));
   
  });

  console.log('no error');

