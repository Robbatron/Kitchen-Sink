/**
 * Created by RZ3T64 on 6/18/2016.
 */
var fs = require('fs'),
    addStream = require('add-stream');

module.exports = function( gulp, plugins, demoOrApp, newVersion, dir ){
        // console.log('  gulp:', gulp +
        //             ', plugins:', plugins +
        //             ', demoOrApp:', demoOrApp +
        //             ', argv:', newVersion +
        //             ', dir:', dir);

        var libsDir = 'node_modules/',
            packageFile = JSON.parse(fs.readFileSync('package.json', 'utf8')),
            currentVersion = newVersion && typeof(newVersion) !== 'object' ? newVersion : packageFile.version,
            appName = (demoOrApp === 'aksDemo/app/' ? 'aks' : packageFile.name),
            scriptsDir = demoOrApp + 'scripts/';

        function prepareTemplates () {
            return gulp.src([
                scriptsDir + 'components/**/*.html'
            ])
                .pipe(plugins.angularTemplatecache({module:( appName === 'aks' ? 'aks' : appName ), standalone:false}));
        }

        function jsMinification() {
            gulp.src([
                libsDir + 'angular/angular.min.js',
                libsDir + 'angular-ui-router/release/angular-ui-router.min.js',
                '!' + scriptsDir + '**/*.spec.js',
                scriptsDir + 'app.js',
                scriptsDir + 'constants/*.js',
                scriptsDir + 'services/*.js',
                scriptsDir + 'components/**/*.js'

            ])
                .pipe(plugins.sourcemaps.init())
                .pipe(plugins.ngAnnotate())
                .pipe(plugins.uglify())
                .pipe(addStream.obj(prepareTemplates()))
                .pipe(plugins.concat('bundlejs' + currentVersion + '.js'))
                .pipe(plugins.iife({
                    useStrict : true,
                    trimCode : true,
                    prependSemicolon : true,
                    bindThis : false
                }))
                .pipe(plugins.sourcemaps.write())
                .pipe(gulp.dest(demoOrApp + '/builds/'));
        }
        return jsMinification();
};
