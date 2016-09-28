"use strict";

import fs from 'fs';
const addStream = require('add-stream');

module.exports = {
    get(gulp, plugins, demoOrApp, newVersion) {

        const packageFile = JSON.parse(fs.readFileSync('package.json', 'utf8')),
              currentVersion = newVersion && typeof(newVersion) !== 'object' ? newVersion : packageFile.version,
              libsDir = 'node_modules/',
              appName = (demoOrApp === 'aksDemo/app/' ? 'aks' : packageFile.name),
              scriptsDir = demoOrApp + 'scripts/';

        const prepareTemplates = () => {
            return gulp.src([
                scriptsDir + 'components/**/*.html'
            ])
            .pipe(plugins.angularTemplatecache({
                module:(appName === 'aks' ? 'aks' : appName), standalone:false
            }));
        };

        const jsMinification = () => {
            const stream = gulp.src([
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
                  .pipe(plugins.concat(`bundlejs${currentVersion}.js`))
                  .pipe(plugins.iife({
                      useStrict : true,
                      trimCode : true,
                      prependSemicolon : true,
                      bindThis : false
                  }))
                  .pipe(plugins.sourcemaps.write())
                  .pipe(gulp.dest(demoOrApp + '/builds/'));
            return stream;
        };
        return jsMinification();
    }
};
