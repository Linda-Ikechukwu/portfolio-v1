const gulp     =  require('gulp');
      useref   =  require('gulp-useref');
      gulpif   =  require('gulp-if'),
      terser   =  require('gulp-terser'),
      cssnano  =  require('gulp-cssnano'),
      image    =  require('gulp-image'),
      cache    =  require('gulp-if'),
      del      =  require('del'),
      runSeq   =  require('run-sequence')
      changed  =  require('gulp-changed') ;


gulp.task('minify',function(){
    return gulp.src('src/*.html')
    .pipe(useref())
    .pipe(gulpif('*.js',terser()))
    .pipe(gulpif('*.css',cssnano()))
    .pipe(gulp.dest('dist'))
});

gulp.task('images', function(){
    return gulp.src('src/img/**/*.+(png|jpg|gif|svg)')
    .pipe(image())
    .pipe(gulp.dest('dist/img'))
});



gulp.task('clean', function() {
    return del.sync('dist').then(function(cb) {
      return cache.clearAll(cb);
    });
})
  
gulp.task('clean:dist', function() {
    return del.sync(['dist/**/*', '!dist/img', '!dist/img/**/*']);
});

gulp.task('build', function(callback) {
    runSeq(
      'clean:dist',
      ['minify', 'images' ],
      callback
    )
});



      