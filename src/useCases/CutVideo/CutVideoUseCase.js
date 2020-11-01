const fs = require('fs');
const { resolve } = require('path');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
const { removeVideoUseCase } = require("../RemoveVideo")

class CutVideoUseCase {
    execute({ input = '', output = '', from = 0, to = 0, rawFolder, editedFolder }) {
        if(from >= 1) {
            from -= 1;
        }

        output = resolve(editedFolder, output);
        return this.cut(input, output, from, to, rawFolder, editedFolder);
    }

    async cut(input, output, from, to, rawFolder, editedFolder) {
        try {
            await exec(`ffmpeg -ss ${from} -to ${to} -i ${input} -c copy ${output}`);
            setTimeout(() => {
                fs.unlinkSync(input);
                removeVideoUseCase.execute(output);
            }, 2000);
            
            return true;
        } catch (error) {
            console.error(error);
            fs.rmdirSync(editedFolder, { recursive: true });
            fs.rmdirSync(rawFolder, { recursive: true });
            return false;
        }
    }
}

module.exports = { CutVideoUseCase };