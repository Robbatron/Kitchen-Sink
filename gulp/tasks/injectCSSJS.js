"use strict";

module.exports = {
    get(gulp, plugins, demoOrApp) {
        const injectJsAndCss = () => {
            gulp.src(demoOrApp + 'index.html')
                .pipe(plugins.inject(gulp.src(['./builds/dev/**/*'], {read: false})))
                .pipe(gulp.dest(demoOrApp));
        };
        return injectJsAndCss();
    }
};