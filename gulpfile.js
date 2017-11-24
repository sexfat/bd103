var gulp = require('gulp');


gulp.task('default', function() {
    // 将妳的任務代碼放在這
    return gulp.src('*.html')
    .pipe(gulp.dest('build/'));
  });


