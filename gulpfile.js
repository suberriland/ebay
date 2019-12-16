const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const browsersync = require('browser-sync');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

var scss = './src/scss/styles.scss';
// var allscss = './src/**/*.scss';
var css = './css';
// var srcjs = './src/**/*.js';
// var js = './js';
// var html = './**/*.html';

// CSS
function style() {
    // 1. SOURCE SCSS
    return gulp.src( scss )
    // 2. SOURCEMAPS ON
    .pipe( sourcemaps.init() )
    // 3. SASS
    .pipe( sass( {outputStyle: 'compressed'} )
    .on( 'error', sass.logError ) )
    // 4. AUTOPREFIXER
    .pipe( autoprefixer( {cascade: false} ) )
    // 5. RENAME
    .pipe( rename( 'ebay.min.css' ) )
    // 6. SOURCEMAPS
    .pipe( sourcemaps.write( '.' ))
    // 7. DESTINATION
    .pipe( gulp.dest( css ) )
    // 8. STREAM TO BROWSER
    // .pipe( browsersync.stream() );
}
exports.style = style;

/* function watch() {
    browsersync.init({
        baseDir: './'
    })
    gulp.watch( allscss, style );
    gulp.watch( html ).on( 'change', browsersync.reload );
    gulp.watch( srcjs ).on( 'change', browsersync.reload );
}
exports.watch = watch;
*/