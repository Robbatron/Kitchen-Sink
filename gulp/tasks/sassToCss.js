"use strict";

import fs from 'fs';

module.exports = {
    get(gulp, plugins, demoOrApp, newVersion) {

        const packageFile = JSON.parse(fs.readFileSync('package.json', 'utf8')),
              currentVersion = newVersion && typeof(newVersion) !== 'object' ? newVersion : packageFile.version;

        const TranspileSass = () => {
            const stream = gulp.src([
                  demoOrApp + 'styles/*.scss',
                  demoOrApp + 'styles/**/*.scss'
            ])
                .pipe(plugins.autoprefixer({
                    browsers: ['ie >= 9']
                }))
                .pipe(plugins.sass({
                    outputStyle: 'compressed'
                }).on('error', plugins.sass.logError))
                .pipe(plugins.concat(`bundlecss${currentVersion}.css`))
                .pipe(gulp.dest(demoOrApp + 'builds/'));
            return stream;
        };
        return TranspileSass();
    }
};
