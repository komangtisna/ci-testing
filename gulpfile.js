var gulp = require('gulp');

var autoprefix = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

// Requires the gulp-sass plugin
var sass = require('gulp-sass');

var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

// Sass Compiler
gulp.task('sass', function() {
    return gulp.src('assets/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sourcemaps.init({largeFile: true}))
        .pipe(sass())
        .pipe(autoprefix(autoprefixerOptions))
    .pipe(sourcemaps.write('.', {addComment: false}))
    .pipe(gulp.dest('assets/css'))
})

// Minify CSS
gulp.task('min-css', function() {
    gulp.src('assets/scss/**/*.scss')
    .pipe(sourcemaps.init({largeFile: true}))
        .pipe(sass())
        .pipe(autoprefix(autoprefixerOptions))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({
            suffix: '.min'
        }))
    .pipe(sourcemaps.write('.', {addComment: false}))
    .pipe(gulp.dest('assets/css'));
 });

//  Minify JS
gulp.task('js', function(){
    gulp.src(['assets/js/**/*.js', '!assets/js/**/*.min.js'])
    .pipe(sourcemaps.init({largeFile: true}))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
    .pipe(sourcemaps.write('.', {addComment: false}))
    .pipe(gulp.dest('assets/js'));
});

// Run gulp
gulp.task('default', ['sass', 'min-css', 'js'], function() {
    gulp.watch('assets/scss/**/*.scss', ['sass']);
    gulp.watch('assets/scss/**/*.scss', ['min-css']);
    gulp.watch('assets/js/*.js', ['js']);
});