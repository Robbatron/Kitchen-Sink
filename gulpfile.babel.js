"use strict";

const fs = require('fs'),
	  gulp = require('gulp'),
	  browserSync = require('browser-sync').create(),
	  jsonServer = require('gulp-json-srv'),
	  plugins = require('gulp-load-plugins')({ camelize: true }),
	  http = require('http'),
	  argv = require('yargs').argv,
	  sourcemaps = require("gulp-sourcemaps"),
	  babel = require('gulp-babel'),
	  //packer = require('zip-stream'),
	  zip = require('gulp-zip'),
	  clean = require('gulp-clean'),
	  //glob = require('glob'),
	  artifactoryUpload = require('gulp-artifactory-upload');

const packageFile = JSON.parse(fs.readFileSync('package.json', 'utf8'));

	let demoOrApp = '';
	if(argv.go)
		demoOrApp = 'aksDemo/app/';
	else
		demoOrApp = 'app/';

	const scriptsDir = demoOrApp + 'scripts/',
		  devTasks = [ 'injectCSSJS', 'browser-sync' ],
		  buildTasks = [ 'eslint', 'jsMin', 'sassToCss', 'unitTests' ];

function getTask(task) {
	console.log('task name:', task);
	return require('./gulp/tasks/' + task).get(gulp, plugins, demoOrApp, argv);
}

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir : './' + demoOrApp
		},
		reloadDebounce: 2000,
		reloadDelay: 9000
	});
	
	const reloadAPI = jsonServer.start({
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

gulp.task('build', ['prod'], () => {
	return gulp.src(['./app/builds/**.*', '!./app/builds/*.zip'], {read: false})
		   .pipe(clean());
});

gulp.task('prod', buildTasks, () => {
	console.log("Prod Started!");
	const stream = gulp.src(['./app/builds/**.*', '!./app/builds/*.zip'])
		  .pipe(zip(`archive${packageFile.version}.zip`))
		  .pipe(gulp.dest('./app/builds/'));
	return stream;

	// const archive = new packer(),
	// 	  zip = fs.createWriteStream(`./app/builds/bundle${packageFile.version}.zip`),
	// 	  css = glob('./app/builds/*.css', function(files) { return files }),
	// 	  cssStream = fs.readFileSync(css),
	// 	  js = glob('./app/builds/*.js', function(files) { return files }),
	// 	  jsStream = fs.readFileSync(js);
    //
	// archive.on('error', err => { throw err });
	// archive.on('data', data => zip.write(data));
    //
	// glob(['./app/builds/*.css', './app/builds/*.js'], function(er, files) {
	// 	archive.entry(fs.readFileSync(cssStream), {name: 'bundleCss.css'}, (err) => {
	// 		if (err) throw err;
	// 		archive.entry(fs.readFileSync(jsStream), {name: 'bundlejs.js'}, (err) => {
	// 			if (err) throw err;
	// 			archive.finalize();
	// 		});
	// });
});

gulp.task('deploy', () => {
	return gulp.src( 'test.zip' )
		.pipe(artifactoryUpload({
			url: 'http://artifactory.server.com:8081/artifactory/libs-release-local',
			username: 'user', // optional
			password: 'password', // optional
			rename(filename) { return filename + "1"; }, // optional
			properties: {
				// artifact properties to be appended to the URL
			},
			request: {
				// options that are passed to request.put()
			}
		}))
		.on('error', gutil.log);
});

gulp.task('dev', buildTasks.concat(devTasks), () => console.log("Dev Started!"));
gulp.task('demo', buildTasks.concat(devTasks), () => console.log("Demo Started!"));
gulp.task('admin', () => getTask('admin'));
gulp.task('version', () => getTask('version'));
gulp.task('help', () => getTask('help'));
gulp.task('create', () => getTask('create'));
gulp.task('unitTests', () => getTask('unitTests'));
gulp.task('eslint', () => getTask('eslint'));
gulp.task('jsMin', () => getTask('jsMin'));
gulp.task('sassToCss', ['jsMin'],() => getTask('sassToCss'));
gulp.task('injectCSSJS', () => getTask('injectCSSJS'));
gulp.task("default", () => {
	return gulp.src("src/**/*.js")
		.pipe(sourcemaps.init())
		.pipe(babel())
		.pipe(concat("all.js"))
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("dist"));
});
