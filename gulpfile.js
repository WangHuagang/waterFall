var gulp = require('gulp');  //加载gulp
var uglify = require('gulp-uglify');  //加载js压缩
var minify = require('gulp-minify-css');//压缩css
var htmlmini = require('gulp-minify-html');//压缩html
// var concat = require("gulp-concat");//合并CSS或者js
var imagemin = require('gulp-imagemin');//压缩图片
var pngquant = require('imagemin-pngquant');

// 定义一个任务 compass  压缩js
gulp.task('jsmin', function () {
    gulp.src(['js/*.js'])  //获取文件，同时过滤掉.min.js文件
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));  //输出文件
});

//定义一个任务cssmini  压缩css
gulp.task('cssmin', function () {
    gulp.src(['css/*.css', '!css/*.min.css'])  //要压缩的css
        .pipe(minify())
        .pipe(gulp.dest('dist/css/'));
});

//定义一个任务htmlmini  压缩html
gulp.task('htmlmin', function () {
    gulp.src('*.html')
        .pipe(htmlmini())
        .pipe(gulp.dest('dist/'));
})

//压缩图片
gulp.task('imagemin', function () {
    gulp.src('./image/*.jpg')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/image/'));
});








