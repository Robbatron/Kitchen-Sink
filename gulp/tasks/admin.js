"use strict";

module.exports = {
    get(gulp) {
        const admin = () => {
console.log(` ******************************************************************************************
 **                                | |         (_)                              | |      **
 **     _ __   __ _ ______ __ _  __| |_ __ ___  _ _ __    _ __   __ _ _ __   ___| |      **
 **    |  _ \\ / _  |______/ _  |/ _  |  _   _ \\| |  _ \\  |  _ \\ / _  |  _ \\ / _ \\ |      **
 **    | | | | (_| |     | (_| | (_| | | | | | | | | | | | |_) | (_| | | | |  __/ |      **
 **    |_| |_|\\__, |      \\__,_|\\__,_|_| |_| |_|_|_| |_| | .__/ \\__,_|_| |_|\\___|_|      **
 **            __/ |                                     | |                             **
 **           |___/                                      |_|                 0.6 v       **
 **                                                                                      **
 ******************************************************************************************`);

            console.log(`
    Usage : gulp version --<args> = <version> 
 
        --major        : Specify major version (integer from 1-99)
        --minor        : Specify minor version (integer from 1-99)
        --patch        : Specify patch version (integer from 1-99) 
        --current      : Specify patch version (integer from 1-99)
            `);
        };
        return admin();
    }
};
