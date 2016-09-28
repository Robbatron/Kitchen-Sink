"use strict";

module.exports = {
    get(gulp) {
        const help = () => {
            console.log(" **********************************************************************************\n" +
                " **    _                      _              _  __ _  _        _                 **\n"+
                " **   /_\\   _ _   __ _  _  _ | | __ _  _ _  | |/ /(_)| |_  __ | |_   ___  _ _    **\n"+
                " **  / _ \\ | ' \\ / _` || || || |/ _` || '_| | ' < | ||  _|/ _|| ' \\ / -_)| ' \\   **\n"+
                " ** /_/ \\_\\|_||_|\\__, | \\_,_||_|\\__,_||_|   |_|\\_\\|_| \\__|\\__||_||_|\\___||_||_|  **\n"+
                " **               |___/                                                          **\n"+
                " **                     ___  _        _       _  _       _                       **\n"+
                " **                    / __|(_) _ _  | |__   | || | ___ | | _ __                 **\n"+
                " **                    \\__ \\| || ' \\ | / /   | __ |/ -_)| || '_ \\                **\n"+
                " **                    |___/|_||_||_||_\\_\\   |_||_|\\___||_|| .__/   0.6 v        **\n"+
                " **                                                        |_|                   **\n"+
                " **********************************************************************************");

    console.log(`  Commands available to use :
                
    Usage : gulp <command> --<args> <file name>
        
        demo --go                     : Starts the Kitchen Sink Demo App
        dev                           : Starts build process for Dev project app
        prod                          : Starts build process for Prod app
        build                         : Create zip of current minified files & deploy to artifactory
        create                        : Command used with arguments below
        
        --project <project name>      : Creates a starter project with the project name argument passed. Argument name should be 'camelCase'
        --constant <constant name>    : Creates a constant with the given name
        --filter <constant name>      : Creates a filter with the given name
        --service <service name>      : Creates a service with the given name
        --component <component name>  : Creates a component, use 'camelCase' for the name
                `);
        }
        return help();
    }
};