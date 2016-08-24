/**
 * Created by RZ3T64 on 6/24/2016.
 */

var fs = require('fs'),
    sassToCss = require('./sassToCss.js'),
    jsMin = require('./jsMin'),
    packageFile = JSON.parse(fs.readFileSync('package.json', 'utf8')),
    http = require('http'),
    decision = require('./decision');

function createFiles(gulp, plugins, argv, prodVersion){
    parseVersion(gulp, plugins, argv, prodVersion, function() {
        var args = Array.prototype.slice.call(arguments), i = 0;
        for (; i < args.length; i++) {
            jsMin(gulp, plugins, 'app/', args[i]);
            sassToCss(gulp, plugins, 'app/', args[i]);
            console.log(args[i]);
        }
    });
}

// function minorFile(gulp, plugins, argv, prodVersion) {
//     parseVersion(gulp, plugins, argv, prodVersion, function(newVersion) {
//         jsMin(gulp, plugins,'app/', newVersion, 'minor');
//         sassToCss(gulp, plugins, 'app/', newVersion, 'minor');
//
//     });
// }
//
// function patchFile(gulp, plugins, argv, prodVersion) {
//     parseVersion(gulp, plugins, argv, prodVersion, function(newVersion) {
//         jsMin(gulp, plugins, 'app/', newVersion, 'patch');
//         sassToCss(gulp, plugins, 'app/', newVersion, 'patch');
//     });
// }

function parseVersion(gulp, plugins, argv, prod, cb ) {
    var part = prod.split('.'),
        major = part[0],
        minor = part[1],
        patch = part[2];

    if (argv.major && Object.keys(argv)[1] === 'major') {
        return cb(argv.major);
    }
    if (argv.minor && Object.keys(argv)[1] === 'minor') {
        return cb(major, major + '.' + argv.minor);
    }
    if (argv.patch && Object.keys(argv)[1] === 'patch') {
        return cb(major, major + '.' + minor, major + '.' + minor + '.' + argv.patch);
    }


    // gulp.src(['package.json'])
    //     .pipe(plugins.replace(packageFile.version, newVersion))
    //     .pipe(gulp.dest('./'));
    //
    // gulp.src(['package.json'])
    //     .pipe(plugins.replace(packageFile.previousVersion, prod.toString()))
    //     .pipe(gulp.dest('./'));




}

function getProdVersion(cb) {
    var options = {
        host: '',
        path: '/v.json',
        port: 8080
    };
    http.get(options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function(response) {
            cb((JSON.parse(response).version));
        });
        res.on('error', function(e) {
            cb(e.message);
            console.log('ERROR: ' + e.message);
        });
    });
}

module.exports = function ( gulp, plugins, demoOrApp, argv) {

    if ((typeof(argv.major) === 'number' && argv.major % 1 === 0) ||
        (typeof(argv.minor) === 'number' && argv.minor % 1 === 0) ||
        (typeof(argv.patch) === 'number' && argv.patch % 1 === 0)) {
        getProdVersion(function(prodVersion) {
            console.log("-------------------------");
            console.log("Prod version: ", prodVersion);
            console.log("Previous version: ", packageFile.previousVersion);
            console.log("Current version: ", packageFile.version);
            console.log("-------------------------");

            createFiles(gulp, plugins, argv, prodVersion);

        });
    } else {
        console.log("Enter a version number in integer format.");
    }
};
