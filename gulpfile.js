// Stuff

var gulp = require( 'gulp' ),
    fdel = require( 'del' ),
    sequence = require( 'run-sequence' ),
    sourcemaps = require( 'gulp-sourcemaps' ),
    rename = require( 'gulp-rename' ),
    concat = require( 'gulp-concat' ),
    prefixer = require( 'gulp-autoprefixer'),
    gscss = require( 'gulp-sass' );

var paths = {
    src: {
        scss: 'sources/scss/main.scss',
        js: 'sources/js/*.js'
    },
    dest: {
        css: 'assets/css/',
        js: 'assets/js/',
        cssFile: 'style.css',
        cssMapFile: 'style.css.map',
        jsFile: 'app.js'
    }
};

var _style = 'compact';

gulp.task( 'clean', function ( done ) {
    sequence( [ 'clean:js', 'clean:css' ], done );
} );

gulp.task( 'clean:js', function () {
    return fdel( [
        paths.dest.js + paths.dest.jsFile
        ]
    );
} );

gulp.task( 'clean:css', function () {
    return fdel( [
        paths.dest.css + paths.dest.cssFile,
        paths.dest.css + paths.dest.cssMapFile
        ]
    );
} );

gulp.task( 'scss', function () {
    return gulp.src( paths.src.scss )
        .pipe( sourcemaps.init() )
        .pipe( gscss().on( 'error', gscss.logError ) )
        .pipe( gscss( { style: _style } ) )
        .pipe( prefixer() )
        .pipe( rename( paths.dest.cssFile ) )
        .pipe( sourcemaps.write() )
        .pipe( gulp.dest( paths.dest.css ) );
} );

gulp.task( 'js', function () {
    return gulp.src( paths.src.js )
        .pipe( sourcemaps.init() )
        .pipe( concat( paths.dest.jsFile ) )
        .pipe( sourcemaps.write() )
        .pipe( gulp.dest( './assets/js/' ) );
} );

gulp.task( 'watch', function () {
	gulp.watch( paths.src.scss, ['scss'] );
	gulp.watch( paths.src.js, ['js'] );
} );

gulp.task( 'build', function() {
   sequence( ['clean', 'js', 'scss' ] );
});

gulp.task( 'default', [ 'build' ], function () {
} );