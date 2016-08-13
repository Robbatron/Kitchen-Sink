/**
 * Created by RZ3T64 on 6/24/2016.
 */

var fs = require('fs');

var components = 'app/scripts/components/',
    services = 'app/scripts/services/',
    constants = 'app/scripts/constants/',
    filters = 'app/scripts/filters/',
    app = 'app/scripts/',
    packageFile = JSON.parse(fs.readFileSync('package.json', 'utf8'));


function componentFile(gulp, plugins, appName, compName){
    
    var compName = ( compName === true ? appName : compName),
        ctrlName = (compName.charAt(0).toUpperCase() + compName.slice(1)) + 'Ctrl';
        
    gulp.src(['package.json'])
        .pipe(plugins.replace(packageFile.name, appName))
        .pipe(gulp.dest('./'));

    gulp.src(['gulp/templates/angular/component.js'])
        .pipe(plugins.replace('appName', appName))
        .pipe(plugins.replace('compName', compName))
        .pipe(plugins.replace('ctrlName', ctrlName))
        .pipe(plugins.replace('templateName', compName + '/' + compName + '.html'))
        .pipe(plugins.rename(compName + '.js'))
        .pipe(gulp.dest(components + compName + '/'));

    gulp.src(['gulp/templates/specs/component.spec.js'])
        .pipe(plugins.replace('appName', appName))
        .pipe(plugins.replace('compName', compName))
        .pipe(plugins.replace('templateName', compName))
        .pipe(plugins.rename(compName + '.spec.js'))
        .pipe(gulp.dest(components + compName + '/'));
    
    gulp.src(['gulp/templates/angular/template.html'])
        .pipe(plugins.rename(compName + '.html'))
        .pipe(gulp.dest(components + compName + '/'));


    appFile(gulp, plugins, appName, compName);
}

function filterFile(gulp, plugins, appName, filterName){

    gulp.src(['gulp/templates/angular/filter.js'])
        .pipe(plugins.replace('appName', appName))
        .pipe(plugins.replace('filterName', filterName))
        .pipe(plugins.rename(filterName + '.js'))
        .pipe(gulp.dest(filters))

    gulp.src(['gulp/templates/specs/filter.spec.js'])
        .pipe(plugins.replace('appName', appName))
        .pipe(plugins.replace('filterName', filterName))
        .pipe(plugins.rename(filterName + '.spec.js'))
        .pipe(gulp.dest(filters));
}

function serviceApiFile(gulp, plugins, appName){

    gulp.src(['gulp/templates/angular/apiService.js'])
        .pipe(plugins.replace('appName', appName))
        .pipe(plugins.rename('apiService.js'))
        .pipe(gulp.dest(services));
}

function serviceFile(gulp, plugins, appName, serviceName){

    gulp.src(['gulp/templates/angular/service.js'])
        .pipe(plugins.replace('appName', appName))
        .pipe(plugins.replace('serviceName', serviceName))
        .pipe(plugins.rename(serviceName + '.js'))
        .pipe(gulp.dest(services));

    gulp.src(['gulp/templates/specs/service.spec.js'])
        .pipe(plugins.replace('appName', appName))
        .pipe(plugins.replace('serviceName', serviceName))
        .pipe(plugins.rename(serviceName + '.spec.js'))
        .pipe(gulp.dest(services));
}

function constantFile(gulp, plugins, appName, constantName){

    gulp.src(['gulp/templates/angular/constant.js'])
        .pipe(plugins.replace('appName', appName))
        .pipe(plugins.replace('serviceName', constantName))
        .pipe(plugins.rename(constantName + '.js'))
        .pipe(gulp.dest(constants));
}

function indexFile(gulp, plugins, appName){

    gulp.src(['gulp/templates/angular/index.html'])
        .pipe(plugins.replace('appName', appName))
        .pipe(plugins.replace('component-name', appName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()))
        .pipe(gulp.dest('app/'));
}

function appFile(gulp, plugins, appName, compName){
    
    var snakeCaseCompName = compName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();


     var addState = "\n        .state('" + compName.toLowerCase() + "', {\n" +
        "            url : '/" + compName.toLowerCase() + "',\n" +
        "            template : \'<" + snakeCaseCompName + "></" + snakeCaseCompName + ">\',\n " +
        "           resolve : { \n" +
         "               " + compName + " : function ( ) { \n" +
         "                    \n" +
         "               }\n"+
        "            }\n"+
    "        })/*add-state*/";
    
    gulp.src(['gulp/templates/angular/app.js'])
        .pipe(plugins.replace('appName', appName))
        .pipe(plugins.replace('/*add-state*/',addState))
        .pipe(plugins.rename('app.js'))
        .pipe(gulp.dest(app));
}

function newProject(gulp, plugins, appName){

    componentFile( gulp, plugins, appName, true );
    filterFile( gulp, plugins, appName, 'mainFilter' );
    serviceApiFile( gulp, plugins, appName );
    serviceFile( gulp, plugins, appName, 'mainService' );
    constantFile( gulp, plugins, appName, 'coreValues' );
    indexFile( gulp, plugins, appName );
}

function createType (gulp, plugins, argv ) {

    var createType1 = {
        project : function(){

            newProject(gulp, plugins, argv.project);
            
            console.log( "result : ", argv.project );
        },
        filter : function(){
            filterFile(gulp, plugins, packageFile.name, argv.filter);
        },
        constant : function(){
            constantFile(gulp, plugins, packageFile.name, argv.constant);
        },
        service : function(){
            serviceFile(gulp, plugins, packageFile.name, argv.service);
        },
        component : function(){
            componentFile(gulp, plugins, packageFile.name, argv.component);
        },
        template : function(){
            templateFile(gulp, plugins, packageFile.name, argv.template);
        }
    };
    
    return createType1[Object.keys(argv)[1]]();
}

module.exports = function ( gulp, plugins, demoOrApp, argv) {

    return function () {
        createType(gulp, plugins, argv);
    };
};