const {src, dest, series, watch} = require('gulp');
var gulp                         = require('gulp');
var sass                         = require('gulp-sass');
var bsync                        = require('browser-sync').create();
var minify                       = require('gulp-minify');
var sourcemaps                   = require ('gulp-sourcemaps');

function convert(done){
    return src('./scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(dest('css'))
        .pipe(bsync.stream());
    done();
}

function liveReload(done){
    bsync.init({
        server: {
            baseDir: "./"
        }
    });

    watch("./**/*.html").on('change', bsync.reload);
    watch("./scss/**/*.scss", convert);
    done();
}

exports.convert    = convert;
exports.liveReload = liveReload;
exports.minify     = minify;

/* Default task */
exports.default    = liveReload;