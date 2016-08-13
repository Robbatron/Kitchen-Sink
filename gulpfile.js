
var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	jsonServer = require('gulp-json-srv'),
	plugins = require('gulp-load-plugins')({
			camelize: true
		}),
	argv = require('yargs').argv;

	if(argv.go){
		var demoOrApp = 'aksDemo/app/';
	} else {
		var demoOrApp = 'app/';
	}


	var scriptsDir = demoOrApp + 'scripts/',
		arrayOfTasks = [ 'eslint', 'jsMin', 'sassToCss', 'injectCSSJS', 'unitTests' ];


function getTask(task) {
	return require('./gulp/tasks/' + task)(gulp, plugins, demoOrApp, argv);
}

function serverStart(){
	
	browserSync.init({
		server : {
			baseDir : './' + demoOrApp
		},
		reloadDebounce: 2000,
		reloadDelay: 6000
	});

	var reloadAPI = jsonServer.start({
		data: './data/db.json',
		port: 3500
	});

	gulp.watch(['./data/db.json'], function(){
		reloadAPI.reload();
	});

	gulp.watch([
			scriptsDir + '**/*.spec.js',
			scriptsDir + '**/*.js',
			scriptsDir + '*.js',
			scriptsDir + 'components/**/*.html',
			demoOrApp + 'styles/*.scss',
			demoOrApp + 'styles/**/*.scss',
			demoOrApp + '*.html'
		],
		['jsMin', 'eslint', 'sassToCss', browserSync.reload]);
}

gulp.task('prod', arrayOfTasks, function (  ) {
	
	console.log("Prod Started!");
});

gulp.task('dev', arrayOfTasks, function (  ) {
	serverStart();
	console.log("Dev Started!");
});

gulp.task('demo', arrayOfTasks, function (  ) {
	serverStart();
	console.log("Demo Started!");
});

gulp.task('help', getTask('help'));
gulp.task('create', getTask('create'));
gulp.task('unitTests', getTask('unitTests'));
gulp.task('eslint', getTask('eslint'));
gulp.task('jsMin', getTask('jsMin'));
gulp.task('sassToCss', getTask('sassToCss'));
gulp.task('injectCSSJS', getTask('injectCSSJS'));


/*gulp.task('jsLibs', function(){
	return gulp.src([
			libsDir + 'angular/angular.min.js',
			libsDir + 'angular-ui-router/release/angular-ui-router.min.js'
		])
		.pipe(concat('bundlejslibs.js'))
		.pipe(gulp.dest('app/builds/dev/'));
});*/

gulp.task('default', ['create', 'dev'], function(){

});

