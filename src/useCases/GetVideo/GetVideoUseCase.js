const fs = require("fs");
const { resolve } = require("path");
const atob = require("atob");
const { createTemporaryFolder } = require("../CreateTemporaryFolder")

class GetVideoUseCase {
    execute(path) {
        const fileExists = fs.existsSync(resolve(createTemporaryFolder.path, 'edited', atob(path)));

        if(fileExists) {
            return true;
        }

        return false;
    }
}

module.exports = { GetVideoUseCase };