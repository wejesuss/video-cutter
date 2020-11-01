const { GetVideoController } = require("./GetVideoController");
const { GetVideoUseCase } = require("./GetVideoUseCase");

const getVideoUseCase = new GetVideoUseCase();
const getVideoController = new GetVideoController(getVideoUseCase);

module.exports = { getVideoController, getVideoUseCase };