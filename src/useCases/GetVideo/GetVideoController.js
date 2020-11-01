const { resolve } = require("path");

class GetVideoController {
    getVideoUseCase;

    constructor(getVideoUseCase) {
        this.getVideoUseCase = getVideoUseCase;
    }

    async handle(request, response) {
        const fileExists = this.getVideoUseCase.execute(request.params.name);

        if(fileExists) {
            return response.status(200)
            .sendFile('/index.html', { 
                root: resolve(__dirname, '..', '..', '..', 'public') 
            });
        }

        return response.redirect("/");
    }
}

module.exports = { GetVideoController };