/**
 * Created by RZ3T64 on 6/19/2016.
 */

module.exports = function (gulp, plugins, demoOrApp) {
        function injectJsAndCss() {
            gulp.src(demoOrApp + 'index.html')
                .pipe(plugins.inject(gulp.src(['./builds/dev/**/*'], {read: false})))
                .pipe(gulp.dest(demoOrApp));
        }
    return injectJsAndCss();
};
