var fs = require('fs');
var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	jsonServer = require('gulp-json-srv'),
	plugins = require('gulp-load-plugins')({
			camelize: true
		}),
	http = require('http'),
	argv = require('yargs').argv,
	demoOrApp = '';

	if(argv.go){
		demoOrApp = 'aksDemo/app/';
	} else {
		demoOrApp = 'app/';
	}

	var scriptsDir = demoOrApp + 'scripts/',
		dev = [ 'injectCSSJS', 'browser-sync' ],
		build = [ 'eslint', 'jsMin', 'sassToCss', 'unitTests' ];



function getTask(task) {
	console.log('task name: ', task);
	return require('./gulp/tasks/' + task)(gulp, plugins, demoOrApp, argv);
}

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir : './' + demoOrApp
		},
		reloadDebounce: 2000,
		reloadDelay: 9000
	});

	var reloadAPI = jsonServer.start({
		data: './data/db.json',
		port: 3500
	});

	gulp.watch(['./data/db.json'], function(){
		reloadAPI.reload();
	});

	gulp.watch([
			scriptsDir + '**/*.spec.js',
			scriptsDir + '**/*.js',
			scriptsDir + '*.js',
			scriptsDir + 'components/**/*.html',
			demoOrApp + 'styles/*.scss',
			demoOrApp + 'styles/**/*.scss'
			//demoOrApp + '*.html'
		],
		['eslint', 'jsMin', 'sassToCss', browserSync.reload]);

});


gulp.task('build', build, function (  ) {
	console.log("Prod Started!");
});

gulp.task('dev', build.concat(dev), function (  ) {
	console.log("Dev Started!");
});

gulp.task('demo', build.concat(dev), function (  ) {
	console.log("Demo Started!");
});

gulp.task('admin', function() { return getTask('admin') }); // ES6 fat arrow would rock here
gulp.task('version', function() { return getTask('version') });
gulp.task('help', function() { return getTask('help') });
gulp.task('create', function() { return getTask('create') });
gulp.task('unitTests', function() { return getTask('unitTests') });
gulp.task('eslint', function() { return getTask('eslint') });
gulp.task('jsMin', function() { return getTask('jsMin') });
gulp.task('sassToCss', function() { return getTask('sassToCss') });
gulp.task('injectCSSJS', function() { return getTask('injectCSSJS') });
gulp.task('default', [], function(){});
