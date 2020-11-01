const fs = require("fs");
const { resolve } = require("path");
const { createTemporaryFolder } = require("../CreateTemporaryFolder")

class RemoveVideoUseCase {
    execute(path) {
        const filepath = resolve(createTemporaryFolder.path, 'edited', path);
        const fileExists = fs.existsSync(filepath);
        const TWENTY_NINE_MINUTES = 29 * 60 * 1000;


        if(fileExists) {
            setTimeout(() => {
                fs.unlinkSync(filepath);
            }, TWENTY_NINE_MINUTES);

            return true;
        }

        return false;
    }
}

module.exports = { RemoveVideoUseCase };