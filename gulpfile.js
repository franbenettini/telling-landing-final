const { src, dest, watch, parallel } = require('gulp');

//CSS
const sass = require ('gulp-sass')(require('sass'));
const plumber = require ('gulp-plumber');

//Imagenes
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

function css ( done ){
    src('scss/**/*.scss') // Identificar el archivo .SASS a compilar
        .pipe( plumber())
        .pipe( sass() ) //Compilarlo
        .pipe( dest('build/css') ) // Almacenarlo en el disco duro
    done();
}

function imagenes ( done ){
    const opciones = {
        optimizationLevel: 3
    }

    src('img/**/*.{png,jpg,svg}')
        .pipe(cache( imagemin(opciones) ) )
        .pipe( dest('build/img'))
    done();
}

function versionwebp ( done ){

    const opciones = {
        quality: 50
    };

    src('img/**/*.{png,jpg,svg}')
        .pipe( webp(opciones) )
        .pipe( dest('build/img') )
    done();
}

function versionAvif( done ){

    const opciones = {
        quality: 50
    };

    src('img/**/*.{png,jpg}')
        .pipe( avif(opciones) )
        .pipe( dest('build/img') )
    done();
}

function dev ( done ){
    watch('scss/**/*.scss', css);
    done();
}

exports.css = css;
exports.imagenes = imagenes;
exports.versionwebp = versionwebp;
exports.versionAvif = versionAvif;
exports.dev = parallel( imagenes, versionwebp, versionAvif, dev );
exports.devt = dev;