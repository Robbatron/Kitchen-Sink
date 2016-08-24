/**
 * Created by RZ3T64 on 6/18/2016.
 */

var fs = require('fs');

module.exports = function (gulp, plugins, demoOrApp, newVersion, dir) {

        var packageFile = JSON.parse(fs.readFileSync('package.json', 'utf8')),
            currentVersion = newVersion && typeof(newVersion) !== 'object' ? newVersion : packageFile.version;

        function TranspileSass() {
            gulp.src([
                demoOrApp + 'styles/*.scss',
                demoOrApp + 'styles/**/*.scss'
            ])
                .pipe(plugins.autoprefixer({
                    browsers: ['ie >= 9']
                }))
                .pipe(plugins.sass({
                    outputStyle: 'compressed'
                }).on('error', plugins.sass.logError))
                .pipe(plugins.concat('bundlecss' + currentVersion + '.css'))
                .pipe(gulp.dest(demoOrApp + 'builds/'))
        }
    return TranspileSass();
};
