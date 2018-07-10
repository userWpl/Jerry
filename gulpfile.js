const gulp=require('gulp');
const htmlMin=require('gulp-htmlmin');
const cssMin=require('gulp-cssmin');
const uglify=require('gulp-uglify');
const concat=require('gulp-concat');
const watch=require('gulp-watch');
const imgMin=require('gulp-imagemin');
const browserSync=require('browser-sync');

gulp.task('uglify:html',function(){
    gulp.src('src/html/*.html')
    .pipe(htmlMin({collapseWhitespace: true}))
    .pipe(gulp.dest('test/build/html'))
});
gulp.task('uglify:css',function(){
    gulp.src('src/css/*.css')
   .pipe(cssMin())
   .pipe(gulp.dest('test/build/css'))
});
gulp.task('uglify:js',function(){
    gulp.src('src/js/*.js')
   .pipe(uglify())
   .pipe(gulp.dest('test/build/js'))
});
gulp.task('uglify:img',function(){
    gulp.src('src/img/*.JPG')
   .pipe(imgMin())
   .pipe(gulp.dest('test/build/img'))
});
gulp.task('img:watch',function(){
    return watch('src/img/*.JPG')
    .pipe(imgMin())
    .pipe(gulp.dest('test/build/img'))
});
gulp.task('html:watch',function(){
    return watch('src/html/*.html')
    .pipe(htmlMin({collapseWhitespace: true}))
    .pipe(gulp.dest('test/build/html'));
});
gulp.task('css:watch',function(){
    return watch('src/css/*.css')
    .pipe(cssMin())
    .pipe(gulp.dest('test/build/css'));
});
gulp.task('js:watch',function(){
    return watch('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('test/build/js'));
});

gulp.task("server",function(){
    browserSync.init({
        "server":"./",
        "port":"8686",
        "files":[
            "./**/*.html",
            "./styles/*.css",
            "./scripts/*.js"
        ]
    });
});

gulp.task('default',['uglify:html','uglify:css','uglify:js','uglify:img','css:watch','html:watch','js:watch','img:watch','server'],function(){
    gulp.start("server");
});






 // gulp.task("default");