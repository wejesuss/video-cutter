const fs = require("fs");
const { resolve } = require("path");

class CreateTemporaryFolder {
    constructor(path = '') {
        this.path = path;
    }

    execute(recursive = false, ...args) {
        if(recursive === null || recursive === undefined) {
            recursive = false;
        }

        if(!fs.existsSync(this.path)) {
            fs.mkdirSync(this.path, { recursive });
        }

        args.forEach(path => {
            path = resolve(this.path, path);

            if(!fs.existsSync(path)) {
                fs.mkdirSync(path, { recursive });
            }
        });
    }
}

module.exports = { CreateTemporaryFolder };