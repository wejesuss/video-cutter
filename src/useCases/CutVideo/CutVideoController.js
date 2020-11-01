const btoa = require("btoa");

class CutVideoController {
    cutVideoUseCase;

    constructor(cutVideoUseCase) {
        this.cutVideoUseCase = cutVideoUseCase;
    }

    toSeconds(time) {
        let [hours, minutes, seconds] = time.split(":").map(Number);

        minutes = hours * 60 + minutes;
        seconds = minutes * 60 + seconds;

        return seconds;
    }

    async handle(request, response) {
        let { from, to } = request.body;
        const { filename, path: input } = request.file;
        const { editedFolder, rawFolder } = request;

        const output = `truncated-${filename}`;

        from = this.toSeconds(from);
        to = this.toSeconds(to);

        const truncated = await this.cutVideoUseCase.execute({ 
            input,
            output,
            from,
            to,
            rawFolder,
            editedFolder
        });

        if(truncated) {
            return response.status(200).redirect(`/cut/${btoa(output)}`);
        }

        return response.status(500).redirect("/?truncated=false");
    }
}

module.exports = { CutVideoController };