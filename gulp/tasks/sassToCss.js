/**
 * Created by RZ3T64 on 6/18/2016.
 */

var fs = require('fs'),
    browserSync = require('browser-sync').create();

module.exports = function ( gulp, plugins, demoOrApp ) {
    
    const packageFile = JSON.parse(fs.readFileSync('package.json', 'utf8')),
        currentVersion = packageFile.version;
    
    
    return function () {
        gulp.src ( [
                demoOrApp + 'styles/*.scss',
                demoOrApp + 'styles/**/*.scss'
            ] )
            .pipe ( plugins.sass ().on ( 'error', plugins.sass.logError ) )
            .pipe ( plugins.concat ( 'bundlecss' + currentVersion + '.css' ) )
            .pipe ( plugins.cssmin () )
            .pipe ( gulp.dest ( demoOrApp + 'builds/dev/' ) );
    }
};
