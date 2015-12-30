var gulp = require('gulp'),
    less = require('gulp-less'),
    cssmin = require('gulp-minify-css'),
    fixer = require('gulp-autoprefixer'),
    uglify = require("gulp-uglify");
 
gulp.task('testLess', function () {
    gulp.src('./style.less')
        .pipe(less())
        .pipe(cssmin())
        .pipe(gulp.dest('./css/'));
});

gulp.task('testAutoFx', function () {
    gulp.src('./style.css')
        .pipe(fixer({
            browsers: ['last 3 versions'],
            cascade: true, 
            remove:true 
        }))
        .pipe(gulp.dest('./css/'));
});

gulp.task('minify-js', function () {
    gulp.src('./js/*.js') // 要压缩的js文件
    .pipe(uglify())  //使用uglify进行压缩
    .pipe(gulp.dest('./js/')); //压缩后的路径
});

gulp.task('default', function() {
  gulp.start('testLess','testAutoFx','minify-js');
});