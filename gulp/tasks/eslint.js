"use strict";

module.exports = {
    get(gulp, plugins, demoOrApp) {
        const eslinter = () => {
            gulp.src([
                demoOrApp + 'scripts/**',
                '!' + demoOrApp + 'scripts/**/*.html'
            ]).pipe(plugins.eslint({
                'extends': ['eslint:recommended', 'plugin:jasmine/recommended'],
                'plugins': ['angular', 'jasmine'],
                'env': {
                    'browser': true,
                    'jasmine': true
                },
                'rules':{
                    'no-console' : 0,
                    'semi': [1, 'always']
                },
                'globals': {
                    'appName': false,
                    'angular': false,
                    'module' : false,
                    'inject' : false
                }
            }))
                .pipe(plugins.eslint.format())
                .pipe(plugins.eslint.failOnError());
        };
        return eslinter();
    }
};