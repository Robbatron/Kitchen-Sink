/**
 * Created by RZ3T64 on 6/28/2016.
 */

module.exports = function ( gulp ) {

        function help() {
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

            console.log("\n  Commands available to use :\n" +
                " \n" +
                "   Usage : gulp <command> --<args> <file name>\n" +
                " \n" +
                "    demo --go                     : Starts the Kitchen Sink Demo App\n" +
                "    dev                           : Starts build process for Dev project app\n" +
                "    prod                          : Starts build process for Prod app\n" +
                "    create                        : command used with arguments below\n" +
                "  \n" +
                "     --project <project name>      : Creates a starter project with the project name argument passed. Argument name should be 'camelCase'.\n" +
                "     --constant <constant name>    : Creates a constant with the given name.\n" +
                "     --filter <constant name>      : Creates a filter with the given name.\n" +
                "     --service <service name>      : Creates a service with the given name.\n" +
                "     --component <component name>  : Creates a component, use 'camelCase' for the name.\n" +
                "\n");
        }
        return help();
};
