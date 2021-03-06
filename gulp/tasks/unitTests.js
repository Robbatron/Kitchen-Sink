"use strict";

import fs from 'fs';

module.exports = {
    get(gulp, plugins, demoOrApp) {
        const unitTest = () => {
            const karma = require('karma').Server,
                  path = require('path'),
                  appPath = __dirname + '/../../',
                  packageFile = JSON.parse(fs.readFileSync('package.json', 'utf8')),
                  appName = packageFile.name;

            new karma({
                configFile: '../../../karma.conf.js',
                preprocessors: {
                    appPath : ['ng-html2js']
                },
                files: [
                    appPath + '/node_modules/angular/angular.js',
                    appPath + '/node_modules/angular-ui-router/release/angular-ui-router.js',
                    appPath + '/node_modules/angular-mocks/angular-mocks.js',
                    appPath + demoOrApp + 'scripts/**/*.js',
                    appPath + demoOrApp + 'scripts/*.js',
                    appPath + demoOrApp + 'scripts/components/**/*.html'
                ],
                ngHtml2JsPreprocessor: {
                    stripPrefix: demoOrApp + 'scripts/components',
                    moduleName : appName
                },
                singleRun: false
            }).start();
        };
        return unitTest();
    }
};