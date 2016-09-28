"use strict";

import fs from 'fs';
import sassToCss from './sassToCss.js';
import jsMin from './jsMin.js';
import http from 'http';

const packageFile = JSON.parse(fs.readFileSync('package.json', 'utf8'));

const getProdVersion = (cb) => {
    const options = {
        host: '',
        path: '/v.json',
        port: 8080
    };
    const req = http.get(options, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (response) {
            cb((JSON.parse(response).version));
        });
        res.on('error', function (e) {
            cb(e.message);
            console.log('ERROR: ' + e.message);
        });
    });
    req.on('error', function(err) {
        console.log(`${err.code}: Tomcat must be running to fetch version number. Don't blame front-end.`);
    });
    req.end();
};

const replaceVersionNumber = (gulp, plugins, parsed) => {
    const version = new RegExp('^(?:(\\d+)\\.)?(?:(\\d+)\\.)?(\\*|\\d+)$');
    gulp.src(['package.json'])
        .pipe(plugins.replace(`"previousVersion": "${packageFile.previousVersion}"`,
            `"previousVersion": "${packageFile.version}"`))
        .pipe(plugins.replace(`"version": "${packageFile.version}"`,
            `"version": "${parsed}"`)) // passed from parseVersion callback
        .pipe(gulp.dest('./'));
};

const parseVersion = (argv, prod, cb) => {

    const part = prod.split('.'),
        major = part[0],
        minor = part[1],
        patch = part[2];
    
    if (argv.major && Object.keys(argv)[1] === 'major')
         return cb(`${argv.major}.0.0`);

    if (argv.minor && Object.keys(argv)[1] === 'minor')
        return cb(`${major}.${argv.minor}.0`, `${major}.0.0`);

    if (argv.patch && Object.keys(argv)[1] === 'patch')
        return cb(`${major}.${minor}.${argv.patch}`, `${major}.${minor}.0`, `${major}.0.0`);
};

const createFiles = (gulp, plugins, argv, prodVersion) => {
    parseVersion(argv, prodVersion, function(parsed) {
        for (let arg of Array.prototype.slice.call(arguments)){
            jsMin.get(gulp, plugins, 'app/', arg);
            sassToCss.get(gulp, plugins, 'app/', arg);
        }
        replaceVersionNumber(gulp, plugins, parsed);
    });
};

module.exports = {
    get(gulp, plugins, demoOrApp, argv) {
        if ((typeof(argv.major) === 'number' && argv.major % 1 === 0) ||
            (typeof(argv.minor) === 'number' && argv.minor % 1 === 0) ||
            (typeof(argv.patch) === 'number' && argv.patch % 1 === 0)) {
            getProdVersion(prodVersion => {
                console.log("-------------------------");
                console.log("Prod version: ", prodVersion);
                console.log("Previous version: ", packageFile.previousVersion);
                console.log("Current version: ", packageFile.version);
                console.log("-------------------------");

                createFiles(gulp, plugins, argv, prodVersion);
            });
        }
        else if (argv.current)
            console.log("Current version: ", packageFile.version);
        else
            console.log("Enter a version number in integer format.");
    }
};
