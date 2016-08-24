/**
 * Created by LZBHV4 on 8/15/2016.
 */

module.exports = function ( gulp ) {

        function admin() {
            console.log(" ******************************************************************************************\n" +
                " **                                | |         (_)                              | |      **\n"+
                " **     _ __   __ _ ______ __ _  __| |_ __ ___  _ _ __    _ __   __ _ _ __   ___| |      **\n"+
                " **    |  _ \\ / _  |______/ _  |/ _  |  _   _ \\| |  _ \\  |  _ \\ / _  |  _ \\ / _ \\ |      **\n"+
                " **    | | | | (_| |     | (_| | (_| | | | | | | | | | | | |_) | (_| | | | |  __/ |      **\n"+
                " **    |_| |_|\\__, |      \\__,_|\\__,_|_| |_| |_|_|_| |_| | .__/ \\__,_|_| |_|\\___|_|      **\n"+
                " **            __/ |                                     | |                             **\n"+
                " **           |___/                                      |_|                 0.6 v       **\n"+
                " **                                                                                      **\n"+
                " ******************************************************************************************");

            console.log("\n  Commands available to use :\n" +
                " \n" +
                "   Usage : gulp version --<args> = <version>\n" +
                " \n" +
                "    --major        : Specify major version (integer from 1-99) \n" +
                "    --minor        : Specify minor version (integer from 1-99) \n" +
                "    --patch        : Specify patch version (integer from 1-99) \n" +
                "    --current      : Specify patch version (integer from 1-99) \n");
        }
        return admin();
};
