const { CutVideoController } = require("./CutVideoController");
const { CutVideoUseCase } = require("./CutVideoUseCase");

const cutVideoUseCase = new CutVideoUseCase();
const cutVideoController = new CutVideoController(cutVideoUseCase);

module.exports = { cutVideoController, cutVideoUseCase };